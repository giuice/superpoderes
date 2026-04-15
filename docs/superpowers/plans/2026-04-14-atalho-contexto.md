# Atalho do Contexto — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add "O Atalho do Contexto" bonus (verbal + prompt de referência) inside Superpoder 1 across all deliverables.

**Architecture:** Edit 4 existing Markdown files. Add bonus speech in roteiro (T1), bonus section in demo scripts (T2), new slide in deck skeleton (T3), and update AGENTS.md cross-doc note. No new files created.

**Tech Stack:** Markdown only. No code, no tests, no build.

---

## File Map

| Action | File | What changes |
|--------|------|-------------|
| Modify | `docs/t1-roteiro-apresentador.md:110-112` | Add bonus speech before transition |
| Modify | `docs/t2-demo-scripts.md:55-56` | Add bonus section after Demo 1B |
| Modify | `docs/t3-deck-skeleton.md:157-158` | Insert new slide between Slide 7 and Slide 8, renumber subsequent |
| Modify | `AGENTS.md:93-96` | Update cross-doc consistency note |

---

### Task 1: Add bonus speech in Roteiro (T1)

**Files:**
- Modify: `docs/t1-roteiro-apresentador.md:110-112`

- [ ] **Step 1: Insert bonus speech before the transition line**

Replace:

```
*(Pegar 1-2 exemplos rápidos da plateia e comentar brevemente)*

**Transição:** "Beleza, demos contexto. Mas o pedido em si também importa — e muito. Isso é o Superpoder 2."
```

With:

```
*(Pegar 1-2 exemplos rápidos da plateia e comentar brevemente)*

**Dica bônus — O Atalho do Contexto:**

> "E aqui vai um atalho pra esse superpoder: se você não sabe O QUE escrever de contexto, não precisa saber. É só dizer pra IA qual é o seu objetivo e pedir pra ela te fazer perguntas até ter tudo que precisa. A IA pergunta, você responde, e no final ela entrega algo que nenhum prompt pronto consegue — porque os detalhes vieram de você, não de um template."

Prompt de referência (no slide e no handout):

```
Meu objetivo é [seu objetivo]. Me faça perguntas até ter todas as informações necessárias pra fazer o melhor trabalho possível.
```

**Transição:** "Beleza, demos contexto. Mas o pedido em si também importa — e muito. Isso é o Superpoder 2."
```

- [ ] **Step 2: Commit**

```bash
git add docs/t1-roteiro-apresentador.md
git commit -m "feat(t1): add 'Atalho do Contexto' bonus speech in Superpoder 1"
```

---

### Task 2: Add bonus section in Demo Scripts (T2)

**Files:**
- Modify: `docs/t2-demo-scripts.md:55-56`

- [ ] **Step 1: Insert bonus section before the Demo 2 separator**

Replace:

```
- This is the difference context makes — you go from generic to "this sounds like MY business"

---

## Demo 2 — Superpoder 2: Seja Específico
```

With:

```
- This is the difference context makes — you go from generic to "this sounds like MY business"

### Bônus — O Atalho do Contexto

> **Nota ao apresentador:** Não é demo ao vivo. É referência pra plateia levar pra casa. Diga a fala e mostre o slide/prompt.

Prompt de referência:

```
Meu objetivo é [seu objetivo]. Me faça perguntas até ter todas as informações necessárias pra fazer o melhor trabalho possível.
```

**O que dizer à plateia:**
"Se você não sabe o que escrever de contexto, não precisa saber. Diz o objetivo e pede pra IA perguntar. Ela vai extrair de você os detalhes que importam."

**Por que funciona:** A IA não adivinha — ela pergunta. Você não precisa saber O QUE é relevante pra IA — ela sabe. O resultado é mais personalizado do que qualquer prompt fixo porque os dados vieram de uma conversa real sobre SEU caso.

---

## Demo 2 — Superpoder 2: Seja Específico
```

- [ ] **Step 2: Commit**

```bash
git add docs/t2-demo-scripts.md
git commit -m "feat(t2): add 'Atalho do Contexto' bonus section after Demo 1B"
```

---

### Task 3: Add new slide in Deck Skeleton (T3)

**Files:**
- Modify: `docs/t3-deck-skeleton.md:157-159`

- [ ] **Step 1: Insert new slide between Slide 7 and Slide 8, and renumber all subsequent slides**

After the Slide 7 `---` separator (line 157), insert:

```markdown
---

## Slide 7b — O Atalho do Contexto

**Objetivo:** mostrar a evolução do superpoder — quando não se sabe o que escrever, a IA pergunta.

**Na tela:**
- Título: "O Atalho do Contexto"
- Prompt de referência grande e legível:
  ```
  Meu objetivo é [seu objetivo]. Me faça perguntas até ter
  todas as informações necessárias pra fazer o melhor
  trabalho possível.
  ```
- Subtexto: "Não sabe o que escrever? Deixe a IA perguntar."

**Fala-base:**
- Se você não sabe O QUE escrever de contexto, não precisa saber.
- Diz o objetivo e pede pra IA fazer perguntas.
- Os detalhes vêm de você, não de um template.

**Visual sugerido:**
- Prompt em destaque, grande, fotográfico.
- Fundo limpo. Pessoa tira foto e testa depois.
```

Then renumber:
- Slide 8 → Slide 9 (Superpoder 2: Seja Específico)
- Slide 9 → Slide 10 (Demo 2)
- Slide 10 → Slide 11 (Superpoder 3: Itere)
- Slide 11 → Slide 12 (Demo 3)
- Slide 12 → Slide 13 (Recapitulando)
- Slide 13 → Slide 14 (Desafio da Semana)
- Slide 14 → Slide 15 (Encerramento)

Update the slide count on line 22 from "14 slides principais" to "15 slides principais".

- [ ] **Step 2: Commit**

```bash
git add docs/t3-deck-skeleton.md
git commit -m "feat(t3): add 'O Atalho do Contexto' slide + renumber subsequent slides"
```

---

### Task 4: Update AGENTS.md cross-doc consistency note

**Files:**
- Modify: `AGENTS.md:93-96`

- [ ] **Step 1: Update the cross-doc consistency note**

Replace:

```
- Exemplos práticos e de impacto real, com foco em negócios locais e cidade pequena.
- Público iniciante: os prompts devem ser compreensíveis para quem nunca usou IA.
- Tom direto e profissional.
```

With:

```
- Exemplos práticos e de impacto real, com foco em negócios locais e cidade pequena.
- Público iniciante: os prompts devem ser compreensíveis para quem nunca usou IA.
- Tom direto e profissional.
- Cross-doc: o bônus "O Atalho do Contexto" (prompt de referência + fala do apresentador) deve estar alinhado entre T1, T2, T3 (slide 7b) e T7 (handout).
```

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "docs: add cross-doc consistency note for 'Atalho do Contexto' bonus"
```

---

## Self-Review

**1. Spec coverage:**
- ✅ Roteiro (T1): bonus speech — Task 1
- ✅ Demo Scripts (T2): bonus section — Task 2
- ✅ Deck Skeleton (T3): new slide — Task 3
- ✅ AGENTS.md: cross-doc note — Task 4
- ✅ Handout (T7): noted in spec but T7 is a future task, not in scope now

**2. Placeholder scan:** No TBD/TODO. All content explicit.

**3. Type consistency:** Prompt de referência text is identical across all 4 insertions. Verified.