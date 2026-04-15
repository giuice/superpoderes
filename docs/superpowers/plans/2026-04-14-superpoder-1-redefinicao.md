# Superpoder 1 — Redefinição "Dê Contexto"

**Goal:** Ampliar definição do Superpoder 1 de "contexto sobre você" para "contexto que muda a resposta" (quem pede / pra quem / objetivo / formato), mantendo nome e demo atuais.

**Approach:** Edições cirúrgicas em T1 (roteiro), T3 (deck) e checagem de T2 (demos). Zero mudança na tabela dos 3 Superpoderes ou na cronologia. Atalho do Contexto fica — reposicionado como "escape quando travar".

**Arquivos impactados:**
- `docs/t1-roteiro-apresentador.md` — linhas 55–122 (seção Superpoder 1)
- `docs/t3-deck-skeleton.md` — Slide 5 (bullet SP1), Slide 6 (tela + fala)
- `docs/t2-demo-scripts.md` — verificação; provavelmente sem edição
- `AGENTS.md` — atualizar contexto pós-tarefa

---

## Task 1 — T1: Reescrever conceito central e explicação

**File:** `docs/t1-roteiro-apresentador.md`

- [ ] **Step 1.1:** Substituir linha 59 (conceito central)

De:
```
**Conceito central:** A IA não sabe nada sobre você. Quanto mais contexto você dá sobre quem você é, o que faz e pra que precisa daquilo, melhor a resposta.
```
Para:
```
**Conceito central:** A IA não sabe nada sobre sua situação. Pra entregar algo útil, ela precisa do que **muda a resposta** — quem está pedindo, pra quem é, qual o objetivo, em que formato. Às vezes isso inclui você. Às vezes não.
```

- [ ] **Step 1.2:** Ajustar fala-guia inicial (linha 65)

De:
```
> "O primeiro superpoder é o mais ignorado: dar contexto. Quando você abre o ChatGPT e digita um pedido, a IA não sabe absolutamente nada sobre você. Não sabe sua profissão, sua cidade, seu nível de conhecimento, nada. Ela vai responder de forma genérica porque não tem outra opção."
```
Para:
```
> "O primeiro superpoder é o mais ignorado: dar contexto. Quando você abre o ChatGPT e digita um pedido seco, a IA responde genérico — não porque é burra, mas porque é a única coisa que ela pode fazer sem saber da sua situação. Ela não sabe quem tá pedindo, pra quem é, qual o objetivo. Sem isso, ela chuta."
```

- [ ] **Step 1.3:** Manter analogia da padaria (linhas 67–69) — nenhuma mudança.

- [ ] **Step 1.4:** Substituir regra prática (linhas 71–73)

De:
```
Regra prática:

> "Sempre comece dizendo: quem você é, o que você faz, e pra que vai usar a resposta."
```
Para:
```
Regra prática:

> "Antes de mandar o prompt, pergunta pra você mesmo: **isso que eu tô escrevendo muda a resposta?** Se muda, inclui. Se não muda, corta. Contexto não é biografia — é tudo que ajuda a IA a acertar o alvo."

> "Contexto útil costuma ser uma de quatro coisas: quem tá pedindo, pra quem é, qual o objetivo, em que formato. Nem sempre precisa das quatro. Precisa das que mudam o resultado."
```

## Task 2 — T1: Ajustar ponto a destacar na demo

**File:** `docs/t1-roteiro-apresentador.md`

- [ ] **Step 2.1:** Substituir linhas 100–102

De:
```
**Ponto a destacar:**

> "Vejam a diferença. Mesmo pedido. Mas a resposta com contexto já começa a parecer um texto do próprio negócio. A outra continua sendo genérica e esquecível."
```
Para:
```
**Ponto a destacar:**

> "Vejam a diferença. Mesmo pedido. No primeiro, nada que ajude a IA acertar o alvo. No segundo, cada linha muda a resposta — o negócio, o público, o tom pedido. Isso é contexto útil. E repara: aqui, falar de quem você é mudou tudo, porque o output é a voz do negócio. Nem sempre vai ser assim."
```

## Task 3 — T1: Reposicionar Atalho do Contexto como escape

**File:** `docs/t1-roteiro-apresentador.md`

- [ ] **Step 3.1:** Ajustar preâmbulo do Atalho (linhas 112–114)

De:
```
**Dica bônus — O Atalho do Contexto:**

> "E aqui vai um atalho pra esse superpoder: se você não sabe O QUE escrever de contexto, não precisa saber. É só dizer pra IA qual é o seu objetivo e pedir pra ela te fazer perguntas até ter tudo que precisa. A IA pergunta, você responde, e no final ela entrega algo que nenhum prompt pronto consegue — porque os detalhes vieram de você, não de um template."
```
Para:
```
**Dica bônus — O Atalho do Contexto:**

> "E se você travar? Se olhar pro pedido e não souber o que é relevante e o que não é? Tem um atalho: deixa a IA perguntar. Você diz o objetivo, ela pergunta até ter o que precisa. Vira conversa, não lista. Os detalhes vêm de você, não de um template."
```

