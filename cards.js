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
  },
  {
    label: "Bernoulli &amp; Binomial",
    topic: "Distribuições discretas fundamentais",
    tag: "discreta",
    cards: [
      { q: "Equivalência \\(Bin(1,p)\\Leftrightarrow Bernoulli(p)\\)", a: "\\[X\\sim Bin(1,p)\\Leftrightarrow X\\sim Bernoulli(p)\\]", raw: "Bin(1,p) <=> Bernoulli(p)" },
      { q: "Função de probabilidade de \\(Bin(n,p)\\)", a: "\\[\\mathbb{P}(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}\\]", raw: "P(X=x) = C(n,x) p^x (1-p)^{n-x}" },
      { q: "Esperança de \\(Bin(n,p)\\)", a: "\\[\\mathbb{E}(X)=np\\]", raw: "\\mathbb{E}(X) = np" },
      { q: "Variância de \\(Bin(n,p)\\)", a: "\\[\\text{Var}(X)=np(1-p)\\]", raw: "\\text{Var}(X) = np(1-p)" },
      { q: "FGM de \\(Bin(n,p)\\)", a: "\\[M_X(t)=(pe^t+1-p)^n\\]", raw: "M_X(t) = (pe^t + 1-p)^n" },
      { q: "Assimetria de \\(Bin(n,p)\\)", a: "\\[A(X)=\\frac{1-2p}{\\sqrt{np(1-p)}}\\]", raw: "A(X) = (1-2p)/\\sqrt{np(1-p)}" },
      { q: "Curtose de \\(Bin(n,p)\\)", a: "\\[K(X)=\\frac{1-6p(1-p)}{np(1-p)}\\]", raw: "K(X) = (1-6p(1-p))/(np(1-p))" },
      { q: "Moda de \\(Bin(n,p)\\) quando \\((n+1)p\\notin\\mathbb{Z}^+\\)", a: "\\[\\text{Mo}(X)=\\lfloor(n+1)p\\rfloor\\]", raw: "Mo = floor((n+1)p)" },
      { q: "Soma de \\(n\\) variáveis \\(Bernoulli(p)\\) i.i.d.", a: "\\[\\sum_{i=1}^n X_i\\sim Bin(n,p)\\]", raw: "\\sum Bernoulli(p) \\sim Bin(n,p)" },
      { q: "Soma de \\(Bin(n_i,p)\\) independentes com mesmo \\(p\\)", a: "\\[\\sum X_i\\sim Bin\\!\\left(\\sum n_i,p\\right)\\]", raw: "\\sum Bin(n_i,p) \\sim Bin(\\sum n_i, p)" }
    ]
  },
  {
    label: "Uniforme",
    topic: "U(a,b) — contínua e transformações",
    tag: "contínua",
    cards: [
      { q: "FDP de \\(U(a,b)\\)", a: "\\[f(x)=\\frac{1}{b-a}I_{(a,b)}(x)\\]", raw: "f(x) = 1/(b-a)" },
      { q: "FDA de \\(U(a,b)\\)", a: "\\[F(x)=\\frac{x-a}{b-a}\\,I_{[a,b)}(x)+I_{[b,\\infty)}(x)\\]", raw: "F(x) = (x-a)/(b-a)" },
      { q: "Esperança e Mediana de \\(U(a,b)\\)", a: "\\[\\mathbb{E}(X)=\\text{Med}(X)=\\frac{a+b}{2}\\]", raw: "E(X) = Med(X) = (a+b)/2" },
      { q: "Variância de \\(U(a,b)\\)", a: "\\[\\text{Var}(X)=\\frac{(b-a)^2}{12}\\]", raw: "Var(X) = (b-a)^2/12" },
      { q: "Assimetria e Curtose de \\(U(a,b)\\)", a: "\\[A(X)=0\\quad K(X)=-\\frac{6}{5}\\]", raw: "A=0, K=-6/5" },
      { q: "FGM de \\(U(a,b)\\)", a: "\\[M_X(t)=\\frac{e^{tb}-e^{ta}}{t(b-a)},\\;t\\neq 0\\]", raw: "M_X(t) = (e^{tb}-e^{ta})/(t(b-a))" },
      { q: "\\(X\\sim U(0,1)\\): distribuição de \\(Y=-\\ln(X)/\\lambda\\)", a: "\\[Y\\sim Exp(\\lambda)\\]", raw: "-ln(U)/lambda ~ Exp(lambda)" },
      { q: "\\(X\\sim U(0,1)\\): distribuição de \\(Y=X^2\\)", a: "\\[Y\\sim Beta(1/2,1)\\]", raw: "U^2 ~ Beta(1/2, 1)" },
      { q: "\\(X\\sim U(0,1)\\): distribuição de \\(Y=1-X^{1/n}\\)", a: "\\[Y\\sim Beta(1,n)\\]", raw: "1-U^{1/n} ~ Beta(1,n)" },
      { q: "Mínimo e máximo de \\(X_i\\) i.i.d. \\(U(0,1)\\)", a: "\\[X_{(1)}\\sim Beta(1,n)\\quad X_{(n)}\\sim Beta(n,1)\\]", raw: "X_(1)~Beta(1,n), X_(n)~Beta(n,1)" }
    ]
  },
  {
    label: "Exponencial",
    topic: "Exp(λ) — propriedades e relações",
    tag: "contínua",
    cards: [
      { q: "FDP de \\(Exp(\\lambda)\\)", a: "\\[f(x)=\\lambda e^{-\\lambda x}I_{(0,\\infty)}(x)\\]", raw: "f(x) = lambda * e^{-lambda x}" },
      { q: "FDA de \\(Exp(\\lambda)\\)", a: "\\[F(x)=1-e^{-\\lambda x}I_{[0,\\infty)}(x)\\]", raw: "F(x) = 1 - e^{-lambda x}" },
      { q: "Esperança e Variância de \\(Exp(\\lambda)\\)", a: "\\[\\mathbb{E}(X)=\\frac{1}{\\lambda}\\quad\\text{Var}(X)=\\frac{1}{\\lambda^2}\\]", raw: "E=1/lambda, Var=1/lambda^2" },
      { q: "Mediana e Moda de \\(Exp(\\lambda)\\)", a: "\\[\\text{Med}(X)=\\frac{\\ln 2}{\\lambda}\\quad\\text{Mo}(X)=0\\]", raw: "Med=ln2/lambda, Mo=0" },
      { q: "FGM de \\(Exp(\\lambda)\\)", a: "\\[M_X(t)=\\frac{\\lambda}{\\lambda-t},\\;t<\\lambda\\]", raw: "M_X(t) = lambda/(lambda-t)" },
      { q: "Quantil \\(x_p\\) de \\(Exp(\\lambda)\\)", a: "\\[x_p=\\frac{-\\ln(1-p)}{\\lambda}\\]", raw: "x_p = -ln(1-p)/lambda" },
      { q: "Assimetria e Curtose de \\(Exp(\\lambda)\\)", a: "\\[A(X)=2\\quad K(X)=6\\]", raw: "A=2, K=6" },
      { q: "\\(k\\)-ésimo momento de \\(Exp(\\lambda)\\)", a: "\\[\\mathbb{E}(X^k)=\\frac{k!}{\\lambda^k}\\]", raw: "E(X^k) = k!/lambda^k" },
      { q: "Equivalência \\(Exp(\\lambda)\\Leftrightarrow G(1,\\lambda)\\)", a: "\\[Exp(\\lambda)\\Leftrightarrow G(1,\\lambda)\\]", raw: "Exp(lambda) <=> G(1,lambda)" },
      { q: "Mínimo de \\(n\\) \\(Exp(\\lambda)\\) i.i.d. e soma de \\(n\\) \\(Exp(\\lambda)\\)", a: "\\[X_{(1)}\\sim Exp(n\\lambda)\\quad\\sum X_i\\sim G(n,\\lambda)\\]", raw: "X_(1)~Exp(n*lambda), sum~G(n,lambda)" }
    ]
  },
  {
    label: "Normal",
    topic: "N(μ,σ²) — a mais importante",
    tag: "contínua",
    cards: [
      { q: "FDP de \\(N(\\mu,\\sigma^2)\\)", a: "\\[f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\left\\{-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right\\}\\]", raw: "f(x) = 1/(sigma*sqrt(2pi)) * exp{-(x-mu)^2/(2sigma^2)}" },
      { q: "Esperança, Mediana e Moda de \\(N(\\mu,\\sigma^2)\\)", a: "\\[\\mathbb{E}(X)=\\text{Med}(X)=\\text{Mo}(X)=\\mu\\]", raw: "E=Med=Mo=mu" },
      { q: "Variância de \\(N(\\mu,\\sigma^2)\\)", a: "\\[\\text{Var}(X)=\\sigma^2\\]", raw: "Var(X) = sigma^2" },
      { q: "Assimetria e Curtose de \\(N(\\mu,\\sigma^2)\\)", a: "\\[A(X)=K(X)=0\\]", raw: "A=K=0" },
      { q: "FGM de \\(N(\\mu,\\sigma^2)\\)", a: "\\[M_X(t)=e^{\\mu t+\\sigma^2 t^2/2}\\]", raw: "M_X(t) = exp{mu*t + sigma^2*t^2/2}" },
      { q: "Padronização: \\(Y=(X-\\mu)/\\sigma\\) quando \\(X\\sim N(\\mu,\\sigma^2)\\)", a: "\\[Y\\sim N(0,1)\\]", raw: "(X-mu)/sigma ~ N(0,1)" },
      { q: "Combinação linear \\(\\sum a_i X_i\\) com \\(X_i\\sim N(\\mu,\\sigma^2)\\) i.i.d.", a: "\\[\\sum a_iX_i\\sim N\\!\\left(\\mu\\textstyle\\sum a_i,\\,\\sigma^2\\sum a_i^2\\right)\\]", raw: "sum a_i X_i ~ N(mu*sum(a_i), sigma^2*sum(a_i^2))" },
      { q: "Soma dos quadrados de \\(n\\) variáveis \\(N(0,1)\\) i.i.d.", a: "\\[\\sum_{i=1}^n X_i^2\\sim\\chi^2_{(n)}\\]", raw: "sum X_i^2 ~ chi^2(n)" },
      { q: "Razão \\(X_1/X_2\\) com \\(X_i\\sim N(0,1)\\) independentes", a: "\\[Y=X_1/X_2\\sim Ca(0,1)\\]", raw: "N(0,1)/N(0,1) ~ Ca(0,1)" },
      { q: "\\(k\\)-ésimo momento central de \\(N(\\mu,\\sigma^2)\\), \\(k\\) par", a: "\\[\\mathbb{E}[(X-\\mu)^k]=\\frac{\\sigma^k k!}{2^{k/2}(k/2)!}\\]", raw: "E[(X-mu)^k] = sigma^k * k! / (2^{k/2} * (k/2)!)" }
    ]
  },
  {
    label: "Gama &amp; χ²",
    topic: "G(α,β) e Qui-Quadrado",
    tag: "contínua",
    cards: [
      { q: "FDP de \\(G(\\alpha,\\beta)\\)", a: "\\[f(x)=\\frac{\\beta^\\alpha}{\\Gamma(\\alpha)}x^{\\alpha-1}e^{-\\beta x}I_{(0,\\infty)}(x)\\]", raw: "f(x) = beta^alpha/Gamma(alpha) * x^{alpha-1} * e^{-beta x}" },
      { q: "Esperança e Variância de \\(G(\\alpha,\\beta)\\)", a: "\\[\\mathbb{E}(X)=\\frac{\\alpha}{\\beta}\\quad\\text{Var}(X)=\\frac{\\alpha}{\\beta^2}\\]", raw: "E=alpha/beta, Var=alpha/beta^2" },
      { q: "FGM de \\(G(\\alpha,\\beta)\\)", a: "\\[M_X(t)=\\left(\\frac{\\beta}{\\beta-t}\\right)^\\alpha,\\;t<\\beta\\]", raw: "M_X(t) = (beta/(beta-t))^alpha" },
      { q: "Assimetria e Curtose de \\(G(\\alpha,\\beta)\\)", a: "\\[A=\\frac{2}{\\sqrt{\\alpha}}\\quad K=\\frac{6}{\\alpha}\\]", raw: "A=2/sqrt(alpha), K=6/alpha" },
      { q: "Equivalência \\(G(n/2,1/2)\\Leftrightarrow\\chi^2_{(n)}\\)", a: "\\[G\\!\\left(\\tfrac{n}{2},\\tfrac{1}{2}\\right)\\Leftrightarrow\\chi^2_{(n)}\\]", raw: "G(n/2, 1/2) <=> chi^2(n)" },
      { q: "FDP de \\(\\chi^2_{(n)}\\)", a: "\\[f(x)=\\frac{(1/2)^{n/2}}{\\Gamma(n/2)}x^{n/2-1}e^{-x/2}\\]", raw: "f(x) = (1/2)^{n/2}/Gamma(n/2) * x^{n/2-1} * e^{-x/2}" },
      { q: "Esperança e Variância de \\(\\chi^2_{(n)}\\)", a: "\\[\\mathbb{E}(X)=n\\quad\\text{Var}(X)=2n\\]", raw: "E=n, Var=2n" },
      { q: "Soma \\(\\chi^2_{(n_1)}+\\chi^2_{(n_2)}\\) independentes", a: "\\[Z\\sim\\chi^2_{(n_1+n_2)}\\]", raw: "chi^2(n1) + chi^2(n2) ~ chi^2(n1+n2)" },
      { q: "Razão padronizada \\((X_1/n_1)/(X_2/n_2)\\) com \\(X_i\\sim\\chi^2\\)", a: "\\[Y\\sim F(n_1,n_2)\\]", raw: "(chi^2(n1)/n1) / (chi^2(n2)/n2) ~ F(n1,n2)" },
      { q: "\\(k\\)-ésimo momento de \\(G(\\alpha,\\beta)\\)", a: "\\[\\mathbb{E}(X^k)=\\frac{\\Gamma(\\alpha+k)}{\\Gamma(\\alpha)\\beta^k}\\]", raw: "E(X^k) = Gamma(alpha+k) / (Gamma(alpha) * beta^k)" }
    ]
  },
  {
    label: "Beta",
    topic: "Beta(a,b) e distribuição F",
    tag: "contínua",
    cards: [
      { q: "FDP de \\(Beta(a,b)\\)", a: "\\[f(x)=\\frac{1}{B(a,b)}x^{a-1}(1-x)^{b-1}I_{(0,1)}(x)\\]", raw: "f(x) = x^{a-1}(1-x)^{b-1} / B(a,b)" },
      { q: "Esperança e Variância de \\(Beta(a,b)\\)", a: "\\[\\mathbb{E}(X)=\\frac{a}{a+b}\\quad\\text{Var}(X)=\\frac{ab}{(a+b)^2(a+b+1)}\\]", raw: "E=a/(a+b), Var=ab/((a+b)^2(a+b+1))" },
      { q: "Moda de \\(Beta(a,b)\\) para \\(a,b>1\\)", a: "\\[\\text{Mo}(X)=\\frac{a-1}{a+b-2}\\]", raw: "Mo = (a-1)/(a+b-2)" },
      { q: "Assimetria de \\(Beta(a,b)\\)", a: "\\[A(X)=\\frac{2(b-a)\\sqrt{a+b+1}}{(a+b+2)\\sqrt{ab}}\\]", raw: "A = 2(b-a)sqrt(a+b+1) / ((a+b+2)sqrt(ab))" },
      { q: "\\(X\\sim Beta(a,b)\\): distribuição de \\(Y=1-X\\)", a: "\\[Y\\sim Beta(b,a)\\]", raw: "1-X ~ Beta(b,a)" },
      { q: "\\(X\\sim Beta(a,b)\\): distribuição de \\(Y=X/(1-X)\\)", a: "\\[Y\\sim BP(a,b)\\]", raw: "X/(1-X) ~ BP(a,b)" },
      { q: "\\(X\\sim Beta(n/2,m/2)\\): distribuição de \\(Y=mX/[n(1-X)]\\)", a: "\\[Y\\sim F(n,m)\\]", raw: "mX/(n(1-X)) ~ F(n,m)" },
      { q: "\\(X\\sim Beta(a,1)\\): distribuição de \\(Y=-\\ln X\\)", a: "\\[Y\\sim Exp(a)\\]", raw: "-ln(X) ~ Exp(a)  [X ~ Beta(a,1)]" },
      { q: "\\(X_1\\sim G(\\alpha_1,\\beta)\\), \\(X_2\\sim G(\\alpha_2,\\beta)\\) independentes: \\(X_1/(X_1+X_2)\\)", a: "\\[Y\\sim Beta(\\alpha_1,\\alpha_2)\\]", raw: "X1/(X1+X2) ~ Beta(alpha1, alpha2)" },
      { q: "\\(k\\)-ésimo momento de \\(Beta(a,b)\\)", a: "\\[\\mathbb{E}(X^k)=\\frac{\\Gamma(a+b)\\Gamma(a+k)}{\\Gamma(a+b+k)\\Gamma(a)}\\]", raw: "E(X^k) = Gamma(a+b)Gamma(a+k) / (Gamma(a+b+k)Gamma(a))" }
    ]
  },
  {
    label: "Revisão geral",
    topic: "Relações entre distribuições",
    tag: "revisão",
    cards: [
      { q: "\\(X_1-X_2\\) com \\(X_i\\) i.i.d. \\(Exp(\\lambda)\\) resulta em?", a: "\\[Y\\sim La(0,\\lambda)\\]", raw: "Exp - Exp ~ Laplace(0, lambda)" },
      { q: "\\(X\\sim Beta(a,1)\\): \\(-\\ln X\\sim\\)?", a: "\\[Y\\sim Exp(a)\\]", raw: "-ln(Beta(a,1)) ~ Exp(a)" },
      { q: "\\(G(\\alpha_1,\\beta)\\) e \\(G(\\alpha_2,\\beta)\\) independentes: \\(X_1/(X_1+X_2)\\sim\\)?", a: "\\[Beta(\\alpha_1,\\alpha_2)\\]", raw: "G1/(G1+G2) ~ Beta(alpha1, alpha2)" },
      { q: "Razão padronizada de dois qui-quadrados independentes resulta em?", a: "\\[\\frac{X_1/n_1}{X_2/n_2}\\sim F(n_1,n_2)\\]", raw: "(chi^2(n1)/n1) / (chi^2(n2)/n2) ~ F(n1,n2)" },
      { q: "\\(\\chi^2_{(n_1)}+\\chi^2_{(n_2)}\\sim\\)?", a: "\\[\\chi^2_{(n_1+n_2)}\\]", raw: "chi^2(n1) + chi^2(n2) ~ chi^2(n1+n2)" },
      { q: "Se \\(M_X(t)=\\left(\\frac{\\beta}{\\beta-t}\\right)^\\alpha\\), então \\(X\\sim\\)?", a: "\\[X\\sim G(\\alpha,\\beta)\\]", raw: "M_X = (beta/(beta-t))^alpha => G(alpha,beta)" },
      { q: "Se \\(M_X(t)=e^{\\mu t+\\sigma^2 t^2/2}\\), então \\(X\\sim\\)?", a: "\\[X\\sim N(\\mu,\\sigma^2)\\]", raw: "M_X = exp{mu*t + sigma^2*t^2/2} => N(mu, sigma^2)" },
      { q: "Se \\(M_X(t)=(pe^t+1-p)^n\\), então \\(X\\sim\\)?", a: "\\[X\\sim Bin(n,p)\\]", raw: "M_X = (pe^t+1-p)^n => Bin(n,p)" },
      { q: "Soma de \\(n\\) variáveis \\(Exp(\\lambda)\\) i.i.d. resulta em?", a: "\\[G(n,\\lambda)\\]", raw: "sum Exp(lambda) ~ G(n, lambda)" },
      { q: "Cadeia: \\(N(0,1)^2\\to\\chi^2\\to\\) razão padronizada", a: "\\[\\sum X_i^2\\sim\\chi^2_{(n)}\\;\\longrightarrow\\;\\frac{X_1/n_1}{X_2/n_2}\\sim F(n_1,n_2)\\]", raw: "N(0,1)^2 -> chi^2(n) -> F(n1,n2)" }
    ]
  }
];
