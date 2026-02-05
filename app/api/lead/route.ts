import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (!forwarded) return "";
  return forwarded.split(",")[0]?.trim() ?? "";
};

const normalizeTelegram = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  return trimmed.startsWith("@") ? trimmed : `@${trimmed}`;
};

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rate = await rateLimit(ip, 5, 10 * 60);

  if (!rate.success) {
    return NextResponse.json(
      { success: false, message: "Слишком много запросов. Попробуйте позже." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json(
      { success: false, message: "Некорректные данные." },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0];
      if (field && !errors[field as string]) {
        errors[field as string] = issue.message;
      }
    });

    return NextResponse.json(
      { success: false, message: "Проверьте поля формы.", errors },
      { status: 422 }
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  const name = sanitizeText(parsed.data.name);
  const telegram = sanitizeText(normalizeTelegram(parsed.data.telegram));
  const contact = sanitizeText(parsed.data.contact);
  const message = parsed.data.message ? sanitizeText(parsed.data.message) : undefined;
  const clientsCount = parsed.data.clientsCount;
  const userAgent = request.headers.get("user-agent") ?? undefined;

  await prisma.lead.create({
    data: {
      name,
      telegram,
      contact,
      clientsCount,
      message,
      userAgent,
      ip: ip || undefined
    }
  });

  return NextResponse.json({ success: true });
}