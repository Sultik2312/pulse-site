import { redirect } from "next/navigation";

export default function AdminLeadsRedirect({
  searchParams
}: {
  searchParams?: { key?: string };
}) {
  const key = searchParams?.key ?? "";
  const suffix = key ? `?key=${encodeURIComponent(key)}` : "";
  redirect(`/admin${suffix}`);
}