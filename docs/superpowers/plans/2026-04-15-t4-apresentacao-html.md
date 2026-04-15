# T4 — Apresentação HTML (Synthwave) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar apresentação do workshop "Aprendendo o Básico pra Lidar com IA" como site HTML único, estilo synthwave/retrofuturista, hospedado no GitHub Pages, navegável por setas, com notas do apresentador embutidas.

**Architecture:** Reveal.js (v4+, via CDN jsDelivr) como engine de navegação/modo apresentador. Um único arquivo `index.html` na raiz do repo contém os 19 slides (16 principais + 3 backup) como `<section>`. CSS synthwave custom em `assets/synthwave.css` (cores, fontes, grid perspectiva, glow, sol gradiente). Fontes via Google Fonts (`Michroma`, `Space Grotesk`, `JetBrains Mono`). Notas do apresentador por slide em `<aside class="notes">`, vindas do `docs/t1-roteiro-apresentador.md`. GitHub Pages serve a raiz do repo (branch `main`).

**Tech Stack:** HTML5 · CSS3 · Reveal.js 4.x (CDN) · Google Fonts · GitHub Pages

**Case principal:** Empório Princesa, Campanha/MG.
**Público:** iniciantes em IA, pt-BR.
**Apresentador:** Giuliano Lemes.

**Não é código:** este repo não tem testes/build/lint. A fase "VERIFY" de cada task é **abrir no browser e inspecionar visualmente** (setas funcionam, layout não quebra, tipografia carrega, grid renderiza). Commits frequentes ao final de cada task.

---

## File Structure

```
/index.html                    # Deck completo, raiz do repo (GitHub Pages serve daqui)
/assets/synthwave.css          # Tema synthwave custom
/assets/favicon.svg            # (opcional) ícone
/docs/t4-preview-styles.html   # Preview dos 3 estilos (já existe) — manter como referência histórica
```

**Por que na raiz?** GitHub Pages com "Deploy from branch → /(root)" serve `index.html` direto. URL fica limpa: `https://<user>.github.io/superpoderes/`.

---

## Task 1: Setup Esqueleto Reveal.js

**Files:**
- Create: `/index.html`
- Create: `/assets/synthwave.css`

- [ ] **Step 1: Criar `assets/synthwave.css` com variáveis base**

```css
/* assets/synthwave.css — Tema Synthwave para Reveal.js */

:root {
  --bg-top: #1a0d2e;
  --bg-mid: #2d1b4e;
  --bg-bottom: #6B1E5C;
  --neon-pink: #FF6B9D;
  --neon-magenta: #C724B1;
  --neon-cyan: #00E5FF;
  --gold: #FFD700;
  --text-light: #FFD7F0;
  --text-mid: #E0D0FF;
  --text-strong: #FFFFFF;
}

/* Override Reveal.js default */
.reveal { font-family: 'Space Grotesk', sans-serif; }
.reveal .slides { text-align: left; }
.reveal .slides section {
  background: linear-gradient(180deg, var(--bg-top) 0%, var(--bg-mid) 50%, var(--bg-bottom) 100%);
  color: var(--text-strong);
  padding: 6% 8%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

/* Grid perspectiva synthwave — aparece em todos slides */
.reveal .slides section::before {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 45%;
  background-image:
    linear-gradient(rgba(255,100,200,0.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,100,200,0.35) 1px, transparent 1px);
  background-size: 60px 60px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
  pointer-events: none;
  z-index: 0;
}

.reveal .slides section > * { position: relative; z-index: 2; }

/* Tipografia */
.reveal h1, .reveal h2, .reveal h3 {
  font-family: 'Michroma', sans-serif;
  color: var(--text-strong);
  text-shadow: 2px 2px 0 var(--neon-magenta), -1px -1px 0 var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.reveal h1 { font-size: 2.8rem; line-height: 1.15; }
.reveal h2 { font-size: 2rem; }
.reveal h3 { font-size: 1.3rem; }

.reveal p, .reveal li { font-size: 1.3rem; line-height: 1.5; color: var(--text-light); }
.reveal strong { color: var(--gold); }
.reveal em { color: var(--neon-cyan); font-style: normal; }

/* Eyebrow (tag mono em cima) */
.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  letter-spacing: 3px;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

/* Sol gradiente (capa) */
.sun {
  position: absolute;
  width: 280px; height: 280px;
  right: 8%; top: 18%;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--gold) 0%, var(--neon-pink) 60%, var(--neon-magenta) 100%);
  box-shadow: 0 0 80px rgba(255,107,157,0.6);
  z-index: 1;
}

/* Cards (3 Superpoderes) */
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
.card {
  background: linear-gradient(180deg, rgba(199,36,177,0.3), rgba(26,13,46,0.7));
  border: 1px solid var(--neon-pink);
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(255,107,157,0.3);
}
.card .num {
  font-family: 'Michroma', sans-serif;
  font-size: 3rem;
  color: var(--gold);
  text-shadow: 3px 3px 0 var(--neon-magenta);
  line-height: 1;
}
.card .name { font-family: 'Michroma', sans-serif; font-size: 1rem; margin: 0.8rem 0 0.5rem; color: var(--text-strong); }
.card .desc { font-size: 1rem; color: var(--text-light); line-height: 1.4; }

/* Terminal (Atalhos) */
.terminal {
  background: rgba(0,0,0,0.6);
  border: 2px solid var(--neon-pink);
  border-radius: 4px;
  padding: 1.5rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-light);
  box-shadow: 0 0 30px rgba(255,107,157,0.4);
  margin: 1.5rem 0;
}
.terminal .prompt { color: var(--gold); }
.terminal .placeholder { color: var(--neon-cyan); }

/* Before/After (Demos) */
.ba { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
.ba .col { padding: 1.2rem; border-radius: 4px; }
.ba .before { background: rgba(26,13,46,0.6); border: 1px dashed rgba(255,215,240,0.3); }
.ba .after  { background: rgba(199,36,177,0.25); border: 1px solid var(--neon-pink); box-shadow: 0 0 20px rgba(255,107,157,0.3); }
.ba .label { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; letter-spacing: 2px; color: var(--gold); margin-bottom: 0.6rem; }
.ba .after .label { color: var(--neon-cyan); }

/* Footer */
.slide-footer {
  position: absolute;
  bottom: 4%; left: 8%; right: 8%;
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--gold);
  letter-spacing: 2px;
  z-index: 2;
}

/* Controles Reveal (setas, progresso) em cores do tema */
.reveal .controls { color: var(--neon-cyan); }
.reveal .progress { color: var(--neon-pink); }
```

