# Entregas Pós-Workshop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar 3 entregas pós-workshop: prompt EPE colável, README do repo, e handout PDF.

**Architecture:** Prompt EPE é adaptação standalone da skill EPE (sem dependência de sistema de arquivos ou comandos slash). README referencia o prompt EPE por link. PDF gerado do README via pandoc.

**Tech Stack:** Markdown, pandoc, LaTeX (para PDF)

---

## File Structure

| Arquivo | Ação | Responsabilidade |
|---------|------|------------------|
| `prompt-superpoderes/explorar-planejar-executar.md` | Criar | Prompt EPE colável — funciona em qualquer chat de IA |
| `README.md` | Criar | Página principal do repo com superpoderes, atalhos, link pra prompt EPE |
| `handout-mentes-em-acao.pdf` | Gerar | PDF gerado de README.md via pandoc |

---

### Task 1: Criar diretório e arquivo do Prompt EPE

**Files:**
- Create: `prompt-superpoderes/explorar-planejar-executar.md`

- [ ] **Step 1: Criar diretório `prompt-superpoderes/`**

```bash
mkdir -p prompt-superpoderes
```

- [ ] **Step 2: Escrever o prompt EPE completo**

O conteúdo abaixo é adaptação de `skills/explorar-planejar-executar/SKILL.md`. Mudanças vs. original:
- Removidos comandos `/explorar`, `/planejar`, `/executar` — IA detecta fase pelo contexto
- Removidas referências a `docs/explorar/`, `docs/planejar/`, `docs/executar/`, `Read`, `Write`, caminhos `.md`
- Removida seção "Compatibilidade de plataforma" (era específica de ferramentas CLI)
- Adicionado cabeçalho de uso explicando como colar em qualquer chat
- Mantidos: uma pergunta por vez, múltipla escolha, recomendação marcada, transições não-automáticas, pt-BR

```markdown
Como usar:
1. Abra qualquer chat de IA (ChatGPT, Claude, Gemini)
2. Cole o prompt abaixo como primeira mensagem
3. Diga seu objetivo — a IA vai te guiar

---

# Explorar → Planejar → Executar

Fluxo em 3 fases para transformar um objetivo vago em entregas concretas.

A IA detecta automaticamente em qual fase você está, pelo contexto da conversa. Mas as transições entre fases nunca são automáticas — só avança quando você der OK.

---

## Regra global

Sempre que apresentar **duas ou mais opções** (perguntas de múltipla escolha, abordagens, variações), marque **uma como "recomendada"** com uma linha curta de motivo. Exemplo:

```
A — post único com foto do produto — **recomendada** (mais rápido e já testado no seu perfil)
B — carrossel com 5 fotos e storytelling
C — vídeo curto estilo reels
```

Isso acelera sua decisão e mostra o raciocínio da IA.

---

## Fase 1 — Explorar

A IA começa aqui: brainstorm guiado pra entender o que você realmente quer.

### Como funciona

- **Uma pergunta por mensagem.** Nunca blocos de perguntas.
- **Prefere múltipla escolha** quando possível. Pergunta aberta só quando a resposta precisa ser formulada por você.
- **Foca em:** propósito real, público, restrições (prazo, orçamento, ferramentas), critério de sucesso ("como a gente saberá que deu certo?").
- **Reflete o entendimento** periodicamente ("então você quer X porque Y, correto?").
- **A IA decide quando parar** — para quando tiver clareza suficiente. Se você mandar "chega, vamos adiante", respeita.

### Quando o contexto estiver claro

A IA propõe:

> "Acho que já entendi o suficiente pra gente planejar. Quer que eu passe pra próxima fase?"

- **Se sim:** vai pra Fase 2 (Planejar).
- **Se não:** continua explorando.

### O que NÃO acontece em Explorar

- A IA não escreve plano nem código.
- A IA não propõe soluções antes de entender o problema.
- A IA não assume premissas — pergunta.

---

## Fase 2 — Planejar

A IA propõe abordagens e escreve um plano com tarefas pequenas.

### Passo 1 — Apresentar 2-3 abordagens

Antes do plano, a IA propõe **2 ou 3 abordagens** diferentes. Cada uma com:

- Nome curto
- 1-2 linhas de descrição
- Trade-offs (o que ganha, o que perde)
- **Uma marcada como "recomendada"** com motivo

Você escolhe (pode pedir ajustes — itera).

### Passo 2 — Escrever o plano

O plano tem esta estrutura:

```
Objetivo: [uma frase]

