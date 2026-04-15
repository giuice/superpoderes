# Atalho da Iteração Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redefine Superpoder 3 as "Explore → Planeje → Execute", rewrite Demo 3 to demonstrate the interactive pattern, and add "Atalho da Iteração" (2 reference prompts) across all deliverables.

**Architecture:** Spec-driven content rewrite across 5 files. Each task touches one file, updates it to match the approved spec at `docs/superpowers/specs/2026-04-14-atalho-iteracao-design.md`. Cross-doc consistency verified in Task 6.

**Tech Stack:** Markdown content files only. No code.

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `docs/t1-roteiro-apresentador.md` | Modify | Rewrite SP3 section [40:00–52:00] |
| `docs/t2-demo-scripts.md` | Modify | Rewrite Demo 3 section |
| `docs/t3-deck-skeleton.md` | Modify | Add Atalho da Iteração slide, update SP3 slides |
| `docs/demo3-prompts-sequence.md` | Rewrite | Replace 4-step flow with 3-step interactive flow |
| `AGENTS.md` | Modify | Update SP3 definition, add cross-doc note |

---

### Task 1: Rewrite T1 Roteiro — SP3 Section

**Files:**
- Modify: `docs/t1-roteiro-apresentador.md:187–258`

- [ ] **Step 1: Replace SP3 definition line (line 191)**

Change the "Conceito central" from:
```
**Conceito central:** A primeira resposta da IA raramente é a final. O poder real está em refinar: pedir ajustes, corrigir o rumo, aprofundar.
```
To:
```
**Conceito central:** Iterar é explorar, planejar e executar. A maioria pula direto pro resultado. Quem explora antes, planeja depois, e executa por último, entrega mais rápido e melhor.
```

- [ ] **Step 2: Rewrite SP3 Explicação [40:00–44:00] (lines 194–207)**

Replace the entire "Explicação" subsection with:

```markdown
### Explicação [40:00–44:00]

**Falas-guia:**

> "O terceiro superpoder é o mais contraintuitivo: iterar. A maioria pula direto pro resultado. Abre a IA e manda 'faz pra mim'. Mas quem explora antes, planeja depois, e executa por último, entrega mais rápido e melhor."

Analogia:

> "Imagina que você vai cozinhar um prato novo. Se você for direto pra receita, pode descobrir no meio que falta ingrediente ou que o forno não tá quente. Se você primeiro explora o que tem na cozinha, depois monta o passo a passo, e só depois começa a cozinhar — tudo flui. Com IA é igual."

Framework em 3 fases:

> "Iterar tem três fases. Primeiro: explore — peça pra IA te fazer perguntas até entender todas as possibilidades. Segundo: planeje — peça um plano passo a passo, cada passo pequeno e rápido. Terceiro: execute — um passo de cada vez. O plano é seu. Pode salvar, pode abrir outro chat, pode fazer do jeito que fizer sentido."

Conexão com SP1:

> "Vocês já viram isso no primeiro superpoder. O Atalho do Contexto: a IA pergunta, você responde. Aqui é igual — só que em vez de te ENTENDER, a IA entende O PROBLEMA. Mesmo método, propósito diferente."
```

- [ ] **Step 3: Rewrite Demo ao vivo [44:00–50:00] (lines 208–252)**

Replace the entire "Demo ao vivo" subsection with the new 3-step demo:

```markdown
### Demo ao vivo [44:00–50:00]

**Cenário:** Divulgar a bacalhoada deste sábado no Empório Princesa, em Campanha, MG.

**Passo 1 — Explore (interativo, ~3 min):**

```
Meu objetivo é divulgar a bacalhoada deste sábado no Empório
Princesa, em Campanha, MG. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

Apresentador roda 2-3 rodadas de Q&A ao vivo. A IA pode perguntar coisas como:
- "Que canais você usa pra se comunicar com clientes?"
- "Quantos dias antes do evento quer começar a divulgar?"
- "Qual o perfil dos seus clientes mais fiéis?"
- "Você tem orçamento pra anúncios pagos?"
- "Já fez divulgação de eventos antes? O que funcionou?"

Apresentador responde cada uma brevemente. Depois de 2-3 trocas: "Ok, temos um quadro claro."

**Fala-guia após Q&A:**