- [ ] **Step 2: Criar `index.html` com estrutura Reveal.js mínima**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aprendendo o Básico pra Lidar com IA · Mentes em Ação</title>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/reset.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/reveal.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/theme/black.css" id="theme">
<link href="https://fonts.googleapis.com/css2?family=Michroma&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/synthwave.css">
</head>
<body>
<div class="reveal">
  <div class="slides">

    <!-- Slides entram aqui -->
    <section><h1>Placeholder</h1></section>

  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/reveal.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/plugin/notes/notes.js"></script>
<script>
  Reveal.initialize({
    hash: true,
    slideNumber: 'c/t',
    controls: true,
    progress: true,
    transition: 'fade',
    plugins: [ RevealNotes ]
  });
</script>
</body>
</html>
```

- [ ] **Step 3: Abrir no browser e verificar**

Run: `xdg-open index.html` (ou `open index.html` no Mac)
Expected: página carrega, fundo gradient roxo, grid synthwave na metade inferior, placeholder "PLACEHOLDER" com sombra neon, setas no canto inferior direito, barra de progresso rosa.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/synthwave.css
git commit -m "feat(t4): setup Reveal.js com tema synthwave base"
```

---

## Task 2: Slide 1 (Capa) + Slide 2 (Provocação)

**Files:**
- Modify: `index.html` (substituir placeholder, adicionar 2 `<section>`)

- [ ] **Step 1: Substituir placeholder pelos 2 primeiros slides**

Localizar `<!-- Slides entram aqui -->` e trocar bloco `<section>` placeholder por:

```html
    <!-- Slide 1 — Capa -->
    <section>
      <div class="sun"></div>
      <div class="eyebrow">Mentes em Ação · Workshop</div>
      <h1>Aprendendo<br>o Básico<br>pra Lidar<br>com IA</h1>
      <p style="font-size:1.2rem; color: var(--text-light); margin-top:1rem;">técnicas simples e claras para se lidar com IA</p>
      <div class="slide-footer">
        <span>Giuliano Lemes</span>
        <span>60 min</span>
      </div>
      <aside class="notes">
        Abertura curta e segura. Se apresentar: Giuliano Lemes, parceiro da Mentes em Ação. Hoje em 60 minutos você sai sabendo usar IA melhor que 90% das pessoas. Promessa: 3 técnicas, exemplos reais, prompts prontos.
      </aside>
    </section>

    <!-- Slide 2 — A Provocação Inicial -->
    <section>
      <div class="eyebrow">// 00:00 — 05:00</div>
      <h2>A IA já te decepcionou?</h2>
      <p style="font-size:1.6rem; margin-top:2rem;">Provavelmente <strong>não é culpa dela</strong>.</p>
      <p style="font-size:1.3rem; margin-top:1.5rem; color: var(--text-mid);">O problema geralmente não é a ferramenta.<br>O problema é <em>como a gente pede</em>.</p>
      <aside class="notes">
        Pergunta aberta pra plateia: quem aqui já pediu algo pra IA e recebeu resposta genérica/ruim? (esperar mãos). A maioria testa IA, recebe algo genérico, acha que não funciona. O workshop existe pra corrigir isso. Não é a IA — é a forma de pedir.
      </aside>
    </section>
```

