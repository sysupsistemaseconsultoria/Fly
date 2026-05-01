# PRD — Flight Deals & Points Optimizer

## 1. Visão Geral

Criar uma plataforma web semelhante ao Skyscanner, com diferencial estratégico:
- Foco em passagens com pontos (milhas).
- Identificação de datas mais baratas no calendário mensal.
- Sugestão de destinos com melhor custo-benefício em pontos.
- Filtro por companhia aérea (principalmente Azul).

**Objetivo principal:** permitir que o usuário maximize o uso de seus pontos e descubra viagens possíveis com poucos pontos disponíveis.

## 2. Problema

Usuários que possuem milhas/pontos:
- Não sabem quando usar.
- Não sabem para onde conseguem viajar com poucos pontos.
- Não conseguem comparar facilmente datas e destinos.
- Ferramentas atuais (ex.: Azul, Smiles) não mostram visão estratégica.

## 3. Objetivos

- Mostrar o menor valor em pontos por dia.
- Exibir calendário mensal com preços (R$ + pontos).
- Permitir busca com datas flexíveis.
- Mostrar destinos possíveis com poucos pontos.
- Permitir filtro por companhia aérea (ex.: Azul).

## 4. Funcionalidades

### 4.1 Busca principal

Campos:
- Origem (input com autocomplete).
- Destino: específico **ou** “Qualquer lugar”.
- Data: fixa **ou** datas flexíveis (checkbox).
- Tipo: ida e volta / só ida.
- Passageiros.

### 4.2 Filtro por companhia

- Azul
- Gol
- Latam
- Todas

> Importante: usuário pode escolher somente Azul para uso estratégico de pontos.

### 4.3 Calendário inteligente (core feature)

Exibição estilo Skyscanner:
- Grid mensal.
- Cada dia mostra preço em R$ e preço em pontos.
- Destaque automático para mais barato do mês e melhor custo-benefício.

Estados visuais:
- Verde → mais barato.
- Amarelo → médio.
- Vermelho → caro.

### 4.4 Modo “Datas flexíveis”

Quando ativado, mostrar:
- Mês mais barato.
- Ranking de meses.
- Mensagens de economia (ex.: “Junho é o mês mais barato”, “Economia de até 32% comparado a julho”).

### 4.5 Modo “Viajar com poucos pontos” (diferencial)

Input:
- Quantidade de pontos disponíveis (ex.: 15.000).

Output:
- Lista de destinos possíveis.
- Ordenação por menor custo em pontos e melhor custo-benefício.

Exemplo:
- Ilhéus → 13.140 pontos.
- Salvador → 9.800 pontos.
- SP → 11.200 pontos.

### 4.6 Comparação dinheiro vs. pontos

Para cada voo, mostrar:
- Valor em R$.
- Valor em pontos.
- Valor por milheiro (R$/1000 pontos).

Classificação:
- Excelente uso.
- Uso médio.
- Ruim (não usar pontos).

### 4.7 Sugestão inteligente de destinos

Se destino = “Qualquer lugar”, retornar:
- Top destinos mais baratos em pontos.
- Top destinos mais baratos em dinheiro.
- Destinos tendência.

### 4.8 Tela de resultados

Lista com:
- Companhia aérea.
- Horários.
- Duração.
- Preço em R$.
- Preço em pontos.
- Badges: “Melhor dia”, “Melhor uso de pontos”.

### 4.9 Alerta de preço

Usuário pode salvar rota e receber alerta quando:
- Pontos caírem.
- Preço em dinheiro baixar.

## 5. Integrações

### 5.1 APIs (a validar)

- Azul (não oficial ou scraping).
- Skyscanner API.
- Amadeus API.
- Duffel API.

Fallback:
- Web scraping (Playwright/Puppeteer).

## 6. Arquitetura

**Frontend:** Next.js, Tailwind, React Query.

**Backend:** Node.js, API Gateway.

**Scraping engine:** Puppeteer / Playwright.

**Banco:** PostgreSQL.

**Cache:** Redis (para preços).

## 7. Algoritmo de ranking

Score base:

```txt
score = (economia_em_reais + economia_em_pontos) / duração
```

Peso maior para:
- Menor quantidade de pontos.
- Melhor valor por milheiro.

## 8. UX/UI

Referências:
- Skyscanner.
- Google Flights.

Elementos obrigatórios:
- Calendário com preços.
- Gráfico de tendência.
- Destaque visual de melhores dias.

## 9. Performance

- Cache de buscas populares.
- Atualização de preços a cada X horas.
- Lazy loading de resultados.

## 10. Monetização futura

- Afiliado (links para compra).
- Plano premium:
  - Alertas avançados.
  - Previsão de preço.
  - Histórico de rotas.

## 11. Roadmap

**MVP:** busca básica, calendário mensal, filtro por companhia.

**V2:** modo poucos pontos, ranking inteligente.

**V3:** alertas e machine learning para previsão.

## 12. Diferencial competitivo

- Foco em milhas (não só dinheiro).
- Descoberta de destinos baseada em pontos.
- Inteligência de uso de milhas.

## 13. Métricas de sucesso

- Taxa de busca.
- Tempo na plataforma.
- Conversão em cliques.
- Rotas salvas.