> "Vejam: eu não sabia que a IA ia perguntar sobre canais, sobre orçamento, sobre perfil de cliente. Cada resposta que eu dou abre possibilidades novas. É isso que significa explorar — a IA me ajuda a ver o quadro completo antes de começar."

**Passo 2 — Planeje (~1.5 min):**

```
Agora monte um plano passo a passo pra divulgar a bacalhoada.
Cada passo deve ser pequeno e rápido de executar.
```

IA entrega plano com passos atômicos (ex: "1. Postar story com convite visual", "2. Enviar WhatsApp pra 10 clientes-chave", etc.)

**Fala-guia:**

> "Agora sim: a IA montou um plano. Cada passo é pequeno, dá pra fazer rápido. E o mais importante — isso aqui eu posso salvar. Posso até abrir outro chat e dizer 'executa o passo 1'. O plano é meu, não some quando eu fecho a aba."

**Passo 3 — Execute 1 passo (~1.5 min):**

```
Execute o passo 1 do plano.
```

Mostra UM passo sendo executado. Depois diz à plateia:

> "O resto você executa um por um. Pode ser agora, depois, ou em outro chat. O plano é seu. É como uma receita — você não precisa fazer o bolo inteiro de uma vez."
```

- [ ] **Step 4: Rewrite Discussão [50:00–52:00] (lines 254–258)**

Replace the entire "Discussão" subsection with:

```markdown
### Discussão [50:00–52:00]

**Fala bônus — O Atalho da Iteração:**

> "E aqui vai um atalho pra esse superpoder: a maioria pula direto pro resultado. 'Faz pra mim' e pronto. Mas se você pedir pra IA primeiro explorar as possibilidades com você, e depois montar um plano, o resultado muda completamente. Dois minutos de exploração com a IA valem mais que vinte minutos de ajuste depois."

Prompt de referência (no slide e no handout):

**Explore:**
```
Meu objetivo é [X]. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

**Planeje:**
```
Agora monte um plano passo a passo. Cada passo deve ser
pequeno e rápido de executar.
```

**Transição:** "Vamos recapitular."
```

- [ ] **Step 5: Update Recapitulação SP3 line (around line 272)**

Change:
```
> "**3. Itere** — Não pare na primeira resposta. Refine, ajuste, aprofunde. A conversa é o produto."
```
To:
```
> "**3. Itere** — Explore possibilidades, planeje em passos, execute um por um. A maioria pula direto pro resultado — não seja a maioria."
```

- [ ] **Step 6: Update Notas de Produção timing note (around line 299)**

Change:
```
- Superpoder 3 tem 3 min a menos que os outros. Se estourar tempo nos anteriores, corte a Iteração 3 (mensagem de WhatsApp) da demo.
```
To:
```
- Superpoder 3 tem 3 min a menos que os outros. Se estourar tempo nos anteriores, reduza as rodadas de Q&A no Passo 1 (Explore) para 2 trocas e pule o Passo 3 (Execute 1 passo), narrando-o ao invés de rodar ao vivo.
```

---

### Task 2: Rewrite T2 Demo Scripts — Demo 3 Section

**Files:**
- Modify: `docs/t2-demo-scripts.md:128–215`

- [ ] **Step 1: Replace entire Demo 3 section (lines 128–215)**

Replace from `## Demo 3 — Superpoder 3: Itere` through the end of Demo 3 (before `## Quick Reference`) with:

```markdown
## Demo 3 — Superpoder 3: Itere

**Scenario:** Divulgar a bacalhoada deste sábado no Empório Princesa, em Campanha, MG.

> **Presenter note:** 3 passos no MESMO chat. Passo 1 é INTERATIVO — a IA pergunta, o apresentador responde ao vivo. Isso demonstra o padrão Explore → Planeje → Execute.

### Step 1 — Explore (interativo)

```
Meu objetivo é divulgar a bacalhoada deste sábado no Empório
Princesa, em Campanha, MG. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

**Expected result:** A IA começa a fazer perguntas uma por vez. Exemplos do que pode perguntar:
- "Que canais você usa pra se comunicar com clientes?"
- "Quantos dias antes do evento quer começar a divulgar?"
- "Qual o perfil dos seus clientes mais fiéis?"
- "Você tem orçamento pra anúncios pagos?"
- "Já fez divulgação de eventos antes? O que funcionou?"

**Presenter action:** Responda cada pergunta brevemente (1-2 frases). Depois de 2-3 trocas, diga: "Ok, temos um quadro claro."

