# Design: Atalho da Iteração — Reframe do Superpoder 3 + Nova Demo 3

**Data:** 2026-04-14
**Status:** Aprovado
**Escopo:** Redefinir Superpoder 3 (Itere) como "Explore → Planeje → Execute", reescrever Demo 3 para demonstrar o padrão interativo, adicionar "Atalho da Iteração" (2 prompts de referência). Cross-doc: T1, T2, T3, AGENTS.md.

---

## Decisão

O Superpoder 3 deixa de ser "refine a primeira resposta" e passa a ser o **processo completo**: explorar possibilidades interativamente, planejar em passos atômicos, e executar. Isso espelha o padrão SDD (Subagent-Driven Development) — understand → plan → execute — traduzido para iniciantes.

A Demo 3 atual é script fechado (4 prompts pré-escritos sem interação). Não demonstra o padrão que ensinamos. Precisa ser reescrita para mostrar o processo real: IA pergunta interativamente → plano atômico → execução de 1 passo.

**O Atalho da Iteração** são 2 prompts de referência (como o Atalho do Contexto), um para explorar e um para planejar. Execução é separada — o plano é entregável, pode ser salvo e executado depois, até em outro chat.

**Por que 2 prompts e não 1:** Combinar "explore" e "planeje" num prompt só quebra o SDD. A IA pode afunilar as opções pra caber no plano, ou pular a exploração. Cada fase precisa completar antes da próxima começar. O mesmo padrão do Atalho do Contexto: um prompt que dispara um processo iterativo, não um resultado único.

---

## Nova Definição do Superpoder 3

**Antes:** "A primeira resposta raramente é a final. O poder real está em refinar: pedir ajustes, corrigir o rumo, aprofundar."

**Depois:** "Iterar é explorar, planejar e executar. A maioria pula direto pro resultado. Quem explora antes, planeja depois, e executa por último, entrega mais rápido e melhor."

Refinar continua existindo, mas como consequência natural, não como definição.

---

## Atalho da Iteração — 2 Prompts de Referência

### Prompt 1 — Explore

