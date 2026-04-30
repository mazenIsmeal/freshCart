import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    // ✅ حماية الصفحات الخاصة
    if (pathname.startsWith('/cart') || pathname.startsWith('/orders') || pathname.startsWith('/wishlist')) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    // ✅ منع الدخول لصفحة login لو مسجل دخول
    if (pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/forget-password')) {
        if (token) {
            return NextResponse.redirect(new URL('/', req.url)); // أو dashboard
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/cart', '/orders', '/login', '/register', '/forget-password', '/wishlist']
};