# Realistic Prompt Examples + Bad→Good→Great Slide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace strawman "before" prompts with realistic ones, add a "Bad→Good→Great" recap slide between SP2 and SP3.

**Architecture:** Edit 3 content docs (t1, t2, t3) in parallel for prompt updates, then add the new slide. Cross-doc consistency is critical — the same prompt text must appear identically across all files. Finally update AGENTS.md.

**Tech Stack:** Markdown editing only. No build/test/lint.

---

## Files

| File | Action | Responsibility |
|------|--------|---------------|
| `docs/t1-roteiro-apresentador.md` | Modify | Presenter script — prompts + fala-guia for Demo 1, Demo 2, new slide |
| `docs/t2-demo-scripts.md` | Modify | Demo scripts — prompts A/B for Demo 1, Demo 2, new slide section |
| `docs/t3-deck-skeleton.md` | Modify | Deck skeleton — add slide 10b, update slide 7 and slide 10 prompt text |
| `AGENTS.md` | Modify | Update context summary to reflect changes |

---

### Task 1: Update Demo 1 prompts in t1-roteiro-apresentador.md

**Files:**
- Modify: `docs/t1-roteiro-apresentador.md:79-98`

- [ ] **Step 1: Replace "Prompt SEM contexto" section**

Replace lines 79-83:

```markdown
**Prompt SEM contexto:**
```
Crie um post pra Instagram.
```
*(Mostrar a resposta genérica e sem personalidade que a IA vai dar)*
```

With:

```markdown
**Prompt SEM contexto:**
```
Crie um post de Instagram para o Empório Princesa, em Campanha, MG.
```
*(Mostrar a resposta genérica — a IA não sabe o que torna o Empório especial, quem é o público, qual é o clima do lugar)*
```

- [ ] **Step 2: Replace "Prompt COM contexto" section**

Replace lines 85-98:

```markdown
**Prompt COM contexto:**
```
Eu sou dono do Empório Princesa, em Campanha, MG. O negócio mistura
empório, cafeteria, bistrô e experiências gastronômicas. Trabalhamos
com vinhos, cervejas artesanais, queijos, cafés, lanches e também com
eventos especiais e pratos por encomenda.

Meu público valoriza qualidade, bom gosto e experiências mais exclusivas.

Crie um post para o Instagram convidando clientes para conhecerem o
espaço neste fim de semana. O tom deve ser elegante, acolhedor e sem
parecer propaganda forçada.
```
*(Mostrar como a resposta fica específica, com personalidade, usável)*
```

With:

```markdown
**Prompt COM contexto:**
```
Você é um especialista em marketing para negócios locais. O Empório
Princesa, em Campanha, MG, é um espaço que mistura empório, cafeteria,
bistrô e experiências gastronômicas. Trabalhamos com vinhos, cervejas
artesanais, queijos, cafés especiais, lanches e eventos.

Meu público valoriza qualidade, bom gosto e experiências mais exclusivas.

Crie um post para o Instagram convidando clientes para conhecerem o
espaço neste fim de semana. O tom deve ser elegante, acolhedor e sem
parecer propaganda forçada.
```
*(Mostrar como a resposta fica específica, com personalidade, usável)*
```

- [ ] **Step 3: Update "Ponto a destacar" fala**

Replace line 102:

```markdown
> "Vejam a diferença. Mesmo pedido. Mas a resposta com contexto já começa a parecer um texto do próprio negócio. A outra continua sendo genérica e esquecível."
```

With:

```markdown
> "Vejam a diferença. O primeiro prompt tem a tarefa e o lugar — é o que qualquer pessoa digitaria. Mas a IA não sabe o que torna esse negócio especial. O segundo prompt conta isso. E quando a IA sabe quem é o negócio, quem é o público, qual é o clima — a resposta muda completamente."
```

- [ ] **Step 4: Commit**

```bash
git add docs/t1-roteiro-apresentador.md
git commit -m "fix(t1): update Demo 1 prompts — realistic before, role+context after"
```

---

### Task 2: Update Demo 2 prompts in t1-roteiro-apresentador.md

**Files:**
- Modify: `docs/t1-roteiro-apresentador.md:148-175`

- [ ] **Step 1: Replace "Prompt VAGO" section**

Replace lines 150-154:

```markdown
**Prompt VAGO:**
```
Escreva uma mensagem divulgando um evento do Empório Princesa.
```
*(Mostrar a resposta genérica, formal demais, sem conteúdo real)*
```

With:

