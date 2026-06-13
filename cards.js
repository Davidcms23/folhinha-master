const DAYS = [
  {
    label: "Fundamentos",
    topic: "Operadores, séries e medidas",
    tag: "base",
    cards: [
      { q: "Definição e fórmula de cálculo prático da Variância \\(\\text{Var}(X)\\)", a: "\\[\\text{Var}(X)=\\mathbb{E}[(X-\\mathbb{E}(X))^2]=\\mathbb{E}(X^2)-\\mathbb{E}^2(X)\\]", raw: "\\text{Var}(X) = \\mathbb{E}(X^2) - \\mathbb{E}^2(X)" },
      { q: "FGM \\(M_X(t)\\) e Função Característica \\(\\varphi_X(t)\\) em termos de esperança", a: "\\[M_X(t)=\\mathbb{E}(e^{tX})\\quad\\varphi_X(t)=\\mathbb{E}(e^{itX})\\]", raw: "M_X(t)=\\mathbb{E}(e^{tX})" },
      { q: "Definição do quantil \\(x_p\\) e relação com a Mediana", a: "\\[x_p=F^{-1}(p)\\Rightarrow\\text{Med}(X)=x_{1/2}\\]", raw: "x_p = F^{-1}(p)" },
      { q: "Fórmula da Assimetria \\(A(X)\\) via momento central de 3ª ordem", a: "\\[A(X)=\\frac{\\mathbb{E}[(X-\\mathbb{E}(X))^3]}{\\text{Var}(X)^{3/2}}\\]", raw: "A(X) = \\mu_3 / \\sigma^3" },
      { q: "Interpretação: \\(A(X)<0\\), \\(A(X)>0\\), \\(A(X)=0\\)", a: "\\(A<0\\): cauda à esquerda &nbsp;·&nbsp; \\(A>0\\): cauda à direita &nbsp;·&nbsp; \\(A=0\\): simétrica", raw: "A<0: cauda esq | A>0: cauda dir | A=0: simetrica" },
      { q: "Fórmula do excesso de Curtose \\(K(X)\\)", a: "\\[K(X)=\\frac{\\mathbb{E}[(X-\\mathbb{E}(X))^4]}{\\text{Var}(X)^2}-3\\]", raw: "K(X) = \\mu_4/\\sigma^4 - 3" },
      { q: "Classificação: \\(K<0\\), \\(K>0\\), \\(K=0\\)", a: "\\(K<0\\): platicúrtica &nbsp;·&nbsp; \\(K>0\\): leptocúrtica &nbsp;·&nbsp; \\(K=0\\): mesocúrtica", raw: "K<0: plat | K>0: lepto | K=0: meso" },
      { q: "Soma finita de uma P.G.", a: "\\[S=\\frac{a_1(1-q^n)}{1-q}\\]", raw: "S = a_1(1-q^n)/(1-q)" },
      { q: "Soma infinita de uma P.G. convergente \\((|q|<1)\\)", a: "\\[S=\\frac{a_1}{1-q}\\]", raw: "S = a_1/(1-q)" },
      { q: "Resultado de \\(\\sum_{i=1}^n i^2\\)", a: "\\[\\sum_{i=1}^n i^2=\\frac{n(n+1)(2n+1)}{6}\\]", raw: "\\sum_{i=1}^n i^2 = n(n+1)(2n+1)/6" }
    ]
  }
];
