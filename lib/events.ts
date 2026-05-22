export type EventItem = {
  id: string;
  title: string;
  description: string;
  location: string;
  startAt: string;
  endAt: string;
  organizer: string;
  imageUrl: string;
};

export const mockEvents: EventItem[] = [
  {
    id: "tokyo-tech-meetup-2026",
    title: "Tokyo Tech Meetup 2026",
    description:
      "スタートアップと開発者が集まるテック交流イベント。LTとネットワーキングを実施します。",
    location: "東京都渋谷区",
    startAt: "2026-06-20T10:00:00+09:00",
    endAt: "2026-06-20T18:00:00+09:00",
    organizer: "EveMiru Community",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "osaka-creative-fes",
    title: "Osaka Creative Fes",
    description:
      "デザイン・映像・音楽のクリエイターが集まる体験型フェス。ワークショップも同時開催。",
    location: "大阪府大阪市",
    startAt: "2026-07-12T11:00:00+09:00",
    endAt: "2026-07-12T19:00:00+09:00",
    organizer: "Creative Union",
    imageUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
];