```markdown
**Prompt VAGO:**
```
Você é um redator especializado em WhatsApp para negócios locais.
Escreva uma mensagem divulgando um evento do Empório Princesa,
em Campanha, MG.
```
*(Mostrar a resposta — tem contexto básico, mas falta direção de formato, tamanho, tom, objetivo)*
```

- [ ] **Step 2: Replace "Prompt ESPECÍFICO" section**

Replace lines 156-171:

```markdown
**Prompt ESPECÍFICO:**
```
Escreva uma mensagem curta de WhatsApp, com no máximo 5 linhas,
para convidar clientes do Empório Princesa para um evento especial
com um cozinheiro conhecido da cidade.

O Empório Princesa fica em Campanha, MG, e é um lugar para quem
gosta de boa comida, bons vinhos, cervejas artesanais e produtos
de qualidade.

O evento será por reserva.
Tom: elegante, próximo e convidativo.
Objetivo: despertar interesse e incentivar a pessoa a pedir mais
informações ou reservar uma vaga.
```
*(Mostrar como a resposta é direta, usável, com o tom certo)*
```

With:

```markdown
**Prompt ESPECÍFICO:**
```
Você é um redator especializado em mensagens de WhatsApp para negócios
locais. Escreva uma mensagem curta de WhatsApp, com no máximo 5 linhas,
para convidar clientes do Empório Princesa para um evento especial com
um cozinheiro conhecido da cidade.

O Empório Princesa fica em Campanha, MG, e é um lugar para quem gosta
de boa comida, vinhos, cervejas artesanais e produtos de qualidade.
O evento será por reserva.

Tom: elegante, próximo e convidativo.
Objetivo: despertar interesse e incentivar a pessoa a pedir mais
informações ou reservar uma vaga.
Inclua: sensação de exclusividade sem soar elitista, uma chamada final
simples para responder no WhatsApp.
Evite: emoji em excesso, tom de panfleto, texto longo.
```
*(Mostrar como a resposta é direta, usável, com o tom certo — pronta pra enviar)*
```

- [ ] **Step 3: Update "Ponto a destacar" fala**

Replace line 175:

```markdown
> "Olhem o tamanho do prompt. Levou um pouco mais de tempo para escrever, mas a IA parou de adivinhar. E quando ela para de adivinhar, ela começa a ajudar de verdade."
```

With:

```markdown
> "Olhem: o prompt de cima já tem contexto — tem o negócio, a cidade, o papel da IA. Mas falta dizer COMO a mensagem deve ser. O de baixo especifica: formato, tamanho, tom, objetivo, o que incluir, o que evitar. Quanto menos a IA precisa adivinhar, mais útil a resposta."
```

- [ ] **Step 4: Commit**

```bash
git add docs/t1-roteiro-apresentador.md
git commit -m "fix(t1): update Demo 2 prompts — realistic before with context, specific after"
```

---

### Task 3: Add "Bad→Good→Great" slide section in t1-roteiro-apresentador.md

**Files:**
- Modify: `docs/t1-roteiro-apresentador.md:183` (insert between SP2 discussion and SP3)

- [ ] **Step 1: Insert new section between SP2 and SP3**

Insert after line 183 (`**Transição:** "Agora vocês sabem dar contexto e ser específicos. Mas tem um terceiro superpoder que a maioria ignora completamente."`) and before line 185 (`---`):

```markdown

### Recap: De Vago a Preciso [37:00–40:00 replaces current discussion time]

> "Antes de entrar no terceiro superpoder, olhem a progressão do que a gente viu:"

**Nível 1 — Bad:**
```
Crie um post pra Instagram.
```
→ Genérico, sem identidade. Serve pra qualquer lugar.

**Nível 2 — Good (Dê Contexto):**
```
Você é um especialista em marketing para negócios locais. Crie um
post de Instagram para o Empório Princesa, em Campanha, MG — um
espaço que mistura empório, cafeteria, bistrô e experiências
gastronômicas. Meu público valoriza qualidade e experiências exclusivas.
```
→ Com contexto. Já tem cara de negócio real, mas sem direção de formato.

**Nível 3 — Great (Dê Contexto + Seja Específico):**
```
Você é um especialista em marketing para negócios locais. O Empório
Princesa, em Campanha, MG, é um espaço que mistura empório, cafeteria,
bistrô e experiências gastronômicas. Meu público valoriza qualidade,
bom gosto e experiências mais exclusivas. Crie um post para o Instagram
convidando clientes para conhecerem o espaço neste fim de semana.
Tom: elegante, acolhedor, sem parecer propaganda forçada. Destaque a
experiência do lugar, não só os produtos. Mencione Campanha de forma
natural. Termine com um convite simples para visitar ou reservar.
```
→ Com contexto e especificidade — usável, com identidade, pronto pra postar.

> "De Bad pra Good: contexto. De Good pra Great: especificidade. E tem mais um nível — é o terceiro superpoder."
```