**What to say to the audience:**
*"Vejam: eu não sabia que a IA ia perguntar sobre canais, sobre orçamento, sobre perfil de cliente. Cada resposta que eu dou abre possibilidades novas. É isso que significa explorar — a IA me ajuda a ver o quadro completo antes de começar."*

---

### Step 2 — Planeje

```
Agora monte um plano passo a passo pra divulgar a bacalhoada.
Cada passo deve ser pequeno e rápido de executar.
```

**Expected result:** Plano numerado com passos atômicos. Exemplo:
1. Postar story com convite visual
2. Enviar WhatsApp pra 10 clientes-chave
3. Criar post de feed com cardápio
4. Mandar lembrete na sexta à noite
5. Postar foto da preparação no sábado de manhã

**What to say to the audience:**
*"Agora sim: a IA montou um plano. Cada passo é pequeno, dá pra fazer rápido. E o mais importante — isso aqui eu posso salvar. Posso até abrir outro chat e dizer 'executa o passo 1'. O plano é meu, não some quando eu fecho a aba."*

---

### Step 3 — Execute 1 passo

```
Execute o passo 1 do plano.
```

**Expected result:** A IA entrega o conteúdo do passo 1 completo (texto do story, instruções de imagem, etc.).

**What to say to the audience:**
*"O resto você executa um por um. Pode ser agora, depois, ou em outro chat. O plano é seu. É como uma receita — você não precisa fazer o bolo inteiro de uma vez."*

---

### Bônus — O Atalho da Iteração

> **Nota ao apresentador:** Não é demo ao vivo. É referência pra plateia levar pra casa. Diga a fala e mostre o slide/prompts.

**Explore:**
```
Meu objetivo é [X]. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

**Planeje:**
```
Agora monte um plano passo a passo. Cada passo deve ser
pequeno e rápido de executar.
```

**O que dizer à plateia:**
"A maioria pula direto pro resultado. 'Faz pra mim' e pronto. Mas se você pedir pra IA primeiro explorar as possibilidades com você, e depois montar um plano, o resultado muda completamente. Dois minutos de exploração com a IA valem mais que vinte minutos de ajuste depois."

**Diferença: Atalho do Contexto vs Atalho da Iteração:**

| | Atalho do Contexto (SP1) | Atalho da Iteração (SP3) |
|---|---|---|
| Método | IA pergunta, você responde | IA pergunta, você responde |
| Propósito | IA te ENTENDE (quem você é) | IA entende O PROBLEMA (o que é possível) |
| Resultado | Contexto completo | Quadro claro de possibilidades |
| Depois | Você pede a tarefa | Você pede um plano |
| 1 prompt | Sim | Não — 2 prompts (explore + planeje) |
```

- [ ] **Step 2: Update Quick Reference table (lines 218–228)**

Replace the Demo 3 row and timing note. Change:
```
| 3 (steps 1–4) | Itere | Any | **Same chat** (sequential) |

**Total prompts to run:** 8 (2 + 2 + 4; os 4 prompts da Demo 3 rodam no mesmo chat)

**Timing Demo 3:** ~8 min. P1 rápido (tabela), P2 rápido (tabela), P3 é o momento "uau" (leva 40-60s a IA escrever tudo — deixa rolar em silêncio, a plateia lê junto), P4 é o fecho (resposta em 10s).
```
To:
```
| 3 (steps 1–3) | Itere | Any | **Same chat** (interactive → sequential) |

**Total prompts to run:** 5 (2 + 2 + 1 interativa + 1 plano + 1 execução; Demo 3 tem 1 prompt inicial + Q&A interativo + 2 prompts subsequentes)

**Timing Demo 3:** ~6 min. Step 1 interativo (~3 min, 2-3 rodadas de Q&A), Step 2 (~1.5 min), Step 3 (~1.5 min).
```

---

### Task 3: Update T3 Deck Skeleton — SP3 Slides + New Slide

**Files:**
- Modify: `docs/t3-deck-skeleton.md:220–257`

- [ ] **Step 1: Update Slide 11 — Superpoder 3: Itere (lines 220–237)**

Replace the entire Slide 11 section with:

