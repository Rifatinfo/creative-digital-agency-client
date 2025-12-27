import jwt, { JwtPayload } from 'jsonwebtoken';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


type UserRole = "ADMIN" | "CLIENT";

type RouteConfig = {
    exact: string[],
    patterns: RegExp[]
}

const authRoutes = ["/login", "/register", "/forget-password", "/reset-password"];

const commonProtectedRoutes: RouteConfig = {
    exact: ["/my-profile", "/settings", "/checkout"],
    patterns: []
}

const adminProtectedRoutes: RouteConfig = {
    patterns: [/^\/admin/],
    exact: []
}

const customerProtectedRoutes: RouteConfig = {
    patterns: [/^\/dashboard/],
    exact: []
}

const isAuthRoutes = (pathname: string) => {
    return authRoutes.some((route: string) => route === pathname);
}

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
    if (routes.exact.includes(pathname)) {
        return true;
    }
    return routes.patterns.some((pattern: RegExp) => pattern.test(pathname))
}

const getRouteOwner = (pathname: string): "ADMIN" | "CLIENT" | "COMMON" | null => {
    if (isRouteMatches(pathname, adminProtectedRoutes)) {
        return "ADMIN"
    }
    if (isRouteMatches(pathname, customerProtectedRoutes)) {
        return "CLIENT"
    }
    if (isRouteMatches(pathname, commonProtectedRoutes)) {
        return "COMMON"
    }
    return null;
}

const getDefaultDashboardRoute = (role: UserRole): string => {
    if (role === "ADMIN") {
        return "/admin/dashboard"
    }
    if (role === "CLIENT") {
        return "/dashboard"
    }
    return "/"
}

export async function proxy(request: NextRequest) {
    const cookieStore = await cookies()
    const pathname = request.nextUrl.pathname;

    const accessToken = request.cookies.get("accessToken")?.value || null;

    let userRole: UserRole | null = null;
    // if (accessToken) {
    //     const verifiedToken: JwtPayload | string = jwt.verify(accessToken, process.env.JWT_SECRET as string);

    //     if (typeof verifiedToken === "string") {
    //         cookieStore.delete("accessToken");
    //         cookieStore.delete("refreshToken");
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }

    //     userRole = verifiedToken.role;
    // }

    if (accessToken) {
        try {
            // Verify the token
            const verifiedToken = jwt.verify(
                accessToken,
                process.env.JWT_SECRET as string
            ) as JwtPayload;

            userRole = verifiedToken.role as UserRole;
        } catch (error) {
            // If signature is invalid or token is expired, it comes here
            console.error("JWT Error:", error);

            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete("accessToken");
            response.cookies.delete("refreshToken");
            return response;
        }
    }

    // if (accessToken) {
    //     try {
    //         const decoded = jwt.verify(
    //             accessToken,
    //             process.env.JWT_SECRET!
    //         ) as JwtPayload;

    //         userRole = decoded.role as UserRole;

    //     } catch {
    //         cookieStore.delete("accessToken");
    //         cookieStore.delete("refreshToken");

    //         return NextResponse.redirect(
    //             new URL("/login", request.url)
    //         );
    //     }
    // }

    const routerOwner = getRouteOwner(pathname);


    const isAuth = isAuthRoutes(pathname)

    // Rule 1 : User is logged in and trying to access auth route. Redirect to default dashboard
    if (accessToken && isAuth) {
        return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url))
    }


    // Rule 2 : User is trying to access open public route
    if (routerOwner === null) {
        return NextResponse.next();
    }

    if (!accessToken) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    if (routerOwner === "COMMON") {
        return NextResponse.next();
    }
    if (routerOwner === "ADMIN" || routerOwner === "CLIENT") {
        if (userRole !== routerOwner) {
            return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url))
        }
        return NextResponse.next();
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
}