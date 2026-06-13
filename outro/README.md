# ProbPath — 30-Day Anki Learning Path: Master Probability

Trilha de 30 dias de flashcards para memorizar distribuições de probabilidade usando o Anki.

## Como usar

1. Acesse o site via GitHub Pages
2. Clique em um dia para ver os cards
3. Copie os cards para o Anki com o botão **Copy Anki text**
4. Marque o dia como concluído — o progresso fica salvo no seu navegador

## Distribuições cobertas (8 dias × 10 cards)

| Dia | Tópico |
|-----|--------|
| 1 | Fundamentos (variância, FGM, assimetria, curtose, séries) |
| 2 | Bernoulli e Binomial |
| 3 | Uniforme contínua U(a,b) |
| 4 | Exponencial Exp(λ) |
| 5 | Normal N(μ, σ²) |
| 6 | Gama G(α,β) e Qui-Quadrado χ²(n) |
| 7 | Beta(a,b) e distribuição F |
| 8 | Revisão de relações entre distribuições |
| 9–30 | Em breve |

## Estrutura

```
├── index.html       # Página principal
├── about.html       # Sobre o projeto
├── anki-setup.html  # Como configurar o Anki
├── cards.js         # Dados dos cards (fácil de expandir)
├── app.js           # Lógica de interação
├── style.css        # Estilos (dark mode incluído)
└── README.md
```

## Deploy no GitHub Pages

1. Crie um repositório público no GitHub
2. Faça upload de todos os arquivos
3. Em **Settings → Pages**, escolha a branch `main` e pasta `/root`
4. Seu site estará em `https://seu-usuario.github.io/nome-do-repo`

## Expandindo os cards

Edite `cards.js` e adicione novos objetos no array `DAYS`. Cada objeto segue o formato:

```js
{
  label: "Nome do dia",
  topic: "Descrição curta",
  tag: "categoria",
  cards: [
    {
      q: "Pergunta (suporta LaTeX com \\( \\) e \\[ \\])",
      a: "Resposta (suporta LaTeX)",
      raw: "LaTeX puro para copiar no Anki"
    }
  ]
}
```

## Licença

MIT
