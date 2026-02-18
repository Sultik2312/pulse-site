"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const initialForm = {
  name: "",
  telegram: "",
  contact: "",
  clientsCount: "",
  message: "",
  agree: false,
  company: ""
};

type FieldErrors = Partial<Record<keyof typeof initialForm, string>>;

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string>("");

  const onChange = (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        event.currentTarget.type === "checkbox"
          ? (event.currentTarget as HTMLInputElement).checked
          : event.currentTarget.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setServerMessage("");
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrors({});
    setServerMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          telegram: form.telegram,
          contact: form.contact,
          clientsCount: form.clientsCount,
          message: form.message,
          agree: form.agree,
          company: form.company
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrors(data.errors || {});
        setServerMessage(
          data.message || "Не удалось отправить заявку. Попробуйте еще раз."
        );
        return;
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setServerMessage("Сеть недоступна. Проверьте соединение и попробуйте снова.");
    }
  };

  if (status === "success") {
    return (
      <div className="card h-full">
        <span className="badge">Спасибо!</span>
        <h3 className="mt-4 text-xl font-semibold text-white">
          Напишу в течение 24 часов
        </h3>
        <p className="mt-3 text-sm text-muted">
          Мы обсудим формат пилота и подключим первых клиентов.
        </p>
        <button className="btn-secondary mt-6" type="button" onClick={reset}>
          Отправить еще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h3 className="text-lg font-semibold text-white">Форма заявки</h3>
      <p className="mt-2 text-sm text-muted">
        Заполняется за минуту. Никакого спама — только связь по пилоту.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <label className="label" htmlFor="name">
            Имя
          </label>
          <input
            id="name"
            name="name"
            className="input"
            placeholder="Алексей"
            value={form.name}
            onChange={onChange("name")}
            required
          />
          {errors.name && <p className="text-xs text-danger">{errors.name}</p>}
        </div>

        <div className="grid gap-2">
          <label className="label" htmlFor="telegram">
            Telegram (@username)
          </label>
          <input
            id="telegram"
            name="telegram"
            className="input"
            placeholder="@coach_pulse"
            value={form.telegram}
            onChange={onChange("telegram")}
            required
          />
          {errors.telegram && (
            <p className="text-xs text-danger">{errors.telegram}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="label" htmlFor="contact">
            Телефон или Email
          </label>
          <input
            id="contact"
            name="contact"
            className="input"
            placeholder="+7 999 111-22-33 или hello@example.com"
            value={form.contact}
            onChange={onChange("contact")}
            required
          />
          {errors.contact && (
            <p className="text-xs text-danger">{errors.contact}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="label" htmlFor="clientsCount">
            Кол-во клиентов (опционально)
          </label>
          <input
            id="clientsCount"
            name="clientsCount"
            type="number"
            min={1}
            className="input"
            placeholder="12"
            value={form.clientsCount}
            onChange={onChange("clientsCount")}
          />
          {errors.clientsCount && (
            <p className="text-xs text-danger">{errors.clientsCount}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="label" htmlFor="message">
            Комментарий (опционально)
          </label>
          <textarea
            id="message"
            name="message"
            className="input min-h-[120px] resize-none"
            placeholder="Можно указать, с чем хотите помочь клиентам"
            value={form.message}
            onChange={onChange("message")}
          />
          {errors.message && (
            <p className="text-xs text-danger">{errors.message}</p>
          )}
        </div>

        <label className="flex items-start gap-3 text-xs text-muted">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-border bg-surface/60 text-accent focus:ring-accent/40"
            checked={form.agree}
            onChange={onChange("agree")}
            required
          />
          Я согласен(на) на связь по пилоту и обработку данных
        </label>
        {errors.agree && (
          <p className="text-xs text-danger">{errors.agree}</p>
        )}

        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            className="input"
            value={form.company}
            onChange={onChange("company")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      {status === "error" && (
        <div
          className="mt-4 rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger"
          role="alert"
        >
          {serverMessage}
        </div>
      )}

      <button
        className="btn-primary mt-6 w-full"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Отправляем..." : "Получить доступ"}
      </button>
    </form>
  );
}
