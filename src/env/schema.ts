import { z } from 'zod';

export const schema = z.object({
  VITE_NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VITE_PORT: z
    .string()
    .default('3000')
    .transform((v) => parseInt(v, 10)),
  VITE_URL: z.string().default('http://localhost'),
});
