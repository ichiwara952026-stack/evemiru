import { SiteHeader } from "@/components/site-header";
import { mockEvents } from "@/lib/events";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6">
        <section className="rounded-2xl bg-indigo-600 px-6 py-12 text-white sm:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide">イベントをもっと探しやすく</p>
          <h1 className="mb-4 text-3xl font-bold sm:text-5xl">イベミルで気になるイベントを見つけよう</h1>
          <p className="max-w-2xl text-sm text-indigo-100 sm:text-base">
            技術系、クリエイティブ、地域イベントまで。開催情報を横断してチェックできます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              イベント一覧を見る
            </Link>
            <Link
              href="/login"
              className="rounded-md border border-indigo-300 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              ログインする
            </Link>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">注目イベント</h2>
            <Link href="/events" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              すべて見る
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {mockEvents.map((event) => (
              <article key={event.id} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-xs text-slate-500">{new Date(event.startAt).toLocaleString("ja-JP")}</p>
                <h3 className="mb-2 text-lg font-bold">{event.title}</h3>
                <p className="mb-4 line-clamp-2 text-sm text-slate-600">{event.description}</p>
                <Link href={`/events/${event.id}`} className="text-sm font-semibold text-indigo-600">
                  詳細を見る
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
