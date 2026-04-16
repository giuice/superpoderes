import { chromium } from 'playwright';
import { readFile } from 'fs/promises';
import { join } from 'path';

const CHATGPT_URL = 'https://chatgpt.com';
const SCREENSHOTS_DIR = join(import.meta.dirname, '..', 'assets', 'backups');
const VIEWPORT = { width: 1400, height: 900 };

// Prompts from T2 demo scripts
const DEMO_PROMPTS = [
  {
    id: 'demo1-sem-contexto',
    label: 'Demo 1A — Sem Contexto',
    newChat: true,
    prompt: 'Crie um post pra Instagram.',
    waitForInteractive: false,
  },
  {
    id: 'demo1-com-contexto',
    label: 'Demo 1B — Com Contexto',
    newChat: true,
    prompt: `Você é um especialista em marketing para pequenos negócios de cidade pequena.

Eu sou dono do Empório Princesa, em Campanha, MG. O Empório Princesa é um lugar diferenciado: mistura empório, bistrô, cafeteria e experiências gastronômicas. Trabalhamos com produtos de qualidade, vinhos, cervejas artesanais, queijos, cafés, lanches e também fazemos eventos especiais e pratos por encomenda.

Meu público é formado por pessoas que gostam de comer e beber bem, valorizam qualidade e gostam de experiências mais exclusivas.

Crie um post de Instagram convidando as pessoas para conhecerem o Empório Princesa neste fim de semana.

Regras:
- texto principal com no máximo 7 linhas
- tom elegante, acolhedor e sem exagero
- destacar a experiência do lugar, não só os produtos
- mencionar Campanha, MG de forma natural
- terminar com um convite simples para visitar ou reservar
- não usar clichês como "imperdível" ou "você não pode perder"`,
    waitForInteractive: false,
  },
  {
    id: 'demo2-vago',
    label: 'Demo 2A — Vago',
    newChat: true,
    prompt: 'Escreva uma mensagem divulgando um evento do Empório Princesa.',
    waitForInteractive: false,
  },
  {
    id: 'demo2-especifico',
    label: 'Demo 2B — Específico',
    newChat: true,
    prompt: `Escreva uma mensagem curta de WhatsApp, com no máximo 5 linhas, para convidar clientes do Empório Princesa para um evento especial com um cozinheiro conhecido da cidade.

Contexto:
- O Empório Princesa fica em Campanha, MG
- É um lugar para quem gosta de boa comida, bons vinhos, cervejas artesanais e produtos de qualidade
- O evento será por reserva
- A proposta é parecer exclusiva, mas acolhedora

Tom: elegante, próximo e convidativo, sem parecer propaganda forçada.

Objetivo: despertar interesse e incentivar a pessoa a pedir mais informações ou reservar uma vaga.

Inclua:
- sensação de exclusividade sem soar elitista
- uma chamada final simples para responder no WhatsApp

Evite:
- emoji em excesso
- tom de panfleto
- texto longo`,
    waitForInteractive: false,
  },
  {
    id: 'demo3-explore',
    label: 'Demo 3 Step 1 — Explore (interactive)',
    newChat: true,
    prompt: `Meu objetivo é divulgar a bacalhoada deste sábado no Empório Princesa, em Campanha, MG. Me faça perguntas, uma por vez, até explorarmos todas as possibilidades e termos um quadro claro.`,
    waitForInteractive: true,
    interactiveResponses: [
      'Uso Instagram e WhatsApp. Os clientes mais fiés são de 30 a 60 anos, gente da cidade e região que gosta de boa comida.',
      'Já fiz divulgação antes — post no Instagram e mensagem no WhatsApp funcionam melhor. Sem orçamento pra anúncios pagos.',
      'Ok, temos um quadro claro.',
    ],
  },
  {
    id: 'demo3-plano-executa',
    label: 'Demo 3 Steps 2+3 — Planeje + Execute',
    newChat: false, // same chat
    prompt: `Agora monte um plano passo a passo pra divulgar a bacalhoada.
Cada passo deve ser pequeno e rápido de executar.`,
    followUpPrompt: 'Execute o passo 1 do plano.',
    waitForInteractive: false,
  },
];

async function waitForStreamEnd(page) {
  // Wait for the send button to become enabled again (streaming done)
  // Then wait an extra 2s for final rendering
  await page.waitForTimeout(3000); // initial wait for response to start
  try {
    // ChatGPT's stop generating button disappears when done
    await page.waitForFunction(
      () => {
        const stopBtn = document.querySelector('[data-testid="stop-button"]');
        return !stopBtn;
      },
      { timeout: 120000 }
    );
  } catch {
    // Fallback: if stop button selector changes, just wait longer
    console.log('  Stop button not found, waiting 10s fallback...');
    await page.waitForTimeout(10000);
  }
  await page.waitForTimeout(2000); // stabilization
}

async function startNewChat(page) {
  // Click new chat button
  const newChatBtn = page.locator('[data-testid="create-new-chat-button"]').first();
  if (await newChatBtn.isVisible()) {
    await newChatBtn.click();
  } else {
    // Fallback: navigate to chatgpt.com
    await page.goto(CHATGPT_URL);
  }
  await page.waitForTimeout(2000);
}

async function typeAndSend(page, prompt) {
  // Click the prompt input area
  const input = page.locator('#prompt-textarea, [contenteditable="true"]').first();
  await input.click();
  await page.waitForTimeout(500);

  // Type the prompt
  await input.fill(prompt);
  await page.waitForTimeout(500);

  // Press Enter or click send
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
}

async function typeInteractiveResponse(page, response) {
  const input = page.locator('#prompt-textarea, [contenteditable="true"]').first();
  await input.click();
  await input.fill(response);
  await page.keyboard.press('Enter');
  await waitForStreamEnd(page);
}

async function captureScreenshot(page, id) {
  const filepath = join(SCREENSHOTS_DIR, `${id}.png`);
  // Screenshot the main chat area
  const chatArea = page.locator('main').first();
  if (await chatArea.isVisible()) {
    await chatArea.screenshot({ path: filepath });
  } else {
    // Fallback: full page screenshot
    await page.screenshot({ path: filepath, fullPage: false });
  }
  console.log(`  ✓ Saved: ${filepath}`);
}

async function main() {
  console.log('Starting ChatGPT screenshot capture...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  // Navigate to ChatGPT
  console.log('Opening ChatGPT...');
  await page.goto(CHATGPT_URL);

  // Wait for manual login
  console.log('\n⚠️  Log in to ChatGPT manually, then press Enter in this terminal to continue...');
  await new Promise(resolve => {
    process.stdin.once('data', resolve);
  });

  for (const demo of DEMO_PROMPTS) {
    console.log(`\n📸 ${demo.label}`);

    if (demo.newChat) {
      await startNewChat(page);
    }

    await typeAndSend(page, demo.prompt);
    await waitForStreamEnd(page);

    // Handle interactive Q&A (Demo 3 Step 1)
    if (demo.waitForInteractive && demo.interactiveResponses) {
      for (const response of demo.interactiveResponses) {
        await typeInteractiveResponse(page, response);
      }
    }

    // Handle follow-up prompt (Demo 3 Steps 2+3)
    if (demo.followUpPrompt) {
      await typeAndSend(page, demo.followUpPrompt);
      await waitForStreamEnd(page);
    }

    await captureScreenshot(page, demo.id);
  }

  console.log('\n✅ All screenshots captured!');
  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});