- [ ] **Step 2: Abrir no browser, navegar com seta direita, verificar**

Run: `xdg-open index.html`
Expected:
- Slide 1: sol gradiente top-right, título grande com sombras neon, "Giuliano Lemes" no footer.
- Seta → avança pro Slide 2.
- Slide 2: eyebrow com horário, título, texto com palavras destacadas em dourado e ciano.
- `S` abre modo apresentador com as notas.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): slides 1-2 (capa + provocação)"
```

---

## Task 3: Slide 3 (O que vai levar) + Slide 4 (IA é/não é)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar após Slide 2**

```html
    <!-- Slide 3 — O Que Você Vai Levar Hoje -->
    <section>
      <div class="eyebrow">// O QUE VOCÊ LEVA</div>
      <h2>Em 1 hora você sai com…</h2>
      <div class="cards" style="margin-top:2.5rem; grid-template-columns: repeat(2, 1fr);">
        <div class="card"><div class="name">3 TÉCNICAS SIMPLES</div><div class="desc">funcionam em qualquer IA: ChatGPT, Claude, Gemini</div></div>
        <div class="card"><div class="name">EXEMPLOS REAIS</div><div class="desc">case de um negócio local, não teoria de slide</div></div>
        <div class="card"><div class="name">PROMPTS PRONTOS</div><div class="desc">pra copiar, colar e usar ainda hoje</div></div>
        <div class="card"><div class="name">UMA FORMA MELHOR</div><div class="desc">de conversar com IA — pra sempre</div></div>
      </div>
      <aside class="notes">
        Mostrar valor rápido. Em uma hora, a pessoa sai sabendo usar melhor qualquer IA popular. Não vou ensinar programação, não vou ensinar mágica — vou ensinar a pedir direito.
      </aside>
    </section>

    <!-- Slide 4 — O Que IA É (e Não É) -->
    <section>
      <div class="eyebrow">// 05:00 — 10:00</div>
      <h2>O Que IA É (e Não É)</h2>
      <div class="ba" style="margin-top:2rem;">
        <div class="col after">
          <div class="label">// BOA PRA</div>
          <p style="font-size:1.1rem;">rascunhar · resumir · explicar · organizar · gerar opções</p>
        </div>
        <div class="col before">
          <div class="label">// NÃO É PRA</div>
          <p style="font-size:1.1rem;">decidir por você · ser fonte absoluta de verdade · substituir seu julgamento</p>
        </div>
      </div>
      <p style="margin-top:2rem; font-size:1.2rem; color: var(--text-mid);">Pense na IA como um <em>gênio engarrafado</em>: potencial enorme, mas precisa de direção pra entregar.</p>
      <aside class="notes">
        Explicação sem jargão. Tirar medo e hype ao mesmo tempo. A IA não é mágica nem burra — ela é um assistente muito rápido que depende inteiramente de como você conversa com ele. Analogia do gênio: o gênio só entrega o que você pede. Pedido ruim = desejo ruim.
      </aside>
    </section>
```

- [ ] **Step 2: Verificar no browser**

Expected:
- Slide 3: 4 cards em grid 2x2, cada um com nome e descrição.
- Slide 4: duas colunas "BOA PRA" (rosa/neon) vs "NÃO É PRA" (tracejada), frase do gênio embaixo.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): slides 3-4 (o que leva + IA é/não é)"
```

---

## Task 4: Slide 5 — Os 3 Superpoderes

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar após Slide 4**

```html
    <!-- Slide 5 — Os 3 Superpoderes -->
    <section>
      <div class="eyebrow">// FRAMEWORK</div>
      <h2>Os 3 Superpoderes</h2>
      <div class="cards">
        <div class="card">
          <div class="num">01</div>
          <div class="name">DÊ CONTEXTO</div>
          <div class="desc">tudo que a IA precisa saber pra entregar o que você quer</div>
        </div>
        <div class="card">
          <div class="num">02</div>
          <div class="name">SEJA ESPECÍFICO</div>
          <div class="desc">quanto mais claro o pedido, mais útil a resposta</div>
        </div>
        <div class="card">
          <div class="num">03</div>
          <div class="name">ITERE</div>
          <div class="desc">explore possibilidades · planeje em passos · execute um por um</div>
        </div>
      </div>
      <aside class="notes">
        Esses três princípios organizam todo o restante. "Iterar" é explorar, planejar e executar, nessa ordem. Mesmo método do Atalho do Contexto, mas pra entender o problema, não a pessoa. Cada um vira um bloco do workshop.
      </aside>
    </section>
```

