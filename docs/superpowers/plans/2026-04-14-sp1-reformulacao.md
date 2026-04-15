# Superpoder 1 — Reformulação do Conceito: Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reformular o Superpoder 1 de "quem você é" para "contexto relevante pra entregar o que você quer"

**Architecture:** Edição cirúrgica em 4 arquivos Markdown. Sem código, sem testes. Cross-doc alignment garantido pelas mudanças serem derivadas do mesmo spec aprovado.

**Tech Stack:** Markdown, git

---

## File Structure

| File | Change type | What changes |
|------|-------------|-------------|
| `AGENTS.md` | Modify line 26 | Conceito do SP1 na tabela |
| `docs/t1-roteiro-apresentador.md` | Modify lines 55-122 | Seção SP1 inteira (conceito, falas, regra, analogia, bônus) |
| `docs/t2-demo-scripts.md` | Modify lines 52-55 | "What to point out" do Prompt B, bônus Atalho do Contexto, e tabela Atalhos |
| `docs/t3-deck-skeleton.md` | Modify lines 109-110, 128-130, 175-178, 301 | Slides 5, 6, 7b e 13 |

---

### Task 1: AGENTS.md — Conceito do SP1 na tabela

**Files:**
- Modify: `AGENTS.md:26`

- [ ] **Step 1: Editar a tabela dos Superpoderes**

Mudar a linha:

```
| 1 | Dê Contexto | IA responde melhor quando sabe quem você é |
```

Para:

```
| 1 | Dê Contexto | Dê contexto relevante — tudo que a IA precisa saber pra entregar o que você quer |
```

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "refactor(sp1): atualizar conceito na tabela do AGENTS.md

De 'sabe quem você é' para 'contexto relevante pra entregar o que você quer'.
Identidade é parte possível, não obrigatória."
```

---

### Task 2: t1-roteiro-apresentador.md — Seção SP1 inteira

**Files:**
- Modify: `docs/t1-roteiro-apresentador.md:59-122`

- [ ] **Step 1: Atualizar conceito central (linha 59)**

Mudar:

```
**Conceito central:** A IA não sabe nada sobre você. Quanto mais contexto você dá sobre quem você é, o que faz e pra que precisa daquilo, melhor a resposta.
```

Para:

```
**Conceito central:** A IA não sabe nada sobre você. O que faz a resposta melhor é dar contexto relevante — tudo que a IA precisa saber pra entregar o que você quer. Isso pode incluir quem você é, pra que vai usar, qual resultado espera.
```

- [ ] **Step 2: Atualizar fala principal da explicação (linhas 65-67)**

Mudar:

```
> "O primeiro superpoder é o mais ignorado: dar contexto. Quando você abre o ChatGPT e digita um pedido, a IA não sabe absolutamente nada sobre você. Não sabe sua profissão, sua cidade, seu nível de conhecimento, nada. Ela vai responder de forma genérica porque não tem outra opção."
```

Para:

```
> "O primeiro superpoder é dar contexto. Quando você abre o ChatGPT e digita um pedido, a IA não sabe absolutamente nada sobre você. Não sabe sua profissão, sua cidade, o que você precisa, nada. Ela vai responder de forma genérica porque não tem outra opção. O que faz a diferença é dar contexto relevante — tudo que a IA precisa saber pra entregar o que você quer."
```

- [ ] **Step 3: Atualizar analogia do consultor (linhas 69-70)**

Mudar:

```
> "É como ligar pra um consultor e dizer 'me ajuda com meu negócio' sem falar o que o negócio faz, há quanto tempo existe, qual o problema. O consultor vai dar um conselho genérico de livro. Agora, se você fala 'tenho uma padaria em Machado, abri há 6 meses, to com dificuldade de atrair clientes no horário da tarde' — aí o conselho muda completamente."
```

Para:

```
> "É como ligar pra um consultor e dizer 'me ajuda com meu negócio' sem falar o que o negócio faz, qual o problema. O consultor vai dar um conselho genérico de livro. Agora, se você fala 'tenho uma padaria em Machado, to com dificuldade de atrair clientes no horário da tarde' — aí o conselho muda completamente. Não porque o consultor sabe quem você é, mas porque agora ele sabe exatamente o que você precisa."
```

- [ ] **Step 4: Atualizar regra prática (linha 73)**

Mudar:

```
> "Sempre comece dizendo: quem você é, o que faz, e pra que vai usar a resposta."
```

Para:

```
> "Antes de pedir, pense: o que a IA precisa saber pra entregar o que eu quero? Isso pode incluir quem você é, pra que vai usar, e que resultado espera."
```

- [ ] **Step 5: Atualizar dica bônus — O Atalho do Contexto (linha 114)**

Mudar:

```
> "E aqui vai um atalho pra esse superpoder: se você não sabe O QUE escrever de contexto, não precisa saber. É só dizer pra IA qual é o seu objetivo e pedir pra ela te fazer perguntas até ter tudo que precisa. A IA pergunta, você responde, e no final ela entrega algo que nenhum prompt pronto consegue — porque os detalhes vieram de você, não de um template."
```

Para:

```
> "E aqui vai um atalho pra esse superpoder: se você não sabe que contexto dar, não precisa saber. É só dizer pra IA qual é o seu objetivo e pedir pra ela te fazer perguntas até ter tudo que precisa. A IA pergunta, você responde, e no final ela entrega algo que nenhum prompt pronto consegue — porque os detalhes vieram de você, não de um template."
```

- [ ] **Step 6: Commit**

```bash
git add docs/t1-roteiro-apresentador.md
git commit -m "refactor(sp1): reformular conceito, falas, regra prática e analogia

