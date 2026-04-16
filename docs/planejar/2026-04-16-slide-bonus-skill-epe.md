# Plano: Slide bônus da skill Explorar → Planejar → Executar

**Objetivo:** Adicionar slide bônus no deck apresentando a skill `explorar-planejar-executar` (nome, 3 comandos, link do repo) entre o Slide 14 (Desafio) e o Slide 15 (Encerramento), virando o novo penúltimo slide.

**Abordagem escolhida:** 3 cards horizontais + QR no canto — mesmo padrão `.cards`/`.card` usado no Slide 13 (Recap). Mantém consistência visual. Comandos em fonte mono via `<code>` dentro do `.name`.

**Arquivos / artefatos que serão criados ou alterados:**
- `index.html` — inserir nova `<section>` entre linhas 319 e 321
- `docs/t3-deck-skeleton.md` — inserir "Slide 14b — Bônus: Skill EPE" entre Slides 14 e 15

---

## Tarefas

- [x] **Tarefa 1: Inserir slide bônus no `index.html`**
  - Abrir `/home/giuice/Desenv/superpoderes/index.html`
  - Inserir o bloco abaixo **entre a linha 319** (`</section>` do Slide 14 Desafio) **e a linha 321** (`<!-- Slide 15 — Encerramento + Perguntas -->`)
  - Código a inserir:
    ```html
        <!-- Slide 14b — Bônus: Skill Explorar → Planejar → Executar -->
        <section>
          <div class="eyebrow">// BÔNUS · LEVE PRA CASA</div>
          <h2>Skill: Explorar → Planejar → Executar</h2>
          <p style="text-align:center; font-size:1.1rem; color: var(--gold); margin-top:-0.5rem; margin-bottom:1.5rem;">3 comandos pra transformar ideia vaga em entrega.</p>
          <div class="cards">
            <div class="card">
              <div class="num">01</div>
              <div class="name"><code>/explorar</code></div>
              <div class="desc">entender o que você quer (contexto)</div>
            </div>
            <div class="card">
              <div class="num">02</div>
              <div class="name"><code>/planejar</code></div>
              <div class="desc">plano com tarefas pequenas</div>
            </div>
            <div class="card">
              <div class="num">03</div>
              <div class="name"><code>/executar</code></div>
              <div class="desc">uma tarefa por vez, você no controle</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-top:2rem;">
            <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://github.com/giuice/superpoderes&size=160x160&margin=0&bgcolor=0d0d0d&color=E8D26A" alt="QR code github.com/giuice/superpoderes" style="width:120px; height:120px; border:2px solid var(--gold); border-radius:8px;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size:1.1rem; color: var(--neon-cyan);">github.com/giuice/superpoderes</div>
          </div>
          <aside class="notes">
            Slide bônus. Mostrar que o fluxo dos 3 Superpoderes virou uma skill prática que eles podem instalar e usar. Não precisa demonstrar agora — é pra levar pra casa. Apontar o QR, falar que o repo tem tudo.
          </aside>
        </section>

    ```
  - **Pronto quando:** bloco inserido exatamente entre o fechamento do Slide 14 e o comentário do Slide 15, mantendo indentação de 4 espaços do resto do arquivo.

- [x] **Tarefa 2: Atualizar `docs/t3-deck-skeleton.md` com o novo slide**
  - Abrir `/home/giuice/Desenv/superpoderes/docs/t3-deck-skeleton.md`
  - Inserir a seção abaixo **entre o Slide 14 (Desafio da Semana) e o Slide 15 (Encerramento + Perguntas)**:
    ```markdown
    ## Slide 14b — Bônus: Skill Explorar → Planejar → Executar

    **Eyebrow:** `// BÔNUS · LEVE PRA CASA`

    **Título:** Skill: Explorar → Planejar → Executar

    **Subtítulo:** 3 comandos pra transformar ideia vaga em entrega.

    **3 cards:**
    - `01 /explorar` — entender o que você quer (contexto)
    - `02 /planejar` — plano com tarefas pequenas
    - `03 /executar` — uma tarefa por vez, você no controle

    **Rodapé:** QR code + `github.com/giuice/superpoderes`

    **Notas do apresentador:** slide bônus, leve pra casa. Mostrar que o fluxo dos 3 Superpoderes virou skill prática. Não demonstrar agora — apontar QR, falar que o repo tem tudo.

    ---

    ```
  - **Pronto quando:** nova seção aparece entre "Slide 14 — Desafio da Semana" e "Slide 15 — Encerramento + Perguntas", com separador `---` antes do próximo slide.