```markdown
## Slide 11 — Superpoder 3: Itere

**Objetivo:** introduzir a lógica de Explore → Planeje → Execute.

**Na tela:**
- Iterar é explorar, planejar e executar.
- A maioria pula direto pro resultado.
- Quem explora antes, planeja depois, e executa por último, entrega mais rápido e melhor.

**Fala-base:**
- Primeiro explore possibilidades com a IA.
- Depois planeje em passos pequenos.
- Execute um passo de cada vez.
- Mesmo método do Atalho do Contexto — mas pra entender o problema, não a pessoa.

**Visual sugerido:**
- Três blocos horizontais: Explore → Planeje → Execute.
- Seta conectando os três.
```

- [ ] **Step 2: Update Slide 12 — Demo 3 (lines 238–257)**

Replace the entire Slide 12 section with:

```markdown
## Slide 12 — Demo 3: Explore → Planeje → Execute

**Objetivo:** mostrar a construção progressiva no mesmo chat.

**Na tela:**
- 1. Explore — IA pergunta, você responde (quadro claro)
- 2. Planeje — plano passo a passo, cada passo pequeno
- 3. Execute — um passo de cada vez, quando quiser

**Fala-base:**
- Passo 1 é interativo: a IA me fez perguntas que eu não sabia que precisava responder.
- Passo 2: o plano é meu. Posso salvar, compartilhar, executar em outro chat.
- Passo 3: um passo de cada vez. É como uma receita.

**Visual sugerido:**
- Três degraus com seta: Explore → Planeje → Execute.
- Destacar que o chat é o MESMO o tempo todo.
- Destacar que o passo 1 é interativo (ícone de diálogo).
```

- [ ] **Step 3: Insert new Slide 12b — O Atalho da Iteração (after Slide 12, before Slide 13)**

Insert the following new slide section between Slide 12 and Slide 13:

```markdown
---

## Slide 12b — O Atalho da Iteração

**Objetivo:** mostrar os 2 prompts de referência do Atalho da Iteração.

**Na tela:**
- Título: "O Atalho da Iteração"
- Prompt 1 grande e legível:
  ```
  Meu objetivo é [X]. Me faça perguntas, uma por vez, até
  explorarmos todas as possibilidades e termos um quadro claro.
  ```
- Prompt 2 grande e legível:
  ```
  Agora monte um plano passo a passo. Cada passo deve ser
  pequeno e rápido de executar.
  ```
- Subtexto: "Antes de executar, explore. Depois, planeje."

**Fala-base:**
- A maioria pula direto pro resultado.
- Dois minutos de exploração com a IA valem mais que vinte minutos de ajuste depois.

**Visual sugerido:**
- Dois prompts em destaque, grandes, fotográficos.
- Fundo limpo. Pessoa tira foto e testa depois.
- Mesmo estilo visual do Slide 7b (Atalho do Contexto).
```

- [ ] **Step 4: Update Slide 5 — Os 3 Superpoderes (lines 104–121)**

Change the SP3 line in the "Na tela" section from:
```
- 3. Itere — *refine a resposta passo a passo até ficar do seu jeito*
```
To:
```
- 3. Itere — *explore possibilidades, planeje em passos, execute um por um*
```

Change the "Fala-base" line from:
```
- "Iterar" = refinar, ajustar em etapas. Explicar o termo ao apresentar.
```
To:
```
- "Iterar" = explorar, planejar e executar. Mesmo método do Atalho do Contexto, propósito diferente.
```

- [ ] **Step 5: Update Slide 13 — Recapitulando SP3 line (lines 259–277)**

Change the SP3 "Apoio curto" line from:
```
- iteração transforma rascunho em algo pronto
```
To:
```
- iteração = explorar, planejar, executar (na ordem)
```

- [ ] **Step 6: Update "Sequência Recomendada" and "Princípios" sections if they reference old Demo 3 structure**

Check lines 329–345. The reference to "prints ou comparação visual" in slide 12 still works with the new demo. No changes needed there.

Update the slide count mention if needed. Currently says "15 slides principais + 3 slides de backup ocultos." With the new Slide 12b, it becomes 16 slides. Change line ~26:
```
**Quantidade sugerida:** 15 slides principais + 3 slides de backup ocultos.
```
To:
```
**Quantidade sugerida:** 16 slides principais + 3 slides de backup ocultos.
```

---

### Task 4: Rewrite demo3-prompts-sequence.md

**Files:**
- Rewrite: `docs/demo3-prompts-sequence.md`

