import { AuthButtons } from "@/components/auth-buttons";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン",
  description: "イベミルにログインしてイベント管理機能を利用できます。",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-2xl px-4 py-10 sm:px-6">
        <section className="w-full rounded-xl border border-slate-200 bg-white p-6">
          <h1 className="mb-2 text-2xl font-bold">ログイン</h1>
          <p className="mb-6 text-sm text-slate-600">
            Supabase Authを使ってログインします。まずはGoogleログインを有効化しています。
          </p>
          <AuthButtons />
        </section>
      </main>
    </div>
  );
}