Contexto relevante substitui 'quem você é' como foco.
Identidade é parte possível, não obrigatória.
Analogia do consultor agora enfatiza 'o que você precisa' não 'quem você é'."
```

---

### Task 3: t2-demo-scripts.md — Referências ao conceito do SP1

**Files:**
- Modify: `docs/t2-demo-scripts.md:52-54,67-69,209-214`

- [ ] **Step 1: Atualizar "What to point out" do Prompt B (linhas 52-54)**

Mudar:

```
- Same task, completely different quality
- The AI now knows WHO the business is, WHERE it is, WHO the customer is, and WHAT makes it special
- This is the difference context makes — you go from generic to "this sounds like MY business"
```

Para:

```
- Same task, completely different quality
- The AI now has everything it needs to deliver what the business wants — identity, audience, goal, tone
- This is what relevant context does — the AI goes from generic to delivering exactly what you need
```

- [ ] **Step 2: Atualizar bônus "O Atalho do Contexto" (linhas 67-69)**

Mudar:

```
"Se você não sabe o que escrever de contexto, não precisa saber. Diz o objetivo e pede pra IA perguntar. Ela vai extrair de você os detalhes que importam."

**Por que funciona:** A IA não adivinha — ela pergunta. Você não precisa saber O QUE é relevante pra IA — ela sabe. O resultado é mais personalizado do que qualquer prompt fixo porque os dados vieram de uma conversa real sobre SEU caso.
```

Para:

```
"Se você não sabe que contexto dar, não precisa saber. Diz o objetivo e pede pra IA perguntar. Ela vai extrair de você os detalhes que importam."

**Por que funciona:** A IA não adivinha — ela pergunta. Você não precisa saber que contexto é relevante — ela pergunta até ter tudo que precisa. O resultado é mais personalizado do que qualquer prompt fixo porque os dados vieram de uma conversa real sobre SEU caso.
```

- [ ] **Step 3: Atualizar tabela Atalhos (linhas 209-214)**

Mudar a linha do "Propósito" do Atalho do Contexto:

```
| Propósito | IA te ENTENDE (quem você é) | IA entende O PROBLEMA (o que é possível) |
```

Para:

```
| Propósito | IA ENTENDE o que você precisa | IA entende O PROBLEMA (o que é possível) |
```

- [ ] **Step 4: Commit**

```bash
git add docs/t2-demo-scripts.md
git commit -m "refactor(sp1): alinhar demo scripts com novo conceito

'What to point out' agora foca em contexto relevante, não identidade.
Atalho do Contexto reformulado para enfatizar resultado.
Tabela de Atalhos atualizada: IA ENTENDE o que você precisa."
```

---

### Task 4: t3-deck-skeleton.md — Slides com referência ao SP1

**Files:**
- Modify: `docs/t3-deck-skeleton.md:109-110,128-130,175-178,301`

- [ ] **Step 1: Atualizar Slide 5 — Os 3 Superpoderes (linha 109)**

Mudar:

```
- 1. Dê Contexto — *a IA não te conhece; conte quem você é e o que quer*
```

Para:

```
- 1. Dê Contexto — *dê contexto relevante — tudo que a IA precisa saber pra entregar o que você quer*
```

- [ ] **Step 2: Atualizar Slide 6 — Superpoder 1: Dê Contexto (linhas 128-130)**

Mudar:

```
- A IA não sabe quem você é.
- Quanto mais contexto relevante, melhor a resposta.
- Diga: quem você é, o que faz, e para quê precisa da resposta.
```

Para:

```
- A IA não sabe nada sobre você.
- O que faz a resposta melhor é dar contexto relevante — tudo que a IA precisa saber pra entregar o que você quer.
- Isso pode incluir quem você é, pra que vai usar, qual resultado espera.
```

- [ ] **Step 3: Atualizar Slide 7b — O Atalho do Contexto (linhas 175-178)**

Mudar:

```
- Subtexto: "Não sabe o que escrever? Deixe a IA perguntar."

**Fala-base:**
- Se você não sabe O QUE escrever de contexto, não precisa saber.
- Diz o objetivo e pede pra IA fazer perguntas.
- Os detalhes vêm de você, não de um template.
```

Para:

```
- Subtexto: "Não sabe que contexto dar? Deixe a IA perguntar."

**Fala-base:**
- Se você não sabe que contexto dar, não precisa saber.
- Diz o objetivo e pede pra IA fazer perguntas.
- Os detalhes vêm de você, não de um template.
```

- [ ] **Step 4: Atualizar Slide 13 — Recapitulando (linha 301)**

Mudar:

```
- contexto tira o genérico
```

Para:

```
- contexto relevante tira o genérico
```

- [ ] **Step 5: Commit**

```bash
git add docs/t3-deck-skeleton.md
git commit -m "refactor(sp1): alinhar slides com novo conceito

Slide 5, 6, 7b e 13 atualizados para contexto relevante.
Removida ênfase em 'quem você é' como obrigatório."
```

---

### Task 5: Verificar cross-doc alignment

**Files:**
- Read: all 4 modified files

- [ ] **Step 1: Verificar consistência**

Ler os 4 arquivos modificados e confirmar:
1. A frase "contexto relevante" aparece como conceito central em todos
2. Nenhuma ocorrência de "quem você é" como obrigatório permanece
3. A tabela de Atalhos (t2) reflete a mudança
4. Os slides (t3) refletem a mudança

- [ ] **Step 2: Commit final se ajustes necessários**

Se encontrar inconsistências, corrigir e commitar. Caso contrário, task concluída.