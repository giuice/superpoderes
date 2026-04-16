# T5 — Demo Screenshots Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Capture 6 screenshots of ChatGPT responses to demo prompts and insert them as backup images in the Reveal.js deck HTML.

**Architecture:** Playwright script opens ChatGPT in Chromium, automates prompt input and screenshot capture. Manual login required once. Screenshots saved to `assets/backups/`, then `index.html` backup slides updated with `<img>` tags replacing placeholders.

**Tech Stack:** Node.js, Playwright, ChatGPT web UI

---

### Task 1: Initialize Node.js project and install Playwright

**Files:**
- Create: `package.json`
- Create: `scripts/` directory

- [ ] **Step 1: Create package.json with Playwright dependency**

```json
{
  "name": "superpoderes-capture",
  "private": true,
  "type": "module",
  "scripts": {
    "capture": "node scripts/capture-demos.mjs"
  },
  "devDependencies": {
    "playwright": "^1.52.0"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: `node_modules/` created, `package-lock.json` generated

- [ ] **Step 3: Install Playwright Chromium browser**

Run: `npx playwright install chromium`
Expected: Chromium downloaded

- [ ] **Step 4: Create directories**

Run: `mkdir -p scripts assets/backups`
Expected: `scripts/` and `assets/backups/` created

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json scripts/ assets/backups/.gitkeep
git commit -m "chore(t5): init Node.js + Playwright + directories for screenshot capture"
```

Note: add `node_modules/` to `.gitignore` if not already present.

---

### Task 2: Write the capture script

**Files:**
- Create: `scripts/capture-demos.mjs`

- [ ] **Step 1: Write capture-demos.mjs**

```javascript
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
      'Uso Instagram e WhatsApp. Os clientes mais fiéis são de 30 a 60 anos, gente da cidade e região que gosta de boa comida.',
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
```

- [ ] **Step 2: Commit**

```bash
git add scripts/capture-demos.mjs
git commit -m "feat(t5): Playwright capture script for ChatGPT demo screenshots"
```

---

### Task 3: Add .gitignore for node_modules

**Files:**
- Create/Modify: `.gitignore`

- [ ] **Step 1: Create .gitignore**

```
node_modules/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add .gitignore for node_modules"
```

---

### Task 4: Run capture script and generate screenshots

**Files:**
- Generated: `assets/backups/demo1-sem-contexto.png`
- Generated: `assets/backups/demo1-com-contexto.png`
- Generated: `assets/backups/demo2-vago.png`
- Generated: `assets/backups/demo2-especifico.png`
- Generated: `assets/backups/demo3-explore.png`
- Generated: `assets/backups/demo3-plano-executa.png`

- [ ] **Step 1: Run the capture script**

Run: `npm run capture`

Expected behavior:
1. Chromium opens ChatGPT
2. Script pauses — log in manually
3. Press Enter in terminal to continue
4. Script runs through all 6 demos, taking screenshots
5. Screenshots saved to `assets/backups/`

- [ ] **Step 2: Verify screenshots exist and are readable**

Run: `ls -la assets/backups/*.png`
Expected: 6 PNG files, each > 50KB

- [ ] **Step 3: Visually inspect screenshots**

Open each PNG and verify:
- Text is readable
- ChatGPT responses are visible and complete (not cut off mid-stream)
- Screenshots are at least 1200px wide

- [ ] **Step 4: If any screenshot is bad, re-run just that demo**

Edit `DEMO_PROMPTS` in the script temporarily, or re-run full script.

- [ ] **Step 5: Commit screenshots**

```bash
git add assets/backups/
git commit -m "feat(t5): add backup screenshots from ChatGPT demo runs"
```

---

### Task 5: Update index.html backup slides with screenshots

**Files:**
- Modify: `index.html:309-331` (3 backup slide sections)

- [ ] **Step 1: Replace backup-demo1 placeholder**

Replace the content of `section#backup-demo1` (lines 309-315) with:

