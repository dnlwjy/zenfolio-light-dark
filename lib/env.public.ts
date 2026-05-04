import { z } from 'zod'

const publicEnvSchema = z.object({
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1, 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY is required'),
})

const parsed = publicEnvSchema.safeParse({
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
})

if (!parsed.success) {
  const details = parsed.error.issues
    .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
    .join('; ')
  throw new Error(`Public environment variables are invalid: ${details}`)
}

export const envPublic = parsed.data