import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ALLOWED_PAGE_METHODS = new Set(["GET", "HEAD"]);

export function proxy(request: NextRequest) {
  if (!ALLOWED_PAGE_METHODS.has(request.method)) {
    return NextResponse.json(
      { error: "Method Not Allowed" },
      {
        status: 405,
        headers: {
          Allow: "GET, HEAD",
          "Cache-Control": "no-store",
        },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
