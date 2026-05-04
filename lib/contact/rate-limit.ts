import { envServer } from '@/lib/env.server'

const WINDOW_MS = envServer.CONTACT_RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
const MAX_REQUESTS = envServer.CONTACT_RATE_LIMIT_MAX_REQUESTS

type Entry = {
  count: number
  windowStart: number
}

const ipBuckets = new Map<string, Entry>()

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  const realIp = request.headers.get('x-real-ip')
  return realIp?.trim() || 'unknown'
}

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now()
  const current = ipBuckets.get(ip)

  if (!current || now - current.windowStart >= WINDOW_MS) {
    ipBuckets.set(ip, { count: 1, windowStart: now })
    return { allowed: true, retryAfterSec: Math.ceil(WINDOW_MS / 1000) }
  }

  if (current.count >= MAX_REQUESTS) {
    const elapsed = now - current.windowStart
    const retryAfterMs = Math.max(WINDOW_MS - elapsed, 0)
    return { allowed: false, retryAfterSec: Math.ceil(retryAfterMs / 1000) }
  }

  current.count += 1
  ipBuckets.set(ip, current)
  return { allowed: true, retryAfterSec: Math.ceil((WINDOW_MS - (now - current.windowStart)) / 1000) }
}