- [ ] **Step 2: Verificar no browser**

Expected: 3 cards lado a lado, numerais 01/02/03 em dourado grande com sombra magenta, nomes em Michroma maiúsculo.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): slide 5 (os 3 superpoderes)"
```

---

## Task 5: Superpoder 1 — Slides 6, 7, 7b

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar após Slide 5**

```html
    <!-- Slide 6 — Superpoder 1: Dê Contexto -->
    <section>
      <div class="eyebrow">// SUPERPODER 01 · 10:00 — 25:00</div>
      <h2>Dê Contexto</h2>
      <p style="font-size:1.5rem; margin-top:1.5rem;">A IA <strong>não sabe nada</strong> sobre você.</p>
      <p style="font-size:1.2rem; margin-top:1rem; color: var(--text-mid);">O que faz a resposta melhor é dar <em>contexto relevante</em>:<br>quem você é · pra que vai usar · qual resultado espera.</p>
      <aside class="notes">
        Analogia do garçom ou consultor. Imagine contratar um consultor e só dizer "me ajuda". Ele vai perguntar quem você é, pra quê, qual o cenário. A IA não pergunta — ela chuta. Então você entrega o contexto antes.
      </aside>
    </section>

    <!-- Slide 7 — Demo 1: Antes e Depois -->
    <section>
      <div class="eyebrow">// DEMO 01 · EMPÓRIO PRINCESA</div>
      <h2>Antes e Depois</h2>
      <div class="ba">
        <div class="col before">
          <div class="label">// SEM CONTEXTO</div>
          <p style="font-family:'JetBrains Mono',monospace; font-size:1rem;">"Crie um post pra Instagram."</p>
          <p style="margin-top:1rem; font-size:0.95rem; color: var(--text-mid);">→ texto genérico, sem identidade</p>
        </div>
        <div class="col after">
          <div class="label">// COM CONTEXTO</div>
          <p style="font-family:'JetBrains Mono',monospace; font-size:1rem;">Empório Princesa, Campanha/MG · bistrô+empório · público: moradores locais 30-60 anos · tom elegante e acolhedor · objetivo: divulgar café da tarde de sábado.</p>
          <p style="margin-top:1rem; font-size:0.95rem; color: var(--text-light);">→ texto com identidade do negócio</p>
        </div>
      </div>
      <aside class="notes">
        Rodar ao vivo se der — se não, usar screenshot backup. Mostrar o mesmo prompt "pelado" vs com contexto. Destacar: mesmo modelo, mesma ferramenta, mesma duração. Só mudou a entrada. Saída 10x melhor.
      </aside>
    </section>

    <!-- Slide 7b — O Atalho do Contexto -->
    <section>
      <div class="eyebrow">// SHORTCUT 01</div>
      <h2 style="text-align:center;">O Atalho do Contexto</h2>
      <p style="text-align:center; font-size:1.2rem; color: var(--text-mid); margin-top:1rem;">Não sabe que contexto dar? <em>Deixe a IA perguntar.</em></p>
      <div class="terminal" style="margin-top:2rem;">
        <span class="prompt">&gt;</span> Meu objetivo é <span class="placeholder">[seu objetivo]</span>.<br>
        &nbsp;&nbsp;&nbsp;Me faça perguntas até ter todas as<br>
        &nbsp;&nbsp;&nbsp;informações necessárias pra fazer o<br>
        &nbsp;&nbsp;&nbsp;melhor trabalho possível.
      </div>
      <p style="text-align:center; font-size:1rem; color: var(--gold); font-style:italic; margin-top:1rem;">Tire foto. Cole em qualquer IA. Funciona.</p>
      <aside class="notes">
        Se você não sabe que contexto dar, não precisa saber. Diz o objetivo e pede pra IA fazer perguntas. Os detalhes vêm de você, mas guiados por ela. Convidar plateia a tirar foto do slide.
      </aside>
    </section>
```

- [ ] **Step 2: Verificar no browser**

Expected: 3 slides navegáveis. Slide 7b: terminal com borda rosa brilhante, prompt em mono, `[seu objetivo]` destacado em ciano.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): superpoder 1 — slides 6, 7, 7b"
```

---

## Task 6: Superpoder 2 — Slides 9 e 10

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar após Slide 7b**

