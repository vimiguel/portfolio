---
titulo: Nestlé Faz BBBem, OCR dentro do bot
empresa: Blip
papel: Product Manager Sênior
resumo: Coloquei o OCR do Google no fluxo conversacional do bot da Nestlé para que clientes entrassem na promoção do BBB fotografando o código de barras do produto.
logo: /logos/nestle.png
ordem: 9
tags: [IA conversacional, Integrações]
metricas:
  - valor: "OCR"
    rotulo: leitura de código de barras no WhatsApp
  - valor: "Nacional"
    rotulo: campanha veiculada no Big Brother Brasil
materiais:
  - titulo: "Release da Nestlé sobre a promoção"
    url: https://www.nestle.com.br/media/pressreleases/allpressreleases/nestle-celebra-participacao-no-big-brother-brasil-com-promocao-nestle-faz-bbbem
  - titulo: "Cobertura em Marcas pelo Mundo"
    url: https://marcaspelomundo.com.br/anunciantes/nestle-comemora-sua-maior-participacao-no-big-brother-brasil/
---

## Objetivo

Permitir que o cliente participasse da promoção **Nestlé Faz BBBem** enviando uma foto do código de barras no WhatsApp, com leitura automática por OCR.

## Contexto

A Nestlé era uma conta global da Blip. O bot já existia. Minha alocação era temporária, com escopo, custo e tempo controlados, para implementar o OCR em um dos menus. A campanha teve alcance nacional por ser veiculada no Big Brother Brasil.

## Como foi construído

- **Treinamento do OCR** para reconhecer o código de barras dos produtos participantes.
- **Jornada conversacional** da campanha com palavras-chave para o fluxo de exceções com IA reconhecer a promoção.
- **Fluxo alternativo:** se a leitura falhasse, o usuário digitava o código, sem quebrar a experiência.
- **Integração:** conversa → fluxo da campanha → foto → extração de texto → registro do cliente → API da Nestlé → sucesso/falha → inclusão na promoção.

## Resultados

- OCR em produção no bot da Nestlé Brasil durante a campanha do BBB.
- Métricas de sucesso definidas com dados: abandono e conversão da skill (conversa iniciada × leitura concluída) e, para o negócio, cadastros e produtos registrados.
- Números internos não podem ser divulgados.

## Meu papel

Liderança indireta de um squad de dados, IA, UX e devs. Fui o ponto focal entre Nestlé e o time interno, junto com CSM e KAM, gerenciando cronograma e escopo contratado × tempo alocado.