Abordagem escolhida: [nome + 2-3 linhas]

Tarefas:
- [ ] Tarefa 1: [nome curto e específico]
  - [o que exatamente fazer, com conteúdo completo]
  - [como saber que ficou pronto]
- [ ] Tarefa 2: ...
```

### Regras do plano

- **Tarefas atômicas:** cada uma cabe em 2 a 5 minutos. Se parece grande, quebra.
- **Sem placeholders.** Nada de "TBD", "ajustar depois", "ver com fulano".
- **Conteúdo completo em cada tarefa.** Não escreve "similar à tarefa 1" — repete.
- **Tarefas podem ser de qualquer natureza:** código, texto, pesquisa, ligar, montar planilha.
- **Critério de pronto** por tarefa quando não for óbvio.

### Passo 3 — Gate duro

A IA apresenta o plano e pede revisão:

> "Plano pronto. Dá uma lida e me fala se quer ajustar algo antes de executar."

**Nunca passa pra Fase 3 sem sua aprovação.**

### O que NÃO acontece em Planejar

- Não exige testes ou commits — funciona pra qualquer tipo de tarefa.
- Não executa nada ainda.

---

## Fase 3 — Executar

A IA executa o plano, uma tarefa por vez.

### Como funciona

**Uma tarefa por vez.** Para cada tarefa:

1. A IA diz qual tarefa vai fazer.
2. Executa (escreve código, redige texto, monta lista etc.).
3. Mostra o resultado.
4. Pergunta: "Seguir pra próxima?"
5. Espera seu OK.

### Desvios no meio da execução

Se a IA perceber que o plano está errado (premissa caiu, dependência faltando):

1. **Pare.** Não ajusta sozinha.
2. **Reporte o que achou e por quê.**
3. **Pergunte:** "Ajusto o plano ou faço um workaround e sigo?"

### Fim da execução

Quando todas as tarefas estiverem feitas:

- Resumo curto do que foi entregue (3-6 linhas).
- Lista dos caminhos dos arquivos gerados.
- Não sugere próximo passo automaticamente — você decide.

### O que NÃO acontece em Executar

- A IA não pula tarefas.
- Não executa várias de uma vez sem pedir.
- Não edita o plano silenciosamente — desvios sempre viram conversa.

---

## Idioma

Toda interação em **pt-BR**. Sem jargão desnecessário.
```

- [ ] **Step 3: Verificar o arquivo**

Run: `cat prompt-superpoderes/explorar-planejar-executar.md | head -5`
Expected: ver as 5 primeiras linhas com o cabeçalho de uso

- [ ] **Step 4: Commit**

```bash
git add prompt-superpoderes/explorar-planejar-executar.md
git commit -m "feat: add colável EPE prompt for any AI chat"
```

---

### Task 2: Criar README.md

**Files:**
- Create: `README.md`

Depende de: Task 1 (referencia `prompt-superpoderes/explorar-planejar-executar.md` por link)

- [ ] **Step 1: Escrever README.md completo**

