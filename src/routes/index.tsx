import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reborn CCA — 소개" },
      { name: "description", content: "Reborn CCA 공식 홍보 사이트. 우리의 비전과 활동을 소개합니다." },
      { property: "og:title", content: "Reborn CCA" },
      { property: "og:description", content: "Reborn CCA 공식 홍보 사이트." },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const t = lang === "ko" ? ko : en;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} setLang={setLang} active="about" />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Reborn CCA</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">{t.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t.subtitle}</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img
              src="http://www.seogwipo.tv/news/photo/202506/11621_19849_2437.jpg"
              alt="Reborn CCA"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">{t.caption1}</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img
              src="http://www.seogwipo.tv/news/photo/202506/11621_19849_2437.jpg"
              alt="Reborn CCA activities"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">{t.caption2}</figcaption>
          </figure>
        </section>

        <section className="mt-16 space-y-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-semibold">{t.aboutHeading}</h2>
          <p>{t.aboutBody1}</p>
          <p>{t.aboutBody2}</p>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

const ko = {
  title: "다시 태어나다, Reborn",
  subtitle: "우리는 함께 성장하고, 함께 빛나는 CCA 입니다.",
  caption1: "Reborn CCA 단체 사진",
  caption2: "Reborn CCA 활동 모습",
  aboutHeading: "소개",
  aboutBody1:
    "Reborn은 학생들의 잠재력을 새롭게 깨우는 것을 목표로 하는 CCA(Co-Curricular Activity) 입니다. 우리는 창의성, 협력, 그리고 도전을 핵심 가치로 삼고 있습니다.",
  aboutBody2:
    "다양한 프로젝트와 행사를 통해 멤버 한 명 한 명이 자신만의 색으로 다시 태어날 수 있도록 함께합니다.",
};

const en = {
  title: "Reborn — Rise Again",
  subtitle: "A CCA where we grow together and shine together.",
  caption1: "Reborn CCA group photo",
  caption2: "Reborn CCA activities",
  aboutHeading: "About Us",
  aboutBody1:
    "Reborn is a Co-Curricular Activity dedicated to awakening the hidden potential in every student. Our core values are creativity, collaboration, and courage.",
  aboutBody2:
    "Through diverse projects and events, we help every member rediscover themselves and be reborn in their own unique color.",
};

export function Header({ lang, setLang, active }: { lang: "ko" | "en"; setLang: (l: "ko" | "en") => void; active: "about" | "contact" }) {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Reborn<span className="text-primary">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className={active === "about" ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
            {lang === "ko" ? "소개" : "About"}
          </Link>
          <Link to="/contact" className={active === "contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
            {lang === "ko" ? "문의" : "Contact"}
          </Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="rounded-md border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider hover:bg-accent">
            {lang === "ko" ? "EN" : "한"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: "ko" | "en" }) {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Reborn CCA. {lang === "ko" ? "모든 권리 보유." : "All rights reserved."}
    </footer>
  );
}
