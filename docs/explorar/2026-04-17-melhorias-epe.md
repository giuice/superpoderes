# Contexto: Melhorias no EPE (Skill, Prompt, README, PDF)

**Data:** 2026-04-17

## Objetivo

Atualizar 3 pontos no fluxo Explorar → Planejar → Executar que ficaram incompletos ou ausentes na última sessão.

## Público / contexto

Participantes do workshop "Mentes em Ação" e qualquer usuário de IA que acessa o repo ou usa o prompt colável.

## Restrições

- Manter compatibilidade do prompt colável com qualquer IA (ChatGPT, Claude, Gemini)
- Manter a skill SKILL.md funcional para Claude Code
- PDF é gerado do README via pandoc — mudanças no README refletem no PDF automaticamente
- Linguagem pt-BR, acessível para iniciantes

## Critério de sucesso

- README e PDF mencionam a skill EPE instalável para Claude Code
- Prompt EPE e SKILL.md lembram de salvar no fim de Explorar e Planejar
- Prompt EPE e SKILL.md oferecem escolha de modo (exaustivo vs interativo) no início de Explorar

## Decisões já tomadas

1. **Skill no README:** seção breve "Usa Claude Code? Instale a skill EPE" + link, sem detalhão
2. **Salvar no fim:** só em Explorar e Planejar — IA gera resumo estruturado e pede pra copiar/salvar antes de avançar. Na Execução não precisa porque as entregas já estão visíveis.
3. **Modo Explorar:** IA pergunta no início da fase: "Quer que eu faça todas as perguntas de uma vez (mais rápido) ou uma por vez (mais adaptável)?" — usuário escolhe.

## Matriz de impacto

| Mudança | Prompt EPE | SKILL.md | README.md | PDF handout |
|---------|-----------|----------|-----------|-------------|
| Skill mencionada (seção breve + link) | — | — | sim | sim (via README) |
| Salvar no fim (só Explorar + Planejar) | sim | sim | — | — |
| Modo Explorar (escolha: exaustivo vs interativo) | sim | sim | — | — |