import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type AdminPageProps = {
  searchParams?: { key?: string };
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const key = searchParams?.key ?? "";
  const adminKey = process.env.ADMIN_KEY;

  if (!adminKey || key !== adminKey) {
    return (
      <div className="container py-20">
        <h1 className="text-2xl font-semibold text-white">Доступ ограничен</h1>
        <p className="mt-3 text-sm text-muted">Неверный ключ или ключ не задан.</p>
      </div>
    );
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 200
  });

  return (
    <div className="container py-20">
      <h1 className="text-2xl font-semibold text-white">Лиды</h1>
      <p className="mt-2 text-sm text-muted">Последние 200 заявок.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border/70">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-xs uppercase text-muted">
            <tr>
              <th className="px-4 py-3">Дата</th>
              <th className="px-4 py-3">Имя</th>
              <th className="px-4 py-3">Telegram</th>
              <th className="px-4 py-3">Контакт</th>
              <th className="px-4 py-3">Клиенты</th>
              <th className="px-4 py-3">Комментарий</th>
              <th className="px-4 py-3">IP</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-border/70">
                <td className="px-4 py-3 text-muted">
                  {new Date(lead.createdAt).toLocaleString("ru-RU")}
                </td>
                <td className="px-4 py-3 text-white">{lead.name}</td>
                <td className="px-4 py-3 text-white">{lead.telegram}</td>
                <td className="px-4 py-3 text-white">{lead.contact}</td>
                <td className="px-4 py-3 text-white">{lead.clientsCount ?? "—"}</td>
                <td className="px-4 py-3 text-muted">{lead.message ?? "—"}</td>
                <td className="px-4 py-3 text-muted">{lead.ip ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}