```html
    <!-- Slide 9 — Superpoder 2: Seja Específico -->
    <section>
      <div class="eyebrow">// SUPERPODER 02 · 25:00 — 40:00</div>
      <h2>Seja Específico</h2>
      <p style="font-size:1.5rem; margin-top:1.5rem;"><strong>Pedido vago</strong> gera <em>resposta vaga</em>.</p>
      <p style="font-size:1.2rem; margin-top:1.2rem; color: var(--text-mid);">A IA não adivinha. Ela <strong>chuta</strong>.<br>Cada detalhe reduz um chute.</p>
      <div style="margin-top:2rem; display:grid; grid-template-columns: repeat(5, 1fr); gap:0.8rem;">
        <div class="card" style="padding:0.8rem; text-align:center;"><div class="name" style="font-size:0.75rem;">O QUÊ</div></div>
        <div class="card" style="padding:0.8rem; text-align:center;"><div class="name" style="font-size:0.75rem;">PRA QUEM</div></div>
        <div class="card" style="padding:0.8rem; text-align:center;"><div class="name" style="font-size:0.75rem;">FORMATO</div></div>
        <div class="card" style="padding:0.8rem; text-align:center;"><div class="name" style="font-size:0.75rem;">TOM</div></div>
        <div class="card" style="padding:0.8rem; text-align:center;"><div class="name" style="font-size:0.75rem;">TAMANHO</div></div>
      </div>
      <aside class="notes">
        Explicar que a IA não "adivinha", ela "chuta". Cada detalhe que você dá elimina um chute ruim. Checklist: o quê, pra quem, formato, tom, tamanho. Se bater os 5, sua resposta vai ser 10x melhor.
      </aside>
    </section>

    <!-- Slide 10 — Demo 2: O Que Muda Quando Você Especifica -->
    <section>
      <div class="eyebrow">// DEMO 02 · EMPÓRIO PRINCESA</div>
      <h2>Vago vs. Específico</h2>
      <div class="ba">
        <div class="col before">
          <div class="label">// VAGO</div>
          <p style="font-family:'JetBrains Mono',monospace; font-size:1rem;">"Faça uma divulgação de um evento do Empório Princesa."</p>
        </div>
        <div class="col after">
          <div class="label">// ESPECÍFICO</div>
          <p style="font-family:'JetBrains Mono',monospace; font-size:0.95rem;">Mensagem de WhatsApp · até 5 linhas · evento de bacalhoada por reserva · tom elegante e acolhedor · CTA de reserva no fim · para envio à lista de clientes.</p>
        </div>
      </div>
      <p style="margin-top:1.5rem; font-size:1rem; color: var(--gold); text-align:center;">30 segundos a mais no prompt = 10 minutos a menos editando depois.</p>
      <aside class="notes">
        Destacar que o tempo investido no prompt retorna 10x na qualidade e economia de edição. Mostrar a mensagem final curta e pronta pra enviar. Ninguém quer reescrever mensagem de IA 3 vezes.
      </aside>
    </section>
```

- [ ] **Step 2: Verificar no browser**

