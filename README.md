# Portfólio · Vinícius Miguel

Site pessoal feito com [Astro](https://astro.build). É rápido, não precisa de banco de dados e cada case é um arquivo Markdown.

## Rodar no seu computador

Você precisa do **Node.js 20 ou mais novo** ([nodejs.org](https://nodejs.org), versão LTS).

No VS Code, abra esta pasta e depois abra o terminal (**Terminal → New Terminal**):

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:4321
```

Enquanto o `npm run dev` estiver rodando, tudo o que você salvar aparece na hora no navegador.

Recomendo instalar a extensão **Astro** no VS Code (ela aparece como sugestão ao abrir a pasta).

## Onde mexer

| Quero mudar…                           | Arquivo                               |
| -------------------------------------- | ------------------------------------- |
| Cores, fontes, espaçamentos            | `src/styles/global.css` (topo do arquivo) |
| Textos da home, números, trajetória, links | `src/data/site.ts`                |
| Um case                                | `src/content/cases/<nome>.md`         |
| Estrutura de uma página                | `src/pages/*.astro`                   |
| Header, footer, card, CTA              | `src/components/*.astro`             |
| Logos e imagens                        | `public/logos/` e `public/images/`    |

### Adicionar um case novo

1. Duplique um arquivo em `src/content/cases/` e renomeie (o nome vira a URL: `meu-case.md` → `/cases/meu-case`).
2. Ajuste o cabeçalho (entre os `---`):
   - `destaque: true` → aparece na home
   - `ordem: 3` → posição na lista (menor aparece primeiro)
   - `logo: /logos/arquivo.png` → coloque a imagem em `public/logos/`
   - `metricas` → a primeira aparece no card
3. Escreva o corpo em Markdown (`## Objetivo`, `## Resultados`…).

### Links que ainda faltam

Em `src/data/site.ts`, preencha `linkedin` e `email`. Enquanto estiverem vazios, os botões ficam escondidos.

## Estrutura

```
portfolio-site/
├── public/               arquivos servidos como estão (logos, imagens, favicon)
├── src/
│   ├── content/cases/    um .md por case
│   ├── content.config.ts campos permitidos nos cases
│   ├── data/site.ts      textos e links gerais
│   ├── layouts/          <head>, header e footer comuns
│   ├── components/       blocos reutilizáveis
│   ├── pages/            cada arquivo vira uma página/rota
│   └── styles/           CSS global
└── astro.config.mjs      configuração (domínio do site)
```

## Publicar (grátis)

1. Suba a pasta para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com) ou [netlify.com](https://netlify.com), importe o repositório. O Astro é detectado sozinho (build `npm run build`, pasta `dist`).
3. Quando tiver domínio, atualize `site` em `astro.config.mjs`.

Para testar a versão final localmente: `npm run build` e depois `npm run preview`.