- [ ] **Step 2: Commit**

```bash
git add docs/t1-roteiro-apresentador.md
git commit -m "feat(t1): add Bad→Good→Great recap section between SP2 and SP3"
```

---

### Task 4: Update Demo 1 prompts in t2-demo-scripts.md

**Files:**
- Modify: `docs/t2-demo-scripts.md:14-55`

- [ ] **Step 1: Replace Prompt A section**

Replace lines 14-26:

```markdown
### Prompt A — Sem Contexto

```
Crie um post pra Instagram.
```

**Expected result:** Texto genérico, que poderia servir para qualquer loja. Provavelmente vai usar frases vagas como "venha nos visitar" ou "temos qualidade e bom atendimento", sem mostrar o que torna o lugar especial.

**What to point out to the audience:**
- The AI doesn't know what makes THIS business special
- It doesn't know the city, the vibe, or who the clients are
- Without context, the AI has to guess everything
```

With:

```markdown
### Prompt A — Sem Contexto

```
Crie um post de Instagram para o Empório Princesa, em Campanha, MG.
```

**Expected result:** Texto genérico sobre "um empório" — a IA não sabe o que torna o Empório especial, quem é o público, qual é o clima do lugar. Provavelmente vai usar frases vagas como "venha nos visitar" ou "temos qualidade e bom atendimento".

**What to point out to the audience:**
- The AI knows the business name and city, but not what makes it special
- It doesn't know the vibe, the audience, or the personality of the place
- Without context, the AI can only produce something generic about "an emporium"
```

- [ ] **Step 2: Replace Prompt B section**

Replace lines 29-55:

```markdown
### Prompt B — Com Contexto

```
Você é um especialista em marketing para pequenos negócios de cidade pequena.

Eu sou dono do Empório Princesa, em Campanha, MG. O Empório Princesa é um lugar diferenciado: mistura empório, bistrô, cafeteria e experiências gastronômicas. Trabalhamos com produtos de qualidade, vinhos, cervejas artesanais, queijos, cafés, lanches e também fazemos eventos especiais e pratos por encomenda.

Meu público é formado por pessoas que gostam de comer e beber bem, valorizam qualidade e gostam de experiências mais exclusivas.

Crie um post de Instagram convidando as pessoas para conhecerem o Empório Princesa neste fim de semana.

Regras:
- texto principal com no máximo 7 linhas
- tom elegante, acolhedor e sem exagero
- destacar a experiência do lugar, não só os produtos
- mencionar Campanha, MG de forma natural
- terminar com um convite simples para visitar ou reservar
- não usar clichês como "imperdível" ou "você não pode perder"
```

**Expected result:** Texto com cara de negócio real, mencionando Campanha ou o clima de cidade pequena, destacando o diferencial do espaço, a curadoria de produtos e a experiência de sentar para tomar um vinho, uma cerveja artesanal ou comer algo especial. Muito mais específico e aproveitável.

**What to point out to the audience:**
- Same task, completely different quality
- The AI now has everything it needs to deliver what the business wants — identity, audience, goal, tone
- This is what relevant context does — the AI goes from generic to delivering exactly what you need
```

With:

```markdown
### Prompt B — Com Contexto

```
Você é um especialista em marketing para negócios locais. O Empório
Princesa, em Campanha, MG, é um espaço que mistura empório, cafeteria,
bistrô e experiências gastronômicas. Trabalhamos com vinhos, cervejas
artesanais, queijos, cafés especiais, lanches e eventos.

Meu público valoriza qualidade, bom gosto e experiências mais exclusivas.

Crie um post para o Instagram convidando clientes para conhecerem o
espaço neste fim de semana. O tom deve ser elegante, acolhedor e sem
parecer propaganda forçada.
```

**Expected result:** Texto com cara de negócio real, mencionando Campanha ou o clima de cidade pequena, destacando o diferencial do espaço, a curadoria de produtos e a experiência de sentar para tomar um vinho, uma cerveja artesanal ou comer algo especial. Muito mais específico e aproveitável.

**What to point out to the audience:**
- Same task, completely different quality
- The prompt now tells the AI: who the business is, who the audience is, what the vibe is
- This is what relevant context does — the AI goes from generic to delivering exactly what you need
```

