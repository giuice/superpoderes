# T5 — Demo Screenshots de Backup

**Data:** 2026-04-16
**Status:** Aprovado

## Objetivo

Capturar screenshots das respostas do ChatGPT aos 5 prompts dos demo scripts (T2), para uso como backup caso a internet falhe durante o workshop. Inserir screenshots nos slides de backup do deck HTML.

## Decisões

- **Ferramenta:** ChatGPT (GPT-4) — mesma que provavelmente será usada ao vivo
- **Abordagem:** Playwright CLI + Chromium — automatizado, reprodutível, resultado autêntico
- **Escopo:** Captura + inserção no deck (T5 e T6 combinados)

## Estrutura de Arquivos

```
assets/backups/
  demo1-sem-contexto.png
  demo1-com-contexto.png
  demo2-vago.png
  demo2-especifico.png
  demo3-explore.png
  demo3-plano-executa.png
scripts/
  capture-demos.mjs      # script Playwright mínimo
```

## Fluxo do Script

1. Abrir ChatGPT no Chromium (Playwright)
2. Pausar para login manual
3. Para cada prompt: colar, aguardar stream parar, capturar screenshot da área do chat
4. Salvar em `assets/backups/`
5. Atualizar `index.html` — substituir placeholders `[ screenshot aqui ]` por `<img>` tags

## Detecção de "Stream Parou"

Heurística: esperar o input voltar habilitado + 2s de estabilização (sem mudança no tamanho do conteúdo). Sem over-engineering.

## Screenshots por Demo

| Demo | Screenshots | Layout no slide |
|------|-------------|-----------------|
| Demo 1 (Dê Contexto) | `demo1-sem-contexto.png` + `demo1-com-contexto.png` | Side-by-side (`.ba > .col.before + .col.after`) |
| Demo 2 (Seja Específico) | `demo2-vago.png` + `demo2-especifico.png` | Side-by-side |
| Demo 3 (Itere) | `demo3-explore.png` + `demo3-plano-executa.png` | Stacked (vertical) |

**Total:** 6 screenshots, 1 sessão ChatGPT.

## Ordem de Captura

1. Demo 1A — "Crie um post pra Instagram." (sem contexto)
2. Demo 1B — Prompt completo com contexto do Empório Princesa
3. Demo 2A — "Escreva uma mensagem divulgando um evento do Empório Princesa." (vago)
4. Demo 2B — Prompt específico com formato, tom, objetivo, regras
5. Demo 3 Step 1 — Explore (Q&A interativo, 2-3 rodadas)
6. Demo 3 Steps 2+3 — Planeje + Execute passo 1

## Atualização do Deck HTML

Substituir cada placeholder `[ screenshot aqui ]` nos 3 slides de backup por layout com imagens:

### Backup Demo 1 e 2 (side-by-side)

```html
<div class="ba">
  <div class="col before">
    <div class="label">// SEM CONTEXTO</div>
    <img src="assets/backups/demo1-sem-contexto.png" alt="Demo 1 sem contexto" style="width:100%; border-radius:4px;">
  </div>
  <div class="col after">
    <div class="label">// COM CONTEXTO</div>
    <img src="assets/backups/demo1-com-contexto.png" alt="Demo 1 com contexto" style="width:100%; border-radius:4px;">
  </div>
</div>
```

### Backup Demo 3 (stacked)

```html
<div style="display:grid; grid-template-columns:1fr; gap:1rem;">
  <div>
    <div class="label">// EXPLORE</div>
    <img src="assets/backups/demo3-explore.png" alt="Demo 3 explore" style="width:100%; border-radius:4px;">
  </div>
  <div>
    <div class="label">// PLANEJE + EXECUTE</div>
    <img src="assets/backups/demo3-plano-executa.png" alt="Demo 3 plano e execução" style="width:100%; border-radius:4px;">
  </div>
</div>
```

## Critérios de Sucesso

- 6 screenshots capturados em `assets/backups/`
- Cada screenshot legível em projeção (mínimo 1200px largura)
- Slides de backup sem placeholders — imagens reais no lugar
- Deck publicado no GitHub Pages com imagens funcionando