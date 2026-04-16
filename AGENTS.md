# Resumo de Contexto — Mentes em Ação (após T1)

## Situação

Meu irmão está no curso Empretec e precisa montar uma empresa rapidamente. A empresa se chama **Mentes em Ação** e vai realizar um workshop sobre IA para iniciantes na quinta-feira. Hoje é segunda-feira. Eu serei o apresentador.

## Workflow

**Fluxo:** DEFINE → PLAN → BUILD → VERIFY → SHIP (sem Review)

**Método de trabalho:** uma task por vez. Ao final de cada task, gerar um resumo de contexto atualizado para continuar em um chat novo, economizando tokens.

## Decisões Tomadas

**Status:** Idea Refine ✅ + Plan ✅

**Título:** Aprendendo o Básico pra Lidar com IA — técnicas simples e claras para se lidar com IA

**Formato:** presencial, cerca de 1 hora, público externo misto, iniciante, possivelmente sem experiência prévia com IA.

**Formato da apresentação:** HTML com Reveal.js, estilo synthwave/retrofuturista. Hospedado no GitHub Pages. Acessível via URL, compartilhável com participantes após o workshop.

**URL da apresentação:** `https://giuice.github.io/superpoderes/`

**Estrutura:** Workshop dos 3 Superpoderes

| # | Nome | Conceito |
|---|------|----------|
| 1 | Dê Contexto | Dê contexto relevante — tudo que a IA precisa saber pra entregar o que você quer |
| 2 | Seja Específico | Pedido vago = resposta vaga |
| 3 | Itere | Explore, planeje e execute — na ordem |

## Agenda (60 min)

| Horário | Bloco |
|---------|-------|
| 00–05 | Abertura: "A IA já te decepcionou?" |
| 05–10 | O que IA é (e não é) |
| 10–25 | Superpoder 1: Dê Contexto |
| 25–40 | Superpoder 2: Seja Específico |
| 40–52 | Superpoder 3: Itere |
| 52–60 | Fechamento + desafio da semana + QA |

## Direção de Tom

- Direto e profissional.
- Exemplos práticos de impacto real.
- Cenários de negócios locais e cidade pequena.
- Ferramentas nas demos: ChatGPT, Claude e/ou Gemini.
- Case principal dos exemplos: Empório Princesa, em Campanha, MG.

## Entregáveis

| ID | Entregável | Formato | Status |
|----|------------|---------|--------|
| E1 | Apresentação | HTML (Reveal.js) | ✅ Concluído (T4) |
| E2 | Roteiro do apresentador | .md | ✅ Concluído (T1) |
| E3 | Scripts de demo | .md | ✅ Concluído (T2) |
| E1a | Esqueleto do deck | .md | ✅ Concluído (T3) |
| E4 | ~~Screenshots de backup~~ | ~~Imagens no deck~~ | ❌ Cancelado — demo 100% ao vivo, sem backup |
| E5 | Handout do participante | .pdf (1 página) | Pendente (T7) |

## Cronograma Restante

### Dia 1 — Segunda (hoje)

- T1 – Roteiro do apresentador ✅
- T2 – Scripts de demo ✅
- T3 – Esqueleto do deck ✅

### Dia 2 — Terça

- T4 – Apresentação HTML synthwave ✅
- ~~T5 – Rodar demos ao vivo + capturar screenshots~~ ❌ Cancelado — demo 100% ao vivo, sem screenshots de backup
- ~~T6 – Inserir backup no deck~~ ❌ Cancelado — mesmo motivo

### Dia 3 — Quarta

- T7 – Handout (PDF 1 página)
- T8 – Ensaio cronometrado
- T9 – Ajustes finais

## T2 — Scripts de Demo

**Objetivo:** para cada superpoder, criar 2 cenários: um prompt "sem técnica" e um "com técnica", com a ferramenta usada e o resultado esperado. Total: 3 pares.

### Cenários já definidos no roteiro (T1)

- **Superpoder 1 (Dê Contexto):** post de Instagram para o Empório Princesa — prompt sem contexto vs. com contexto.
- **Superpoder 2 (Seja Específico):** mensagem de WhatsApp para divulgar um evento especial no Empório Princesa — prompt vago vs. específico.
- **Superpoder 3 (Itere):** divulgar evento especial (bacalhoada por reserva) do Empório Princesa — 3 passos interativos no mesmo chat (Explore → Planeje → Execute 1 passo).

**Saída esperada:** documento `.md` com os prompts exatos, prontos para copiar e colar, mais a descrição do resultado esperado de cada um, para ensaio e referência no dia.

**Base pública já confirmada para o case:** Campanha, MG; presença no Instagram como `@emporioprincesa`; posicionamento público como empório, bistrô/cafeteria, espaço com produtos de qualidade, cafés, lanches, eventos e reservas.

## Observações de Tom e Estilo

- Exemplos práticos e de impacto real, com foco em negócios locais e cidade pequena.
- Público iniciante: os prompts devem ser compreensíveis para quem nunca usou IA.
- Tom direto e profissional.
- Cross-doc: o bônus "O Atalho do Contexto" (prompt de referência + fala do apresentador) deve estar alinhado entre T1, T2, T3 (slide 7b) e T7 (handout).
- Cross-doc: o bônus "O Atalho da Iteração" (2 prompts de referência + fala do apresentador) deve estar alinhado entre T1, T2, T3 (slide 12b), T7 (handout) e demo3-prompts-sequence.md.