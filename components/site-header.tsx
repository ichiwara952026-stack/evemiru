import Link from "next/link";

const links = [
  { href: "/", label: "トップ" },
  { href: "/events", label: "イベント一覧" },
  { href: "/admin", label: "管理画面" },
  { href: "/login", label: "ログイン" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold text-indigo-600">
          イベミル
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-600 sm:gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-indigo-600">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

