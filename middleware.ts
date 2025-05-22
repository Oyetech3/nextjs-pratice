import { NextResponse, NextRequest } from "next/server";

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"])
const isAdminRoute = createRouteMatcher(["/admin(.*)"])

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

    if(isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== "admin") {
        const url = new URL("/", req.url)
        return NextResponse.redirect(url)
    }
  
    if (!userId && !isPublicRoute(req)) {
      return redirectToSignIn();
    }
  
    const res = NextResponse.next();
  
    const theme = req.cookies.get("theme");
    if (!theme) {
      res.cookies.set("theme", "dark");
    }
  
    res.headers.set("custom-header", "custom-value");
  
    return res;
  });
  

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

/* export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url))
    if(request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/photofeed", request.nextUrl))
    }

    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    
    if(!themePreference) {
        response.cookies.set("theme","dark")
    }

    response.headers.set("custom-header", "custom-value")

    return response
} */

//export const config = {
//    matcher: "/profile"
//} 