```
Meu objetivo é [X]. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

Mesmo método do Atalho do Contexto (IA pergunta interativamente), propósito diferente. Atalho do Contexto = IA pergunta pra te ENTENDER (quem você é). Atalho da Iteração = IA pergunta pra ENTENDER O PROBLEMA e explorar possibilidades.

### Prompt 2 — Planeje

```
Agora monte um plano passo a passo. Cada passo deve ser
pequeno e rápido de executar.
```

O plano é o PRODUTO. Pode salvar, compartilhar, executar quando quiser. Pode abrir outro chat e dizer "execute o passo 1 deste plano."

### Execução

Não tem prompt de atalho. É onde cada pessoa pega o plano e executa passo a passo. No workshop a demo mostra 1 passo; o resto fica como "faça em casa."

---

## Nova Demo 3 — Estrutura (3 passos, não 4)

**Case:** Empório Princesa, divulgar bacalhoada com reserva.
**Timing:** ~6 min (cabe no bloco de 12 min: 4 min explicação + 6 min demo + 2 min discussão)

### Passo 1 — Explore (interativo, ~3 min)

Prompt:
```
Meu objetivo é divulgar a bacalhoada deste sábado no Empório
Princesa, em Campanha, MG. Me faça perguntas, uma por vez, até
explorarmos todas as possibilidades e termos um quadro claro.
```

Apresentador roda 2-3 rodadas de Q&A ao vivo. Exemplo do que a IA pode perguntar:
- "Que canais você usa pra se comunicar com clientes?"
- "Quantos dias antes do evento quer começar a divulgar?"
- "Qual o perfil dos seus clientes mais fiéis?"
- "Você tem orçamento pra anúncios pagos?"
- "Já fez divulgação de eventos antes? O que funcionou?"

Apresentador responde cada uma brevemente. Depois de 2-3 trocas: "Ok, temos um quadro claro."

**Fala-guia após Q&A:**
> "Vejam: eu não sabia que a IA ia perguntar sobre canais, sobre orçamento, sobre perfil de cliente. Cada resposta que eu dou abre possibilidades novas. É isso que significa explorar — a IA me ajuda a ver o quadro completo antes de começar."

### Passo 2 — Planeje (~1.5 min)

Prompt:
```
Agora monte um plano passo a passo pra divulgar a bacalhoada.
Cada passo deve ser pequeno e rápido de executar.
```

IA entrega plano com passos atômicos (ex: "1. Postar story com convite visual", "2. Enviar WhatsApp pra 10 clientes-chave", etc.)

**Fala-guia:**
> "Agora sim: a IA montou um plano. Cada passo é pequeno, dá pra fazer rápido. E o mais importante — isso aqui eu posso salvar. Posso até abrir outro chat e dizer 'executa o passo 1'. O plano é meu, não some quando eu fecho a aba."

### Passo 3 — Execute 1 passo (~1.5 min)

Prompt:
```
Execute o passo 1 do plano.
```

Mostra UM passo sendo executado. Depois diz à plateia:

> "O resto você executa um por um. Pode ser agora, depois, ou em outro chat. O plano é seu. É como uma receita — você não precisa fazer o bolo inteiro de uma vez."

---

## Fala Bônus do Apresentador — O Atalho da Iteração

**Local:** Após a Demo 3, na seção de discussão [50:00–52:00].

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

---

## Mudanças por Entregável

### 1. Roteiro do Apresentador (T1 — `docs/t1-roteiro-apresentador.md`)

**Local:** Seção [40:00–52:00] Superpoder 3 — Inteira reescrita.

Mudanças:
- **Definição do SP3:** nova definição
- **Explicação [40:00–44:00]:** reescrita com foco em Explore → Planeje → Execute
- **Demo ao vivo [44:00–50:00]:** nova Demo 3 (3 passos interativos)
- **Discussão [50:00–52:00]:** fala bônus do Atalho da Iteração + prompts de referência

---

### 2. Demo Scripts (T2 — `docs/t2-demo-scripts.md`)

**Local:** Seção Demo 3 — Inteira reescrita.

Mudanças:
- Demo 3 passa de 4 passos scriptados pra 3 passos (Explore → Planeje → Execute 1)
- Passo 1 é interativo (Q&A ao vivo)
- Adicionar seção bônus "O Atalho da Iteração" com os 2 prompts de referência
- Remover referência ao demo3-prompts-sequence.md antigo (ou atualizar)

---

### 3. Esqueleto do Deck (T3 — `docs/t3-deck-skeleton.md`)

**Local:** Após slides da Demo 3, antes do slide de Recapitulação.

Adicionar 1 slide:

- Título: "O Atalho da Iteração"
- Conteúdo: 2 prompts de referência grandes e legíveis (para fotografia)
- Subtexto: "Antes de executar, explore. Depois, planeje."

---

### 4. AGENTS.md

Atualizar:
- Tabela dos 3 Superpoderes (nova definição do SP3)
- Cross-doc consistency note: incluir "Atalho da Iteração" (2 prompts + fala do apresentador) como elemento alinhado entre T1/T2/T3/T7
- Remover nota sobre demo3-prompts-sequence.md se obsoleta

---

### 5. Handout (T7 — pendente)

Adicionar 2 prompts de referência do Atalho da Iteração na seção de dicas rápidas do handout 1 página.

---

### 6. Demo 3 Prompts Sequence (`docs/demo3-prompts-sequence.md`)

Reescrever para refletir a nova Demo 3 (3 passos interativos). O arquivo antigo serve como referência mas não corresponde mais ao fluxo ensinado.

---

## O que NÃO Muda

- Agenda e timings — Demo 3 continua em 6 min, bloco SP3 continua 12 min
- Demos 1 e 2 — intocadas
- Superpoderes 1 e 2 — conceitos inalterados
- Atalho do Contexto — permanece como está
- Case Empório Princesa — permanece como exemplo principal
- Tabela dos 3 Superpoderes no AGENTS.md — só muda a definição do SP3

---

## Diferença: Atalho do Contexto vs Atalho da Iteração

| | Atalho do Contexto (SP1) | Atalho da Iteração (SP3) |
|---|---|---|
| Método | IA pergunta, você responde | IA pergunta, você responde |
| Propósito | IA te ENTENDE (quem você é) | IA entende O PROBLEMA (o que é possível) |
| Resultado | Contexto completo | Quadro claro de possibilidades |
| Depois | Você pede a tarefa | Você pede um plano |
| 1 prompt | Sim | Não — 2 prompts (explore + planeje) |

Mesmo método, propósito diferente. A plateia já conhece o pattern do SP1 — no SP3 reaplica com objetivo novo.

---

## SDD Mapping (referência interna, não para plateia)

| SDD | Workshop | O que a plateia ouve |
|-----|----------|---------------------|
| Understand (brainstorm) | Explore | "Me faça perguntas até termos um quadro claro" |
| Plan (write-plans) | Planeje | "Monte um plano passo a passo" |
| Execute (subagent-driven) | Execute | "Execute o passo 1" |

Terminologia SDD fica por trás. Plateia aprende o padrão sem jargão.