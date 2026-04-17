# Spec: Entregas Pós-Workshop (Handout, Prompt EPE, README)

**Data:** 2026-04-17

## Contexto

Workshop "Mentes em Ação" já aconteceu com sucesso. Três entregas pendentes para consolidar o material pós-workshop e dar aos participantes ferramentas práticas para continuar usando IA.

## Entregas

| # | Entrega | Arquivo | Formato |
|---|---------|---------|---------|
| 1 | Prompt EPE colável | `prompt-superpoderes/explorar-planejar-executar.md` | Markdown |
| 2 | README do repo | `README.md` | Markdown |
| 3 | Handout PDF | Gerado de `README.md` via pandoc | PDF |

## Design

### 1. Prompt EPE (`prompt-superpoderes/explorar-planejar-executar.md`)

**Origem:** Skill `skills/explorar-planejar-executar/SKILL.md`

**Adaptações:**
- Remover referências a sistema de arquivos (`docs/explorar/`, `Read`/`Write`, caminhos `.md`)
- Remover comandos `/explorar`, `/planejar`, `/executar` — vira fluxo automático onde a IA detecta a fase pelo contexto
- Manter: uma pergunta por vez, múltipla escolha, recomendação marcada, transições não-automáticas
- Manter: regra de marcar opção recomendada
- Manter: pt-BR, linguagem acessível

**Fluxo no prompt:**
- IA começa na fase Explorar: pergunta uma por vez até ter contexto suficiente
- Quando contexto claro, propõe passar pra Planejar (espera OK do usuário)
- Planejar: propõe 2-3 abordagens (uma recomendada), espera escolha, escreve plano com tarefas atômicas
- Executar: uma tarefa por vez, mostra resultado, pede OK pra avançar, desvios viram conversa

**Cabeçalho de uso:**
```
Como usar:
1. Abra qualquer chat de IA (ChatGPT, Claude, Gemini)
2. Cole o prompt abaixo como primeira mensagem
3. Diga seu objetivo — a IA vai te guiar
```

**Plataformas:** Funciona em qualquer chat de IA. Sem dependência de ferramentas externas.

### 2. README.md

**Público:** Participantes do workshop que acessam o repo

**Seções:**

1. **Título** — "Mentes em Ação — Aprendendo o Básico pra Lidar com IA"
2. **Os 3 Superpoderes** — tabela: Dê Contexto / Seja Específico / Itere, com 1 frase cada + exemplo Empório Princesa
3. **O Atalho do Contexto** — prompt curto inline: `Meu objetivo é [seu objetivo]. Me faça perguntas até ter todas as informações necessárias pra fazer o melhor trabalho possível.`
4. **Os 3 Atalhos** — Explorar, Planejar, Executar — cada um com prompt de referência curto inline
5. **Seu Guia Completo** — referência ao prompt EPE. Texto: "Quer ir além? O fluxo Explorar → Planejar → Executar te guia passo a passo em qualquer tarefa com IA." + link para `prompt-superpoderes/explorar-planejar-executar.md`
6. **Como usar** — 3 passos: abra chat, cole o prompt, diga seu objetivo
7. **Desafio da semana** — mesmo do workshop
8. **Link da apresentação** — `https://giuice.github.io/superpoderes/`

**Tom:** Direto, profissional, pt-BR, sem jargão.
**Atalhos curtos:** Inline no README (cabem).
**Prompt EPE completo:** Referenciado por link (grande demais pra inline).

### 3. Handout (PDF)

**Fonte:** README.md
**Ferramenta:** pandoc
**Formato:** PDF, sem limite de páginas (conteúdo completo, sem resumo)
**Header:** Branding "Mentes em Ação"
**Footer:** Link da apresentação + URL do repo
**Arquivo de saída:** `handout-mentes-em-acao.pdf` (raiz do repo)

## Dependências

- pandoc instalado para gerar PDF
- LaTeX (ou similar) para pandoc PDF output

## Ordem de execução

1. Prompt EPE (base — README referencia ele)
2. README.md (depende do prompt pra link)
3. Handout PDF (gera do README)