# Design: Atalho do Contexto — Bônus no Superpoder 1

**Data:** 2026-04-14
**Status:** Aprovado
**Escopo:** Adicionar técnica "peça pra IA te questionar" como bônus dentro do Superpoder 1 (Dê Contexto), após Demo 1B. Sem demo ao vivo. Prompt de referência no deck e handout.

---

## Decisão

Dentro do Superpoder 1, após a Demo 1B (contexto manual), adicionar uma fala bônus do apresentador explicando a técnica de pedir pra IA fazer perguntas, com o prompt de referência visível em slide e handout.

**Não** é um novo superpoder. **Não** substitui Demo 1B. **Não** é demo ao vivo. É bônus verbal + referência escrita.

**Por que dentro de "Dê Contexto":** A técnica é uma forma mais poderosa de dar contexto. Em vez de você saber o que escrever, a IA pergunta e extrai. É a mesma ideia (contexto melhora resultado), levada mais longe.

**Por que bônus e não substituição:** Demo 1B (contexto manual) é mais didática para iniciantes — mostra o contraste direto. A técnica de "pedir perguntas" é um nível acima, melhor como evolução.

---

## Mudanças por Entregável

### 1. Roteiro do Apresentador (T1 — `docs/t1-roteiro-apresentador.md`)

**Local:** Seção [22:00–25:00] Discussão do Superpoder 1, antes da transição.

**Adicionar fala-guia:**

> "E aqui vai um atalho pra esse superpoder: se você não sabe O QUE escrever de contexto, não precisa saber. É só dizer pra IA qual é o seu objetivo e pedir pra ela te fazer perguntas até ter tudo que precisa. A IA pergunta, você responde, e no final ela entrega algo que nenhum prompt pronto consegue — porque os detalhes vieram de você, não de um template."

**Transição existente** ("Beleza, demos contexto...") permanece igual, entra após a fala bônus.

**Timing:** ~30s adicionais dentro dos 3 min de discussão. Sem impacto na agenda.

---

### 2. Demo Scripts (T2 — `docs/t2-demo-scripts.md`)

**Local:** Após Demo 1B, antes do separador `---` da Demo 2.

**Adicionar seção:**

```markdown
### Bônus — O Atalho do Contexto

> **Nota ao apresentador:** Não é demo ao vivo. É referência pra plateia levar pra casa. Diga a fala e mostre o slide/prompt.

Prompt de referência:

```
Meu objetivo é [seu objetivo]. Me faça perguntas até ter
todas as informações necessárias pra fazer o melhor
trabalho possível.
```

**O que dizer à plateia:**
"Se você não sabe o que escrever de contexto, não precisa saber. Diz o objetivo e pede pra IA perguntar. Ela vai extrair de você os detalhes que importam."

**Por que funciona:** A IA não adivinha — ela pergunta. Você não precisa saber O QUE é relevante pra IA — ela sabe. O resultado é mais personalizado do que qualquer prompt fixo porque os dados vieram de uma conversa real sobre SEU caso.
```

---

### 3. Esqueleto do Deck (T3 — `docs/t3-deck-skeleton.md`)

**Local:** Após slides da Demo 1, antes do slide de transição pro Superpoder 2.

**Adicionar 1 slide:**

- Título: "O Atalho do Contexto"
- Conteúdo: prompt de referência grande e legível (para fotografia)
- Subtexto: "Não sabe o que escrever? Deixe a IA perguntar."

---

### 4. Handout (T7 — pendente)

Adicionar prompt de referência na seção de dicas rápidas do handout 1 página.

---

### 5. AGENTS.md

Atualizar cross-doc consistency note para mencionar o bônus "Atalho do Contexto" como elemento que deve estar alinhado entre T1/T2/T3/T7.

---

## O que NÃO Muda

- Agenda e timings — zero alteração (bônus cabe nos 3 min de discussão existentes)
- Demos 2 e 3 — intocadas
- Os 3 Superpoderes como conceito — intocados
- Prompt A e B da Demo 1 — inalterados
- "Desafio da semana" — opcionalmente pode citar o atalho como variação

---

## Prompt de Referência (versão final)

```
Meu objetivo é [seu objetivo]. Me faça perguntas até ter
todas as informações necessárias pra fazer o melhor
trabalho possível.
```

Design simples. Público iniciante. Funciona em qualquer IA (ChatGPT, Claude, Gemini). Não depende de jargão.