- [ ] **Step 1: Replace entire file content**

```markdown
# Demo 3 — Sequência de 3 Prompts (Explore → Planeje → Execute)

**Uso:** rodar os prompts no MESMO chat (ChatGPT, Claude ou Gemini). Passo 1 é interativo (Q&A). Passos 2 e 3 são sequenciais.
**Case:** Empório Princesa — divulgar bacalhoada com reserva neste sábado.
**Método:** Passo 1 = Explore. Passo 2 = Planeje. Passo 3 = Execute 1 passo.

---

## Passo 1 — Explore (interativo)

```
Meu objetivo é divulgar a bacalhoada deste sábado no Empório
Princesa, em Campanha, MG. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

A IA vai fazer perguntas uma por vez. Responda cada uma brevemente. Exemplos do que a IA pode perguntar:
- "Que canais você usa pra se comunicar com clientes?"
- "Quantos dias antes do evento quer começar a divulgar?"
- "Qual o perfil dos seus clientes mais fiéis?"
- "Você tem orçamento pra anúncios pagos?"
- "Já fez divulgação de eventos antes? O que funcionou?"

Depois de 2-3 trocas: "Ok, temos um quadro claro."

> **Nota ao apresentador:** Não escreva as respostas antes. Responda ao vivo. A plateia precisa ver que a IA pergunta coisas que você não esperava.

---

## Passo 2 — Planeje

```
Agora monte um plano passo a passo pra divulgar a bacalhoada.
Cada passo deve ser pequeno e rápido de executar.
```

Espera-se um plano numerado com passos atômicos. Exemplo:
1. Postar story com convite visual
2. Enviar WhatsApp pra 10 clientes-chave
3. Criar post de feed com cardápio
4. Mandar lembrete na sexta à noite
5. Postar foto da preparação no sábado de manhã

O plano é o PRODUTO. Pode salvar, compartilhar, executar quando quiser. Pode abrir outro chat e dizer "execute o passo 1 deste plano."

---

## Passo 3 — Execute 1 passo

```
Execute o passo 1 do plano.
```

A IA entrega o conteúdo completo do passo 1. Os outros passos ficam como "faça em casa" — a plateia já entendeu o padrão.

---

## O Atalho da Iteração — 2 Prompts de Referência

**Explore:**
```
Meu objetivo é [X]. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

**Planeje:**
```
Agora monte um plano passo a passo. Cada passo deve ser
pequeno e rápido de executar.
```

Execução não tem prompt de atalho — é onde cada pessoa pega o plano e executa passo a passo.

---

## Por que 2 prompts e não 1

Combinar "explore" e "planeje" num prompt só quebra o processo. A IA pode afunilar as opções pra caber no plano, ou pular a exploração. Cada fase precisa completar antes da próxima começar. Mesmo padrão do Atalho do Contexto: um prompt que dispara um processo iterativo, não um resultado único.

---

## Versão adaptada — Anúncio do Workshop (Mentes em Ação)

Ver `docs/anuncio-workshop-prompts.md` — mesmo padrão, contexto do próprio workshop (3 Superpoderes, 16/04, Empório Princesa, R$30 + 1L de leite), com prompts Nano Banana incluídos pras peças visuais.
```

---

### Task 5: Update AGENTS.md

**Files:**
- Modify: `AGENTS.md:24–28`

- [ ] **Step 1: Update SP3 definition in the table (line 27)**

Change:
```
| 3 | Itere | A primeira resposta raramente é a final |
```
To:
```
| 3 | Itere | Explore, planeje e execute — na ordem |
```

- [ ] **Step 2: Update SP3 description in T2 section (line 87)**

Change:
```
- **Superpoder 3 (Itere):** divulgar evento especial (bacalhoada por reserva) do Empório Princesa — 4 passos no mesmo chat (pedir 5 ideias → escolher uma e detalhar → cronograma da semana → mensagem WhatsApp final).
```
To:
```
- **Superpoder 3 (Itere):** divulgar evento especial (bacalhoada por reserva) do Empório Princesa — 3 passos interativos no mesmo chat (Explore → Planeje → Execute 1 passo).
```

- [ ] **Step 3: Add cross-doc note for Atalho da Iteração at the end of the Observações section (after line 97)**