- [ ] **Step 3: Commit**

```bash
git add docs/t2-demo-scripts.md
git commit -m "fix(t2): update Demo 1 prompts — realistic before, role+context after"
```

---

### Task 5: Update Demo 2 prompts in t2-demo-scripts.md

**Files:**
- Modify: `docs/t2-demo-scripts.md:77-119`

- [ ] **Step 1: Replace Prompt A section**

Replace lines 77-89:

```markdown
### Prompt A — Vago

```
Escreva uma mensagem divulgando um evento do Empório Princesa.
```

**Expected result:** Uma mensagem vaga, sem data, sem proposta clara, sem público definido e sem motivo forte para alguém se interessar. Pode soar como propaganda comum demais.

**What to point out to the audience:**
- The AI doesn't know what kind of event this is
- It doesn't know who the audience is
- It doesn't know the tone, size, or goal of the message
```

With:

```markdown
### Prompt A — Vago

```
Você é um redator especializado em WhatsApp para negócios locais.
Escreva uma mensagem divulgando um evento do Empório Princesa,
em Campanha, MG.
```

**Expected result:** Uma mensagem com contexto básico — tem o negócio e a cidade — mas sem direção de formato, tamanho, tom ou objetivo. A IA sabe que é um evento, mas não sabe que canal usar, qual o público, nem o que incluir.

**What to point out to the audience:**
- The prompt has context (business, city, role) but no specificity
- It doesn't tell the AI the FORMAT (WhatsApp message, 5 lines)
- It doesn't tell the AI the TONE, the GOAL, or what to INCLUDE/AVOID
```

- [ ] **Step 2: Replace Prompt B section**

Replace lines 92-115:

```markdown
### Prompt B — Específico

```
Escreva uma mensagem curta de WhatsApp, com no máximo 5 linhas, para convidar clientes do Empório Princesa para um evento especial com um cozinheiro conhecido da cidade.

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
- texto longo
```
```

With:

```markdown
### Prompt B — Específico

```
Você é um redator especializado em mensagens de WhatsApp para negócios
locais. Escreva uma mensagem curta de WhatsApp, com no máximo 5 linhas,
para convidar clientes do Empório Princesa para um evento especial com
um cozinheiro conhecido da cidade.

O Empório Princesa fica em Campanha, MG, e é um lugar para quem gosta
de boa comida, vinhos, cervejas artesanais e produtos de qualidade.
O evento será por reserva.

Tom: elegante, próximo e convidativo.
Objetivo: despertar interesse e incentivar a pessoa a pedir mais
informações ou reservar uma vaga.
Inclua: sensação de exclusividade sem soar elitista, uma chamada final
simples para responder no WhatsApp.
Evite: emoji em excesso, tom de panfleto, texto longo.
```
```

- [ ] **Step 3: Update "What to point out" section for Prompt B**

Replace lines 119-125:

```markdown
**What to point out to the audience:**
- We told the AI the FORMAT
- We told it the TONE
- We told it the GOAL
- We gave it CONTEXT about the business and the event
- Specific input leads to specific output
```

With:

```markdown
**What to point out to the audience:**
- The "before" prompt already had context — but no specificity
- We told the AI the FORMAT (WhatsApp, 5 lines)
- We told it the TONE (elegant, inviting)
- We told it the GOAL (spark interest, get reservations)
- We told it what to INCLUDE and what to AVOID
- Specific input leads to specific output
```

- [ ] **Step 4: Commit**

```bash
git add docs/t2-demo-scripts.md
git commit -m "fix(t2): update Demo 2 prompts — realistic before with context, specific after"
```

---

### Task 6: Add "Bad→Good→Great" section in t2-demo-scripts.md

**Files:**
- Modify: `docs/t2-demo-scripts.md` (insert after Demo 2, before Demo 3)

- [ ] **Step 1: Insert new section between Demo 2 and Demo 3**

Insert after the Demo 2 "What to point out to the audience" section (after the line with "- Specific input leads to specific output") and before the `## Demo 3` header:

```markdown

---

## Recap: Bad → Good → Great

> **Nota ao apresentador:** Não é demo ao vivo. É um slide de recap que mostra a progressão dos dois superpoderes antes de introduzir o terceiro. Mostre o slide e narre brevemente.

**Mesma tarefa: post de Instagram para o Empório Princesa**

| Nível | Prompt | Resultado |
|-------|--------|-----------|
| **Bad** | `Crie um post pra Instagram.` | Genérico, sem identidade |
| **Good** | `Você é um especialista em marketing para negócios locais. Crie um post de Instagram para o Empório Princesa, em Campanha, MG — um espaço que mistura empório, cafeteria, bistrô e experiências gastronômicas. Meu público valoriza qualidade e experiências exclusivas.` | Com contexto, já tem cara de negócio real |
| **Great** | `Você é um especialista em marketing para negócios locais. O Empório Princesa, em Campanha, MG, é um espaço que mistura empório, cafeteria, bistrô e experiências gastronômicas. Meu público valoriza qualidade, bom gosto e experiências mais exclusivas. Crie um post para o Instagram convidando clientes para conhecerem o espaço neste fim de semana. Tom: elegante, acolhedor, sem parecer propaganda forçada. Destaque a experiência do lugar, não só os produtos. Mencione Campanha de forma natural. Termine com um convite simples para visitar ou reservar.` | Com contexto e especificidade — usável, pronto pra postar |

**O que dizer à plateia:**
"De Bad pra Good: contexto. De Good pra Great: especificidade. E tem mais um nível — é o terceiro superpoder."

**Diferença entre níveis:**

| Salto | O que muda | Superpoder |
|-------|-----------|------------|
| Bad → Good | Contexto (quem é, pra quem, qual o clima) | SP1: Dê Contexto |
| Good → Great | Especificidade (formato, tom, incluir/evitar) | SP2: Seja Específico |
| Great → ... | Explorar, planejar, executar | SP3: Itere |

```

- [ ] **Step 2: Commit**

```bash
git add docs/t2-demo-scripts.md
git commit -m "feat(t2): add Bad→Good→Great recap section between Demo 2 and Demo 3"
```

---

### Task 7: Update Slide 7 and Slide 10 in t3-deck-skeleton.md

**Files:**
- Modify: `docs/t3-deck-skeleton.md:140-158` (Slide 7)
- Modify: `docs/t3-deck-skeleton.md:202-218` (Slide 10)

- [ ] **Step 1: Update Slide 7 "Na tela" section**

Replace lines 144-147:

```markdown
**Na tela:**
- Prompt ruim: "Crie um post pra Instagram."
- Prompt melhor: contexto do Empório Princesa + público + tom + objetivo
- Resultado esperado: de texto genérico para texto com identidade
```

With:

```markdown
**Na tela:**
- Prompt sem contexto: "Crie um post de Instagram para o Empório Princesa, em Campanha, MG."
- Prompt com contexto: role + contexto do negócio + público + tom
- Resultado esperado: de texto genérico para texto com identidade
```

- [ ] **Step 2: Update Slide 7 "Fala-base"**

Replace lines 149-151:

```markdown
**Fala-base:**
- Rodar ao vivo.
- Mostrar que o case real ajuda a IA a sair do genérico.
```

With:

```markdown
**Fala-base:**
- Rodar ao vivo.
- Mostrar que o "antes" é o que qualquer pessoa digitaria — tem a tarefa e o lugar, mas falta contexto.
- O "depois" conta quem é o negócio, quem é o público, qual é o clima. A IA deixa de adivinhar.
```

- [ ] **Step 3: Update Slide 10 "Na tela" section**

Replace lines 206-209:

```markdown
**Na tela:**
- Prompt vago: divulgar um evento do Empório Princesa
- Prompt específico: WhatsApp, até 5 linhas, evento por reserva, tom elegante, CTA final
- Resultado esperado: mensagem curta, humana e utilizável
```

With:

```markdown
**Na tela:**
- Prompt com contexto mas sem especificidade: "Você é um redator especializado em WhatsApp para negócios locais. Escreva uma mensagem divulgando um evento do Empório Princesa, em Campanha, MG."
- Prompt específico: WhatsApp, até 5 linhas, evento por reserva, tom elegante, CTA final, inclua/evite
- Resultado esperado: de mensagem com contexto mas genérica, para mensagem curta, humana e utilizável
```

- [ ] **Step 4: Commit**

```bash
git add docs/t3-deck-skeleton.md
git commit -m "fix(t3): update Slide 7 and Slide 10 prompt descriptions — realistic before prompts"
```

---

### Task 8: Add Slide 10b "Bad→Good→Great" in t3-deck-skeleton.md