```html
    <section id="backup-demo1" data-visibility="hidden">
      <div class="eyebrow">// BACKUP · DEMO 01</div>
      <h3>Demo 1 — Antes e Depois</h3>
      <div class="ba" style="margin-top:1.5rem;">
        <div class="col before">
          <div class="label">// SEM CONTEXTO</div>
          <img src="assets/backups/demo1-sem-contexto.png" alt="Demo 1 sem contexto" style="width:100%; border-radius:4px;">
        </div>
        <div class="col after">
          <div class="label">// COM CONTEXTO</div>
          <img src="assets/backups/demo1-com-contexto.png" alt="Demo 1 com contexto" style="width:100%; border-radius:4px;">
        </div>
      </div>
      <aside class="notes">Usar se internet cair durante demo ao vivo.</aside>
    </section>
```

- [ ] **Step 2: Replace backup-demo2 placeholder**

Replace the content of `section#backup-demo2` (lines 317-323) with:

```html
    <section id="backup-demo2" data-visibility="hidden">
      <div class="eyebrow">// BACKUP · DEMO 02</div>
      <h3>Demo 2 — Vago vs. Específico</h3>
      <div class="ba" style="margin-top:1.5rem;">
        <div class="col before">
          <div class="label">// VAGO</div>
          <img src="assets/backups/demo2-vago.png" alt="Demo 2 vago" style="width:100%; border-radius:4px;">
        </div>
        <div class="col after">
          <div class="label">// ESPECÍFICO</div>
          <img src="assets/backups/demo2-especifico.png" alt="Demo 2 específico" style="width:100%; border-radius:4px;">
        </div>
      </div>
      <aside class="notes">Usar se internet cair durante demo ao vivo.</aside>
    </section>
```

- [ ] **Step 3: Replace backup-demo3 placeholder**

Replace the content of `section#backup-demo3` (lines 325-331) with:

```html
    <section id="backup-demo3" data-visibility="hidden">
      <div class="eyebrow">// BACKUP · DEMO 03</div>
      <h3>Demo 3 — Explore → Planeje → Execute</h3>
      <div style="display:grid; grid-template-columns:1fr; gap:1rem; margin-top:1.5rem;">
        <div>
          <div class="label">// EXPLORE</div>
          <img src="assets/backups/demo3-explore.png" alt="Demo 3 explore" style="width:100%; border-radius:4px;">
        </div>
        <div>
          <div class="label">// PLANEJE + EXECUTE</div>
          <img src="assets/backups/demo3-plano-executa.png" alt="Demo 3 plano e execução" style="width:100%; border-radius:4px;">
        </div>
      </div>
      <aside class="notes">Usar se internet cair durante demo ao vivo.</aside>
    </section>
```

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat(t5): insert backup screenshots into deck HTML slides"
```

---

### Task 6: Verify deck and publish

**Files:**
- Modify: `index.html` (verification only)

- [ ] **Step 1: Open deck locally and verify backup slides**

Run: `npx serve .` or `python3 -m http.server`
Open: `http://localhost:3000`

Navigate to backup slides by adding `#/backup-demo1`, `#/backup-demo2`, `#/backup-demo3` to the URL.

Verify:
- Images load correctly
- Side-by-side layout works for Demo 1 and 2
- Stacked layout works for Demo 3
- Images are legible at presentation size

- [ ] **Step 2: Push to GitHub Pages**

```bash
git push origin main
```

- [ ] **Step 3: Verify live deployment**

Open: `https://giuice.github.io/superpoderes/#/backup-demo1`
Verify images load from GitHub Pages.

- [ ] **Step 4: Update AGENTS.md**

Update E4 status from "Pendente (T5/T6)" to "✅ Concluído (T5/T6)".

```bash
git add AGENTS.md
git commit -m "docs(agents): T5/T6 complete — backup screenshots in deck"
```

---

## Self-Review

**Spec coverage:**
- 6 screenshots captured → Task 4 ✅
- Screenshots in `assets/backups/` → Task 1 + Task 4 ✅
- Each screenshot ≥ 1200px wide → viewport 1400px in script ✅
- Placeholders replaced with `<img>` tags → Task 5 ✅
- Side-by-side layout Demo 1/2 → Task 5 ✅
- Stacked layout Demo 3 → Task 5 ✅
- Deck published on GitHub Pages → Task 6 ✅
- Playwright script → Task 2 ✅
- Stream detection heuristics → Task 2 (waitForStreamEnd) ✅
- Interactive Demo 3 handling → Task 2 (interactiveResponses) ✅

**Placeholder scan:** No TBDs, TODOs, or "implement later" in plan.

**Type consistency:** Demo IDs match between script and HTML (`demo1-sem-contexto`, etc.) ✅