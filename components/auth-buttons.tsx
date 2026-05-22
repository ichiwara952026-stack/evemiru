"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export function AuthButtons() {
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    setLoading(false);
    window.location.href = "/";
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={signInWithGoogle}
        disabled={loading}
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50"
      >
        Googleでログイン
      </button>
      <button
        type="button"
        onClick={signOut}
        disabled={loading}
        className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-50"
      >
        ログアウト
      </button>
    </div>
  );
}

