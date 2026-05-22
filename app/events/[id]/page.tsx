import { SiteHeader } from "@/components/site-header";
import { mockEvents } from "@/lib/events";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const event = mockEvents.find((item) => item.id === params.id);

  if (!event) {
    return { title: "イベントが見つかりません" };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default function EventDetailPage({ params }: Props) {
  const event = mockEvents.find((item) => item.id === params.id);

  if (!event) notFound();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
        <p className="mb-3 text-xs text-slate-500">{new Date(event.startAt).toLocaleString("ja-JP")}</p>
        <h1 className="mb-6 text-3xl font-bold">{event.title}</h1>
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-base font-semibold">イベント情報</h2>
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-slate-500">会場</dt>
              <dd>{event.location}</dd>
            </div>
            <div>
              <dt className="text-slate-500">主催</dt>
              <dd>{event.organizer}</dd>
            </div>
            <div>
              <dt className="text-slate-500">開始</dt>
              <dd>{new Date(event.startAt).toLocaleString("ja-JP")}</dd>
            </div>
            <div>
              <dt className="text-slate-500">終了</dt>
              <dd>{new Date(event.endAt).toLocaleString("ja-JP")}</dd>
            </div>
          </dl>
        </div>
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-base font-semibold">概要</h2>
          <p className="text-sm leading-7 text-slate-700">{event.description}</p>
        </section>
      </main>
    </div>
  );
}

