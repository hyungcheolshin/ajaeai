/**
 * Header: 고정 상단 네비게이션, CTA 버튼
 */
"use client";

import { FC, useState, useEffect } from "react";

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold tracking-tight text-slate-900">
          AX · 클라우드 · AI 컨설팅
        </span>
        <button
          onClick={scrollToContact}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          무료 상담 신청
        </button>
      </div>
    </header>
  );
};
