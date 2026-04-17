import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isDashboardPage =
    request.nextUrl.pathname.startsWith("/talent") ||
    request.nextUrl.pathname.startsWith("/employer");

  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/talent/:path*", "/employer/:path*"],
};
