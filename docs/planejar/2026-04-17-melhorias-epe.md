# Plano: Melhorias no EPE — skill, prompt, README e PDF

**Objetivo:** Adicionar 3 melhorias ao fluxo EPE: menção à skill no README/PDF, lembrete de salvar no fim de Explorar/Planejar, e escolha de modo no início de Explorar.

**Abordagem escolhida:** Cirúrgica — mudanças pontuais em cada arquivo, sem reescrever seções inteiras.

**Arquivos que serão alterados:**
- `skills/explorar-planejar-executar/SKILL.md` — adicionar modo Explorar e lembrete de salvar
- `prompt-superpoderes/explorar-planejar-executar.md` — adicionar modo Explorar e lembrete de salvar
- `README.md` — adicionar seção sobre skill EPE instalável
- `handout-mentes-em-acao.pdf` — regenerar do README via pandoc

---

## Tarefas

- [x] **Tarefa 1: Adicionar modo Explorar na SKILL.md**
  - Na seção "Fase 1 — `/explorar`", logo após o parágrafo "Quando o usuário digita `/explorar`...", adicionar um novo bloco "### Escolha de modo" com:
    - No início de Explorar, a IA pergunta: "Quer que eu faça todas as perguntas de uma vez ou uma por vez?"
    - Duas opções: A) **Exaustivo** — a IA faz todas as perguntas de uma vez, você responde tudo, ela processa e propõe direção. Mais rápido, menos ida-e-volta. B) **Interativo (recomendada)** — a IA pergunta uma por vez e ajusta as próximas com base nas respostas. Mais lento, mas mais adaptável e surpreendente.
  - Na seção "Como conduzir", ajustar o primeiro bullet: "Uma pergunta por mensagem" aplica-se ao modo interativo. No modo exaustivo, a IA faz todas as perguntas de uma vez.
  - Critério de pronto: seção "### Escolha de modo" existe com as duas opções, e o bullet sobre perguntas por mensagem foi ajustado.

- [x] **Tarefa 2: Adicionar lembrete de salvar na SKILL.md**
  - Na seção "Ao sentir que o contexto está claro" (Explorar), substituir o bloco atual pelo novo fluxo:
    1. IA propõe: "Acho que já entendi o suficiente. Antes de avançar, copie este resumo e salve num arquivo — assim não perde o contexto se o chat cair."
    2. IA gera resumo estruturado com: Objetivo, Público/contexto, Restrições, Critério de sucesso, Decisões já tomadas.
    3. Depois: "Quer que eu salve esse contexto num arquivo?" (fluxo existente de salvar em `docs/explorar/`)
  - Na seção "Passo 4 — Gate duro" (Planejar), adicionar antes da mensagem de gate:
    - "Antes de executar, copie o plano e salve localmente — assim você tem backup se o chat cair."
  - Critério de pronto: Explorar tem 3 passos (resumo → salvar → avançar), Planejar tem lembrete de copiar antes de executar.

- [x] **Tarefa 3: Adicionar modo Explorar no Prompt EPE**
  - Em `prompt-superpoderes/explorar-planejar-executar.md`, na seção "Fase 1 — Explorar", adicionar subseção "### Escolha de modo" com as mesmas duas opções (Exaustivo e Interativo recomendada).
  - Ajustar o bullet "Uma pergunta por mensagem" para especificar que se aplica ao modo interativo.
  - Critério de pronto: seção "### Escolha de modo" existe com as duas opções no prompt.

- [x] **Tarefa 4: Adicionar lembrete de salvar no Prompt EPE**
  - Em `prompt-superpoderes/explorar-planejar-executar.md`, na seção "Quando o contexto estiver claro" (Explorar), substituir o bloco atual por:
    1. IA propõe: "Acho que já entendi o suficiente. Antes de avançar, copie este resumo e salve — assim não perde o contexto se o chat cair."
    2. IA gera resumo estruturado: Objetivo, Público/contexto, Restrições, Critério de sucesso, Decisões já tomadas.
  - Na seção "Passo 3 — Gate duro" (Planejar), adicionar antes da mensagem de gate:
    - "Antes de executar, copie o plano e salve localmente — assim você tem backup se o chat cair."
  - Critério de pronto: Explorar tem resumo + lembrete de copiar, Planejar tem lembrete de copiar antes de executar.

- [x] **Tarefa 5: Adicionar seção sobre skill EPE no README**
  - Em `README.md`, adicionar uma nova seção "## Para usuários de Claude Code" após a seção "## Como usar", com:
    - Texto: "Usa o Claude Code? Instale a skill EPE e ganhe comandos dedicados:"
    - Lista dos 3 comandos: `/explorar`, `/planejar`, `/executar`
    - Link/instrução de instalação apontando para `skills/explorar-planejar-executar/SKILL.md`
  - Critério de pronto: seção existe entre "Como usar" e "Desafio da Semana", menciona os 3 comandos e tem link para a skill.

- [x] **Tarefa 6: Regenerar PDF do README**
  - Rodar `pandoc README.md handout-metadata.yaml -o handout-mentes-em-acao.pdf --pdf-engine=xelatex -V lang=pt-BR`
  - Verificar que o PDF gerado contém a nova seção "Para usuários de Claude Code"
  - Critério de pronto: PDF atualizado com a seção da skill.