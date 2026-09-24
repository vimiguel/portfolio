// Define o formato de cada case (os arquivos .md em src/content/cases).
// Se você adicionar um campo novo no topo de um case, declare ele aqui.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    titulo: z.string(),
    empresa: z.string(),
    periodo: z.string().optional(),
    papel: z.string(),
    resumo: z.string(),
    logo: z.string().optional(), // caminho em /public, ex.: /logos/tim.png
    destaque: z.boolean().default(false), // aparece na home?
    ordem: z.number().default(99), // menor número = aparece primeiro
    tags: z.array(z.string()).default([]),
    metricas: z
      .array(z.object({ valor: z.string(), rotulo: z.string() }))
      .default([]),
    materiais: z
      .array(z.object({ titulo: z.string(), url: z.string().optional() }))
      .default([]),
  }),
});

export const collections = { cases };