Add after the last bullet in "Observações de Tom e Estilo":
```
- Cross-doc: o bônus "O Atalho da Iteração" (2 prompts de referência + fala do apresentador) deve estar alinhado entre T1, T2, T3 (slide 12b), T7 (handout) e demo3-prompts-sequence.md.
```

---

### Task 6: Cross-Doc Consistency Verification

**Files:**
- Read: All 5 modified files

- [ ] **Step 1: Verify SP3 definition is consistent across all files**

Check that every file uses the new definition. Search all 5 files for the phrase "Explore" or "explore" in SP3 context:

- `AGENTS.md` table: "Explore, planeje e execute — na ordem"
- `docs/t1-roteiro-apresentador.md` conceito central: "Iterar é explorar, planejar e executar"
- `docs/t2-demo-scripts.md` Demo 3 header: shows "Explore → Planeje → Execute"
- `docs/t3-deck-skeleton.md` Slide 11: "Iterar é explorar, planejar e executar"
- `docs/demo3-prompts-sequence.md` title: "Explore → Planeje → Execute"

If any mismatch found, fix it.

- [ ] **Step 2: Verify Atalho da Iteração prompts are identical across all files**

The 2 reference prompts must be verbatim identical in:
- `docs/t1-roteiro-apresentador.md` (Discussão section)
- `docs/t2-demo-scripts.md` (Bônus section)
- `docs/t3-deck-skeleton.md` (Slide 12b)
- `docs/demo3-prompts-sequence.md` (Atalho section)

Prompt 1: `Meu objetivo é [X]. Me faça perguntas, uma por vez, até explorarmos todas as possibilidades e termos um quadro claro.`

Prompt 2: `Agora monte um plano passo a passo. Cada passo deve ser pequeno e rápido de executar.`

If any text differs, align to the spec version.

- [ ] **Step 3: Verify Demo 3 structure is 3 steps everywhere**

Every file that references Demo 3 must show 3 steps (not 4):
- `docs/t1-roteiro-apresentador.md`: 3 passos (Explore → Planeje → Execute 1)
- `docs/t2-demo-scripts.md`: 3 steps
- `docs/t3-deck-skeleton.md` Slide 12: 3 items
- `docs/demo3-prompts-sequence.md`: 3 prompts

If any file still references 4 steps or old structure, fix it.

- [ ] **Step 4: Verify timing references**

All timing references should say Demo 3 is ~6 min (not ~8 min):
- `docs/t2-demo-scripts.md`: ~6 min
- `docs/t1-roteiro-apresentador.md` Notas de Produção: updated fallback

If any old timing persists, fix it.

---

## Spec Coverage Check

| Spec requirement | Task |
|-----------------|------|
| New SP3 definition | T1.1, T5.1 |
| SP3 Explicação rewrite | T1.2 |
| Demo 3: 3 steps (Explore → Planeje → Execute) | T1.3, T2.1 |
| Demo 3 Step 1 interactive Q&A | T1.3, T2.1 |
| Demo 3 Step 2 atomic plan | T1.3, T2.1 |
| Demo 3 Step 3 execute 1 step | T1.3, T2.1 |
| Fala-guia after each demo step | T1.3, T2.1 |
| Atalho da Iteração: 2 reference prompts | T1.4, T2.1, T3.3, T4.1 |
| Atalho da Iteração: fala bônus | T1.4, T2.1 |
| Slide "O Atalho da Iteração" in T3 | T3.3 |
| T3 Slide 5 SP3 update | T3.4 |
| T3 Slide 11 update | T3.1 |
| T3 Slide 12 update | T3.2 |
| T3 Slide 13 recap update | T3.5 |
| T3 slide count update (15→16) | T3.6 |
| AGENTS.md SP3 table update | T5.1 |
| AGENTS.md T2 section update | T5.2 |
| AGENTS.md cross-doc note | T5.3 |
| demo3-prompts-sequence.md rewrite | T4.1 |
| T7 handout addition | Noted below (pending) |

**T7 Handout note:** The spec requires adding the 2 Atalho da Iteração reference prompts to the handout (T7). T7 is currently pending and will be built later. No action in this plan — but AGENTS.md cross-doc note (T5.3) ensures it's tracked.

## Placeholder Scan

No TBD/TODO/placeholders found. Every step contains exact content.

## Type Consistency

N/A — content project, no code types to verify. Cross-doc consistency verified in Task 6.