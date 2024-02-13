import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Cookie from './lib/cookies'

export function middleware(request: NextRequest) {
  const cookies = Cookie()
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/dashboard/login' || path === '/dashboard/create-account'

  const token = cookies.accessToken.get()
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/dashboard/login', request.nextUrl))
  }
}

export const config = {
  matcher: ['/', '/dashboard']
}
