import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken');

  if (!token && req.nextUrl.pathname.startsWith('/(private)')) {
    return NextResponse.redirect(new URL('/public/login', req.url));
  }
}

export const config = {
  matcher: ['/(private)'],
};