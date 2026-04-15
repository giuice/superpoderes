# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo nature

Not a code project. Content repo for workshop **"Mentes em Ação — Aprendendo o Básico pra Lidar com IA"** (1h, presencial, público iniciante). Deliverables are Markdown drafts under `docs/`, destined for a `.pptx` deck, demo scripts, and a 1-page PDF handout. No build/test/lint tooling.

## Source of truth

`AGENTS.md` at repo root is the live context brief: decisions, agenda, deliverable status, cronograma. Read it first every session — it supersedes anything stale in `docs/`. Update it when task state changes.

## Workflow

Fluxo: **DEFINE → PLAN → BUILD → VERIFY → SHIP** (no Review step). One task at a time. At end of each task, regenerate the context summary in `AGENTS.md` so next chat starts fresh with minimal tokens.

Task IDs are durable (T1–T9). Current state in `AGENTS.md` "Cronograma Restante". Don't renumber.

## Deliverables map

| ID | File | Purpose |
|----|------|---------|
| E2 (T1) | `docs/t1-roteiro-apresentador.md` | Presenter script — authoritative narrative, tone, examples |
| E3 (T2) | `docs/t2-demo-scripts.md` | Copy-paste prompts for 3 live demos (contexto / específico / iterar) |
| E1a (T3) | `docs/t3-deck-skeleton.md` | Slide-by-slide skeleton → feeds `.pptx` (T4) |

Cross-doc consistency matters: wording of the 3 Superpoderes, the agenda blocks, and the Empório Princesa examples must stay aligned across T1/T2/T3. When editing one, check the others.

## Content constraints (non-obvious)

- **Running case:** Empório Princesa, Campanha/MG (`@emporioprincesa`). All demo examples anchor here — don't invent alt businesses unless asked.
- **Tools shown in demos:** ChatGPT, Claude, and/or Gemini. Keep prompts tool-agnostic where possible.
- **Audience:** beginners, possibly zero IA experience. Prompts must be readable by non-technical readers.
- **Language:** Portuguese (pt-BR). All deliverables and prompts in pt-BR.
- **Tom:** direto, profissional, exemplos de impacto real, cidade pequena / negócio local.

## Editing conventions

- Prefer editing existing `docs/*.md` files over creating parallel drafts.
- Keep the 3-Superpoderes table (Dê Contexto / Seja Específico / Itere) verbatim across docs.
- Agenda timings (00–05, 05–10, …) are fixed — changing one block shifts all; update everywhere if touched.