**Files:**
- Modify: `docs/t3-deck-skeleton.md` (insert between Slide 10 and Slide 11)

- [ ] **Step 1: Insert new slide after Slide 10 and before Slide 11**

Insert after the Slide 10 section (after line 218, the closing `---`) and before the Slide 11 header:

```markdown

## Slide 10b — De Vago a Preciso

**Objetivo:** recap visual da progressão Bad→Good→Great antes de introduzir Itere.

**Na tela:**
- Título: "De Vago a Preciso"
- Três níveis lado a lado ou empilhados:

| Nível | Prompt | Resultado |
|-------|--------|-----------|
| **Bad** | `Crie um post pra Instagram.` | Genérico, sem identidade |
| **Good** | `Você é um especialista em marketing para negócios locais. Crie um post de Instagram para o Empório Princesa, em Campanha, MG — um espaço que mistura empório, cafeteria, bistrô e experiências gastronômicas. Meu público valoriza qualidade e experiências exclusivas.` | Com contexto, com cara de negócio real |
| **Great** | `Você é um especialista em marketing para negócios locais. O Empório Princesa, em Campanha, MG, é um espaço que mistura empório, cafeteria, bistrô e experiências gastronômicas. Meu público valoriza qualidade, bom gosto e experiências mais exclusivas. Crie um post para o Instagram convidando clientes para conhecerem o espaço neste fim de semana. Tom: elegante, acolhedor, sem parecer propaganda forçada. Destaque a experiência, não só os produtos. Mencione Campanha. Termine com um convite.` | Com contexto + especificidade — usável |

- Subtexto: "Bad → Good = Dê Contexto. Good → Great = Seja Específico. E tem mais."

**Fala-base:**
- De Bad pra Good: contexto.
- De Good pra Great: especificidade.
- E tem mais um nível — é o terceiro superpoder.

**Visual sugerido:**
- Três cards empilhados ou lado a lado.
- Cada card mostra o prompt em destaque e uma frase sobre o resultado.
- Cores ou ícones diferentes pra cada nível (vermelho/amarelo/verde ou similar).
- Fundo limpo, fotográfico.

---
```

- [ ] **Step 2: Update slide count reference**

In the "Estrutura Recomendada" section (line 23), update:

```markdown
**Quantidade sugerida:** 16 slides principais + 3 slides de backup ocultos.
```

To:

```markdown
**Quantidade sugerida:** 17 slides principais + 3 slides de backup ocultos.
```

Also update in "Sequência Recomendada de Construção no T4" section, item 2:

```markdown
2. Montar os 16 slides principais com pouco texto e muita hierarquia.
```

To:

```markdown
2. Montar os 17 slides principais com pouco texto e muita hierarquia.
```

- [ ] **Step 3: Commit**

```bash
git add docs/t3-deck-skeleton.md
git commit -m "feat(t3): add Slide 10b Bad→Good→Great recap between SP2 and SP3"
```

---

### Task 9: Update AGENTS.md

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Update the "Cenários já definidos no roteiro" section**

In the T2 section, update the scenario descriptions to reflect the new prompt structure. Find the section about "Cenários já definidos no roteiro (T1)" and update the Demo 1 and Demo 2 descriptions to note the realistic "before" prompts and the new Bad→Good→Great slide.

- [ ] **Step 2: Add note about Bad→Good→Great slide**

Add a cross-doc note about the new slide 10b (Bad→Good→Great) that must stay aligned between T1, T2, T3 and the HTML deck.

- [ ] **Step 3: Commit**

```bash
git add AGENTS.md
git commit -m "docs: update AGENTS.md with realistic prompt changes and Bad→Good→Great slide"
```

---

### Task 10: Cross-doc consistency check

**Files:**
- Read: all 3 docs + AGENTS.md

- [ ] **Step 1: Verify Demo 1 prompts are identical across t1 and t2**

Read both files. Compare the "before" and "after" prompt text character by character. Any discrepancy = fix.

- [ ] **Step 2: Verify Demo 2 prompts are identical across t1 and t2**

Same check.

- [ ] **Step 3: Verify Bad→Good→Great prompts are identical across t1, t2, t3**

Compare the 3-level prompt text in all three files. Any discrepancy = fix.

- [ ] **Step 4: Verify slide numbering in t3 is sequential**

After inserting Slide 10b, confirm all subsequent slide references are still correct (no orphaned references to "Slide 10" that should now point elsewhere).

- [ ] **Step 5: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: cross-doc consistency corrections after prompt updates"
```