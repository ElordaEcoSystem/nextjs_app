import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { STRAPI_CACHE_TAG } from "@/app/[locale]/needed/services";

// Webhook Strapi (Settings → Webhooks): POST https://<сайт>/api/revalidate
// с заголовком Authorization: Bearer <REVALIDATE_SECRET>, события Entry и Media.
export async function POST(request) {
  const secret = process.env.REVALIDATE_SECRET;
  const auth = request.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidateTag(STRAPI_CACHE_TAG);
  return NextResponse.json({ ok: true, revalidated: STRAPI_CACHE_TAG });
}
