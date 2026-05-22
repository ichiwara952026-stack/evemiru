import { SiteHeader } from "@/components/site-header";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "管理画面",
  description: "イベントの作成・編集・公開管理を行う管理画面です。",
};

export default async function AdminPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="mb-2 text-3xl font-bold">管理画面</h1>
        <p className="mb-8 text-sm text-slate-600">ログイン済みユーザー向けの管理コンソールです。</p>
        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-2 text-lg font-bold">ログイン情報</h2>
          <p className="text-sm text-slate-700">{user.email}</p>
        </section>
      </main>
    </div>
  );
}

