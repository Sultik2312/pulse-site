import { z } from "zod";

const telegramRegex = /^@?[a-zA-Z0-9_]{3,}$/;

const isValidContact = (value: string) => {
  const emailLike = value.includes("@") && value.includes(".");
  const phoneDigits = value.replace(/\D/g, "");
  return emailLike || phoneDigits.length >= 7;
};

export const leadSchema = z.object({
  name: z.string().min(2, "Укажите имя").max(80, "Слишком длинное имя"),
  telegram: z
    .string()
    .min(2, "Укажите Telegram")
    .max(50, "Слишком длинный Telegram")
    .regex(telegramRegex, "Неверный Telegram"),
  contact: z
    .string()
    .min(5, "Укажите телефон или email")
    .max(120, "Слишком длинный контакт")
    .refine(isValidContact, "Укажите телефон или email"),
  clientsCount: z
    .preprocess((value) => {
      if (value === "" || value === null || value === undefined) return undefined;
      const num = Number(value);
      return Number.isFinite(num) ? num : value;
    }, z.number().int().min(1, "Минимум 1").max(1000, "Слишком много").optional()),
  message: z.string().max(1000, "Сообщение слишком длинное").optional(),
  agree: z.boolean().refine((value) => value === true, {
    message: "Нужно согласие"
  }),
  company: z.string().optional()
});

export type LeadInput = z.infer<typeof leadSchema>;