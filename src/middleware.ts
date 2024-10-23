import type { NextRequest } from 'next/server';

// import NextAuth from 'next-auth';
import { createI18nMiddleware } from 'next-international/middleware';

// import { authConfig } from './auth.config';

// export default NextAuth(authConfig).auth;

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'pt',
  urlMappingStrategy: 'rewrite',
});

export function middleware(request: NextRequest) {
  const i18Mid = I18nMiddleware(request);
  return i18Mid;
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