Expected: Slide 9 com checklist 5 mini-cards embaixo. Slide 10 before/after com mensagens.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): superpoder 2 — slides 9, 10"
```

---

## Task 7: Superpoder 3 — Slides 11, 12, 12b

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar após Slide 10**

```html
    <!-- Slide 11 — Superpoder 3: Itere -->
    <section>
      <div class="eyebrow">// SUPERPODER 03 · 40:00 — 52:00</div>
      <h2>Itere</h2>
      <p style="font-size:1.5rem; margin-top:1.5rem;">Iterar é <strong>explorar · planejar · executar</strong>.</p>
      <p style="font-size:1.2rem; margin-top:1rem; color: var(--text-mid);">A maioria pula direto pro resultado.<br>Quem explora antes, entrega <em>mais rápido e melhor</em>.</p>
      <div style="margin-top:2rem; display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items:center; gap:1rem;">
        <div class="card" style="text-align:center;"><div class="num" style="font-size:2rem;">01</div><div class="name">EXPLORE</div></div>
        <div style="font-family:'Michroma'; font-size:2rem; color: var(--neon-cyan);">→</div>
        <div class="card" style="text-align:center;"><div class="num" style="font-size:2rem;">02</div><div class="name">PLANEJE</div></div>
        <div style="font-family:'Michroma'; font-size:2rem; color: var(--neon-cyan);">→</div>
        <div class="card" style="text-align:center;"><div class="num" style="font-size:2rem;">03</div><div class="name">EXECUTE</div></div>
      </div>
      <aside class="notes">
        Primeiro explore possibilidades com a IA. Depois planeje em passos pequenos. Só então execute, um passo de cada vez. Mesmo método do Atalho do Contexto, mas pra entender o problema, não a pessoa.
      </aside>
    </section>

    <!-- Slide 12 — Demo 3: Explore → Planeje → Execute -->
    <section>
      <div class="eyebrow">// DEMO 03 · MESMO CHAT</div>
      <h2>Na Prática</h2>
      <div style="margin-top:1.5rem; display:grid; grid-template-columns: 1fr; gap:1rem;">
        <div class="card">
          <div style="display:flex; gap:1rem; align-items:baseline;"><div class="num" style="font-size:2rem;">01</div><div><div class="name">EXPLORE</div><div class="desc">IA me faz perguntas que eu não sabia que precisava responder. Quadro do problema fica claro.</div></div></div>
        </div>
        <div class="card">
          <div style="display:flex; gap:1rem; align-items:baseline;"><div class="num" style="font-size:2rem;">02</div><div><div class="name">PLANEJE</div><div class="desc">Plano passo a passo. Cada passo pequeno. Meu plano — posso salvar, compartilhar, usar em outro chat.</div></div></div>
        </div>
        <div class="card">
          <div style="display:flex; gap:1rem; align-items:baseline;"><div class="num" style="font-size:2rem;">03</div><div><div class="name">EXECUTE</div><div class="desc">Um passo de cada vez. É como uma receita: você não frita o ovo enquanto ainda tá escolhendo os ingredientes.</div></div></div>
        </div>
      </div>
      <aside class="notes">
        Destacar que é o MESMO chat o tempo todo. Destacar que o passo 1 é interativo — a IA pergunta, eu respondo. Analogia da receita no passo 3: ninguém cozinha pulando etapas.
      </aside>
    </section>

    <!-- Slide 12b — O Atalho da Iteração -->
    <section>
      <div class="eyebrow">// SHORTCUT 02</div>
      <h2 style="text-align:center;">O Atalho da Iteração</h2>
      <p style="text-align:center; font-size:1.1rem; color: var(--text-mid); margin-top:0.8rem;">Antes de executar, <em>explore</em>. Depois, <em>planeje</em>.</p>
      <div class="terminal" style="margin-top:1.5rem;">
        <span class="prompt">&gt;</span> Meu objetivo é <span class="placeholder">[X]</span>.<br>
        &nbsp;&nbsp;&nbsp;Me faça perguntas, uma por vez, até<br>
        &nbsp;&nbsp;&nbsp;explorarmos todas as possibilidades<br>
        &nbsp;&nbsp;&nbsp;e termos um quadro claro.
      </div>
      <div class="terminal">
        <span class="prompt">&gt;</span> Agora monte um plano passo a passo.<br>
        &nbsp;&nbsp;&nbsp;Cada passo deve ser pequeno e rápido<br>
        &nbsp;&nbsp;&nbsp;de executar.
      </div>
      <p style="text-align:center; font-size:0.95rem; color: var(--gold); font-style:italic; margin-top:0.8rem;">2 minutos explorando > 20 minutos ajustando depois.</p>
      <aside class="notes">
        Dois prompts. Use em sequência, no mesmo chat. Primeiro explora, depois planeja. Só depois você executa. Convidar a plateia a tirar foto de novo.
      </aside>
    </section>
```

- [ ] **Step 2: Verificar no browser**

Expected: Slide 11 com 3 cards + setas ciano. Slide 12 com 3 cards empilhados numerados. Slide 12b com 2 terminais.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): superpoder 3 — slides 11, 12, 12b"
```

---

## Task 8: Fechamento — Slides 13, 14, 15

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar após Slide 12b**

