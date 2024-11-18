import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // If the pathname already includes a locale, continue
  if (pathname.startsWith("/en") || pathname.startsWith("/es")) {
    return;
  }

  // Redirect to default locale if not present
  const defaultLocale = "en";
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

// Configure locales to include in middleware
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // Match all routes except specific ones
};