```markdown
# Mentes em Ação — Aprendendo o Básico pra Lidar com IA

## Os 3 Superpoderes

| # | Superpoder | O que faz | Exemplo Empório Princesa |
|---|-----------|----------|--------------------------|
| 01 | **Dê Contexto** | Tudo que a IA precisa saber pra entregar o que você quer | Em vez de "crie um post", dizer: "Você é especialista em marketing local. O Empório é empório, cafeteria, bistrô." |
| 02 | **Seja Específico** | Quanto mais claro o pedido, mais útil a resposta | Em vez de "escreva uma mensagem", dizer: "WhatsApp, até 5 linhas, tom elegante, CTA de reserva." |
| 03 | **Itere** | Explore · Planeje · Execute — na ordem | Em vez de pular pro resultado, explorar possibilidades com a IA antes de pedir a entrega. |

## O Atalho do Contexto

Não sabe que contexto dar? Deixe a IA perguntar.

> Meu objetivo é [seu objetivo]. Me faça perguntas até ter todas as informações necessárias pra fazer o melhor trabalho possível.

Cole em qualquer IA. Funciona.

## Os 3 Atalhos

**Explorar** — entenda o problema antes de resolver

> Meu objetivo é [X]. Me faça perguntas, uma por vez, até explorarmos todas as possibilidades e termos um quadro claro.

**Planejar** — transforme entendimento em plano

> Agora monte um plano passo a passo. Cada passo deve ser pequeno e rápido de executar.

**Executar** — faça uma coisa de cada vez

> Vamos executar o plano. Uma tarefa por vez, me mostre o resultado e espere meu OK antes de avançar.

## Seu Guia Completo

Quer ir além? O fluxo Explorar → Planejar → Executar te guia passo a passo em qualquer tarefa com IA.

👉 [Prompt completo: Explorar → Planejar → Executar](prompt-superpoderes/explorar-planejar-executar.md)

## Como usar

1. Abra qualquer chat de IA (ChatGPT, Claude, Gemini)
2. Cole o [prompt EPE](prompt-superpoderes/explorar-planejar-executar.md) como primeira mensagem
3. Diga seu objetivo — a IA vai te guiar

## Desafio da Semana

1. Escolha uma mensagem que você ia escrever essa semana.
2. Peça pra IA 2 vezes: primeiro sem contexto, depois com.
3. Compare. **Esse é o workshop inteiro.**

## Apresentação

Acesse os slides do workshop: [giuice.github.io/superpoderes](https://giuice.github.io/superpoderes/)
```

- [ ] **Step 2: Verificar o arquivo**

Run: `cat README.md | head -3`
Expected: ver "# Mentes em Ação — Aprendendo o Básico pra Lidar com IA"

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "feat: add README with superpoderes, shortcuts, and EPE link"
```

---

### Task 3: Gerar Handout PDF

**Files:**
- Generate: `handout-mentes-em-acao.pdf`

Depende de: Task 2 (README.md é a fonte)

- [ ] **Step 1: Instalar pandoc e LaTeX**

```bash
sudo apt-get update && sudo apt-get install -y pandoc texlive-xetex texlive-fonts-recommended texlive-lang-portuguese
```

Run: `pandoc --version | head -1`
Expected: `pandoc X.Y.Z`

- [ ] **Step 2: Criar arquivo de metadados pandoc**

Criar `handout-metadata.yaml`:

```yaml
---
header-includes:
  - \usepackage{fancyhdr}
  - \pagestyle{fancy}
  - \fancyhead[L]{\small Mentes em Ação}
  - \fancyhead[R]{\small Aprendendo o Básico pra Lidar com IA}
  - \fancyfoot[C]{\small giuice.github.io/superpoderes · github.com/giuice/superpoderes}
  - \renewcommand{\headrulewidth}{0.4pt}
  - \renewcommand{\footrulewidth}{0.4pt}
geometry: margin=2cm
fontsize: 11pt
mainfont: sans
monofont: monospace
---
```

- [ ] **Step 3: Gerar PDF**

```bash
pandoc README.md handout-metadata.yaml -o handout-mentes-em-acao.pdf --pdf-engine=xelatex -V lang=pt-BR
```

Expected: arquivo `handout-mentes-em-acao.pdf` na raiz do repo, sem erros.

- [ ] **Step 4: Verificar PDF gerado**

Run: `ls -lh handout-mentes-em-acao.pdf`
Expected: arquivo existe, tamanho > 0

- [ ] **Step 5: Adicionar PDF ao .gitignore (opcional) ou commitar**

Decisão: PDF é artefato gerado. Se quiser versionar, commitar. Se não, adicionar ao `.gitignore`.

Para commitar:

```bash
git add handout-mentes-em-acao.pdf handout-metadata.yaml
git commit -m "feat: add handout PDF generated from README via pandoc"
```

Para ignorar (adicionar ao `.gitignore`):

```bash
echo "handout-mentes-em-acao.pdf" >> .gitignore
echo "handout-metadata.yaml" >> .gitignore
git add .gitignore
git commit -m "chore: ignore generated PDF artifacts"
```

---

### Task 4: Atualizar AGENTS.md

**Files:**
- Modify: `AGENTS.md`

Depende de: Tasks 1-3 completas

- [ ] **Step 1: Atualizar status dos entregáveis**

Na tabela de Entregáveis, marcar E5 (Handout) como concluído e adicionar entrada para o Prompt EPE e README. Atualizar o Cronograma Restante marcando T7 como concluído.

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "docs: update AGENTS.md with post-workshop deliverables status"
```