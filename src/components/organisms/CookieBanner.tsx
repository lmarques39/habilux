"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">
          Utilizamos cookies para melhorar a sua experiência de navegação. Ao continuar, aceita a nossa{" "}
          <Link href="/privacidade" className="underline underline-offset-2 hover:text-blue-500 transition-colors">
            política de privacidade
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 text-sm font-semibold text-stone-600 border border-stone-200 hover:border-stone-400 transition-colors duration-200 cursor-pointer"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