- [ ] **Step 3.2:** Manter prompt de referência (linhas 118–120) — nenhuma mudança.

- [ ] **Step 3.3:** Manter transição pro Superpoder 2 (linha 122) — nenhuma mudança.

## Task 4 — T3: Atualizar Slide 5 (Os 3 Superpoderes)

**File:** `docs/t3-deck-skeleton.md`

- [ ] **Step 4.1:** Substituir linha 109

De:
```
- 1. Dê Contexto — *a IA não te conhece; conte quem você é e o que quer*
```
Para:
```
- 1. Dê Contexto — *a IA não conhece sua situação; dê o que muda a resposta*
```

## Task 5 — T3: Reescrever Slide 6 (Superpoder 1)

**File:** `docs/t3-deck-skeleton.md`

- [ ] **Step 5.1:** Substituir bloco "Na tela" (linhas 128–130)

De:
```
- A IA não sabe quem você é.
- Quanto mais contexto relevante, melhor a resposta.
- Diga: quem você é, o que faz, e para quê precisa da resposta.
```
Para:
```
- A IA não sabe nada sobre sua situação.
- Dê o que **muda a resposta**: quem pede, pra quem é, qual o objetivo, em que formato.
- Regra: "isso muda a resposta?" — se sim, inclui. Se não, corta.
```

- [ ] **Step 5.2:** Substituir "Fala-base" (linhas 132–133)

De:
```
**Fala-base:**
- Usar a analogia do consultor ou do garçom.
```
Para:
```
**Fala-base:**
- Usar a analogia do consultor ou do garçom.
- Reforçar: contexto não é biografia — é tudo que ajuda a IA acertar o alvo.
- Às vezes "quem você é" muda tudo (ex.: post do seu negócio). Às vezes não muda nada. O filtro é sempre o mesmo: muda a resposta?
```

## Task 6 — T2: Checar se demo scripts precisam ajuste

**File:** `docs/t2-demo-scripts.md`

- [ ] **Step 6.1:** Ler linhas 20–27 e 51–54 (pontos a destacar do Demo 1).

- [ ] **Step 6.2:** Alinhar narrativa com "muda a resposta" se algum bullet ainda falar só de "who the business is". Candidato de ajuste: linha 53.

Proposta de edição (se aplicável):
```
- The AI now knows WHO the business is, WHERE it is, WHO the customer is, and WHAT makes it special — each piece changes the output
- "Contexto útil" = tudo que muda a resposta. Aqui, todos os 4 mudam.
```

- [ ] **Step 6.3:** Manter prompts A/B intactos — já são bom exemplo de contexto-que-muda.

- [ ] **Step 6.4:** Manter seção "Bônus — O Atalho do Contexto" (linhas 56–69) — já enquadra como referência opcional.

## Task 7 — Atualizar AGENTS.md

**File:** `AGENTS.md`

- [ ] **Step 7.1:** Atualizar seção de contexto/decisões com nota:
```
- Superpoder 1 redefinido (2026-04-14): "Dê Contexto" agora = contexto que muda a resposta (quem pede / pra quem / objetivo / formato), não só "sobre você". Regra prática: "isso muda a resposta?". Atalho do Contexto reposicionado como escape quando travar.
```

- [ ] **Step 7.2:** Se cronograma/Deliverables tiver status de T1/T3, manter — só anotar revisão.

## Task 8 — Verificação final

- [ ] **Step 8.1:** Reler seção Superpoder 1 de T1 ponta-a-ponta. Checar fluxo: conceito → explicação → analogia → regra → demo → ponto a destacar → discussão → atalho → transição.

- [ ] **Step 8.2:** Confirmar consistência cross-doc: tabela dos 3 Superpoderes (se existir em qualquer doc) segue com "Dê Contexto" como nome. Subtítulo/definição curta consistente em T1 e T3.

- [ ] **Step 8.3:** Confirmar que demo Empório Princesa continua válida como ilustração (é caso onde "quem você é" muda tudo — exemplo positivo, não contraexemplo).

---

## Self-Review

**Spec coverage:** Tasks 1–3 cobrem T1. Tasks 4–5 cobrem T3. Task 6 cobre T2. Task 7 AGENTS.md. Task 8 verificação. ✓

**Sem placeholders.** Todos os textos novos estão prontos.

**Consistência:** nome "Dê Contexto" preservado em T1, T3, T5 (slide 5), Slide 6. Regra "muda a resposta?" repetida verbatim em T1 linha 73-nova e T3 Slide 6. ✓

**Escopo:** focado. Não mexe em Superpoder 2/3, Atalho da Iteração, agenda, timings.