```html
    <!-- Slide 13 — Recapitulando -->
    <section>
      <div class="eyebrow">// RECAP</div>
      <h2>Os 3 Superpoderes</h2>
      <div class="cards">
        <div class="card">
          <div class="num">01</div>
          <div class="name">DÊ CONTEXTO</div>
          <div class="desc">tira o genérico</div>
        </div>
        <div class="card">
          <div class="num">02</div>
          <div class="name">SEJA ESPECÍFICO</div>
          <div class="desc">aproxima do que você precisa</div>
        </div>
        <div class="card">
          <div class="num">03</div>
          <div class="name">ITERE</div>
          <div class="desc">explore · planeje · execute</div>
        </div>
      </div>
      <p style="margin-top:2rem; font-size:1.1rem; color: var(--gold); text-align:center;">Esses três já resolvem a maioria dos maus usos de IA.</p>
      <aside class="notes">
        Recap curto. Reforçar que esses três pontos já resolvem a maioria dos problemas que as pessoas reclamam da IA. Não precisa de mais nada pra começar.
      </aside>
    </section>

    <!-- Slide 14 — Desafio da Semana -->
    <section>
      <div class="eyebrow">// 52:00 — 60:00 · CALL TO ACTION</div>
      <h2>Desafio da Semana</h2>
      <div class="cards" style="grid-template-columns:1fr; gap:1rem; margin-top:1.5rem;">
        <div class="card"><div style="display:flex; gap:1rem;"><div class="num" style="font-size:2rem;">01</div><div class="desc" style="font-size:1.2rem;">Escolha uma mensagem que você ia escrever essa semana.</div></div></div>
        <div class="card"><div style="display:flex; gap:1rem;"><div class="num" style="font-size:2rem;">02</div><div class="desc" style="font-size:1.2rem;">Peça pra IA 2 vezes: primeiro sem contexto, depois com.</div></div></div>
        <div class="card"><div style="display:flex; gap:1rem;"><div class="num" style="font-size:2rem;">03</div><div class="desc" style="font-size:1.2rem;">Compare. <em>Esse é o workshop inteiro.</em></div></div></div>
      </div>
      <aside class="notes">
        Transformar aula em ação prática. Pode ser e-mail, post, ideia, proposta, resumo, mensagem. O importante é comparar. Quando a pessoa sente a diferença na própria vida, não esquece mais.
      </aside>
    </section>

    <!-- Slide 15 — Encerramento + Perguntas -->
    <section>
      <div class="sun" style="left: 50%; transform: translateX(-50%); top: 20%;"></div>
      <div style="text-align:center; margin-top:5rem;">
        <h1 style="font-size:3.5rem;">Obrigado.</h1>
        <p style="font-size:2rem; margin-top:2rem; color: var(--neon-cyan);">Perguntas?</p>
      </div>
      <div class="slide-footer" style="justify-content:center;">
        <span>Giuliano Lemes · Mentes em Ação</span>
      </div>
      <aside class="notes">
        IA é ferramenta. Funciona melhor quando você sabe usar. Agradecer a atenção. Abrir pra perguntas. Se ninguém perguntar, puxar: "alguém quer tentar o atalho do contexto ao vivo agora?"
      </aside>
    </section>
```

- [ ] **Step 2: Verificar no browser**

Expected: Slide 13 recap igual ao 5 mas com descrições curtas. Slide 14 com 3 passos do desafio. Slide 15 encerramento centralizado com sol.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): fechamento — slides 13, 14, 15"
```

---

## Task 9: 3 Slides de Backup (Ocultos)

**Files:**
- Modify: `index.html`

Reveal.js não tem "hidden slides" nativos, mas suporta **slides aninhados** (vertical) via `<section><section>…</section></section>`. Alternativa: colocar em `<section data-visibility="hidden">` que o Reveal oculta da navegação mas acessível por link direto (`#/slide-id`).

- [ ] **Step 1: Adicionar slides de backup antes do `</div>` que fecha `.slides`**

```html
    <!-- Backups — ocultos da navegação, acessíveis por URL direta -->
    <section id="backup-demo1" data-visibility="hidden">
      <div class="eyebrow">// BACKUP · DEMO 01</div>
      <h3>Demo 1 — Screenshot</h3>
      <p style="color: var(--text-mid);">Espaço reservado pra screenshot do antes/depois do prompt de contexto (T5/T6).</p>
      <div style="margin-top:2rem; padding:3rem; border:2px dashed var(--neon-pink); text-align:center; color: var(--neon-pink);">[ screenshot aqui ]</div>
      <aside class="notes">Usar se internet cair durante demo ao vivo.</aside>
    </section>

    <section id="backup-demo2" data-visibility="hidden">
      <div class="eyebrow">// BACKUP · DEMO 02</div>
      <h3>Demo 2 — Screenshot</h3>
      <p style="color: var(--text-mid);">Espaço reservado pra screenshot da mensagem vaga vs específica (T5/T6).</p>
      <div style="margin-top:2rem; padding:3rem; border:2px dashed var(--neon-pink); text-align:center; color: var(--neon-pink);">[ screenshot aqui ]</div>
      <aside class="notes">Usar se internet cair durante demo ao vivo.</aside>
    </section>

    <section id="backup-demo3" data-visibility="hidden">
      <div class="eyebrow">// BACKUP · DEMO 03</div>
      <h3>Demo 3 — Screenshot</h3>
      <p style="color: var(--text-mid);">Espaço reservado pra screenshot da sequência Explore → Planeje → Execute (T5/T6).</p>
      <div style="margin-top:2rem; padding:3rem; border:2px dashed var(--neon-pink); text-align:center; color: var(--neon-pink);">[ screenshot aqui ]</div>
      <aside class="notes">Usar se internet cair durante demo ao vivo.</aside>
    </section>
```

- [ ] **Step 2: Verificar no browser**

