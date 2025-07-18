import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const currentPath = req.nextUrl.pathname;

    const previousPath = req.cookies.get("currentPath")?.value || "";

    const res = NextResponse.next();

    res.cookies.set("previousPath", previousPath, {
        path: "/",
        sameSite: "lax",
    });

    res.cookies.set("currentPath", currentPath, {
        path: "/",
        sameSite: "lax",
    });

    return res;
}

export const config = {
    matcher: [
        "/((?!_next|api|favicon.ico|assets|.*\\.(?:png|jpg|jpeg|svg|webp|gif|ico)).*)",
    ],
};