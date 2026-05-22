import { SiteHeader } from "@/components/site-header";
import { mockEvents } from "@/lib/events";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "イベント一覧",
  description: "イベミルに掲載されているイベントを一覧で確認できます。",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="mb-2 text-3xl font-bold">イベント一覧</h1>
        <p className="mb-8 text-sm text-slate-600">カテゴリや地域ごとにイベントを探せます。</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <article key={event.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="mb-1 text-xs text-slate-500">{new Date(event.startAt).toLocaleString("ja-JP")}</p>
              <h2 className="mb-2 text-lg font-bold">{event.title}</h2>
              <p className="mb-3 text-sm text-slate-600">{event.location}</p>
              <p className="mb-4 line-clamp-3 text-sm text-slate-600">{event.description}</p>
              <Link href={`/events/${event.id}`} className="text-sm font-semibold text-indigo-600">
                詳細を見る
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

