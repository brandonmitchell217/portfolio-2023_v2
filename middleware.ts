import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host");

  // Handle blog subdomain - rewrite to /blog route
  if (
    (hostname === "blog.brandon-mitchell.dev" || 
     hostname === "www.blog.brandon-mitchell.dev") && 
    process.env.NODE_ENV !== 'development'
  ) {
    // Rewrite to /blog while keeping the subdomain URL
    const rewriteUrl = new URL("/blog", url);
    // Preserve the pathname if accessing a specific blog post
    if (url.pathname !== "/") {
      rewriteUrl.pathname = `/blog${url.pathname}`;
    }
    return NextResponse.rewrite(rewriteUrl);
  }
  
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}