Expected: navegação com setas **não passa** pelos backups. Acesso direto funciona: `index.html#/backup-demo1`.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(t4): slides de backup ocultos (placeholders p/ T5-T6)"
```

---

## Task 10: Revisão Visual Geral + Ajustes de Overflow

**Files:**
- Modify: `index.html` e/ou `assets/synthwave.css` conforme necessário

Reveal.js tem tamanho de slide fixo (1280×720 por default). Texto que vaza precisa ser reduzido.

- [ ] **Step 1: Abrir deck e navegar de 1 a 15 + 3 backups**

Run: `xdg-open index.html`

Checklist visual por slide:
- [ ] Nenhum texto cortado ou sobreposto
- [ ] Grid synthwave visível mas não compete com conteúdo
- [ ] Fontes Michroma, Space Grotesk, JetBrains Mono carregadas (não serif default)
- [ ] Sol gradiente renderiza nos slides 1 e 15
- [ ] Setas funcionam (direita avança, esquerda volta)
- [ ] `Esc` mostra overview
- [ ] `S` abre modo apresentador com notas
- [ ] `F` funciona fullscreen

- [ ] **Step 2: Se houver overflow, ajustar via CSS inline no slide específico**

Padrão: reduzir `font-size` do elemento problemático em 10-15%. Exemplo:
```html
<h1 style="font-size:2.4rem;">Aprendendo…</h1>
```

- [ ] **Step 3: Commit dos ajustes**

```bash
git add index.html assets/synthwave.css
git commit -m "fix(t4): ajustes de overflow e consistência visual"
```

---

## Task 11: Consistência Cross-Doc + Atualizar AGENTS.md

**Files:**
- Read: `docs/t1-roteiro-apresentador.md`, `docs/t2-demo-scripts.md`, `docs/t3-deck-skeleton.md`
- Modify: `AGENTS.md`

- [ ] **Step 1: Ler T1, T2, T3 e conferir consistência**

Conferir que o `index.html`:
- Usa os 3 nomes dos Superpoderes **verbatim**: "Dê Contexto", "Seja Específico", "Itere"
- Agenda (00-05, 05-10, …) bate com AGENTS.md
- Case é sempre Empório Princesa / Campanha-MG / `@emporioprincesa`
- Prompts de atalho idênticos a T1/T2/T3 slides 7b e 12b

Se encontrar divergência, ajustar no `index.html` (fonte de verdade é AGENTS.md + T1).

- [ ] **Step 2: Atualizar AGENTS.md — status T4 e entregável E1**

Trocar em "Entregáveis":
```
| E1 | Slide deck | .pptx | Pendente (T3/T4) |
```
por:
```
| E1 | Apresentação | HTML (Reveal.js) | ✅ Concluído (T4) |
```

Trocar em "Cronograma Restante > Dia 2":
```
- T4 – Deck final (design)
```
por:
```
- T4 – Apresentação HTML synthwave ✅
```

Adicionar nota em "Decisões Tomadas":
```
**Formato da apresentação:** HTML com Reveal.js, estilo synthwave/retrofuturista. Hospedado no GitHub Pages. Acessível via URL, compartilhável com participantes após o workshop.
```

- [ ] **Step 3: Commit**

```bash
git add AGENTS.md
git commit -m "docs(agents): T4 concluído — apresentação HTML synthwave"
```

---

## Task 12: Publicar no GitHub Pages

**Files:**
- (none — configuração no painel GitHub)

- [ ] **Step 1: Push da branch main**

```bash
git push origin main
```

- [ ] **Step 2: Ativar GitHub Pages**

No navegador:
1. Ir em `https://github.com/<user>/superpoderes/settings/pages`
2. Source: **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)`
4. Save

- [ ] **Step 3: Aguardar ~1-2 min e acessar URL**

URL: `https://<user>.github.io/superpoderes/`

Verificar:
- [ ] Deck carrega no GitHub Pages igual ao local
- [ ] Fontes Google carregam
- [ ] Reveal.js CDN carrega
- [ ] Navegação funciona
- [ ] Link é compartilhável (testar em modo anônimo)

- [ ] **Step 4: Adicionar URL ao AGENTS.md**

Adicionar no final da seção "Decisões Tomadas":
```
**URL da apresentação:** `https://<user>.github.io/superpoderes/`
```

- [ ] **Step 5: Commit final**

```bash
git add AGENTS.md
git commit -m "docs(agents): URL de publicação da apresentação"
git push
```

---

## Done Criteria

- [ ] `index.html` na raiz, 16 slides principais + 3 backups
- [ ] `assets/synthwave.css` com tema completo
- [ ] Nenhum texto cortado em 1280×720
- [ ] Notas do apresentador em todos os 15 slides principais
- [ ] Setas, `S`, `F`, `Esc` funcionam
- [ ] Consistência cross-doc verificada com T1/T2/T3 + AGENTS.md
- [ ] Publicado no GitHub Pages com URL acessível
- [ ] AGENTS.md atualizado (status + URL)
- [ ] Todos os commits pushados
