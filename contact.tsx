import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Reborn CCA — 문의 / Contact" },
      { name: "description", content: "Reborn CCA 문의 페이지. 가입 및 협업 문의를 환영합니다." },
      { property: "og:title", content: "Reborn CCA — Contact" },
      { property: "og:description", content: "Get in touch with Reborn CCA." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const t = lang === "ko" ? ko : en;
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} setLang={setLang} active="contact" />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Reborn CCA</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
        <p className="mt-4 text-muted-foreground">{t.subtitle}</p>

        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 space-y-5">
          <Field label={t.name}><input required className="input" type="text" /></Field>
          <Field label={t.email}><input required className="input" type="email" /></Field>
          <Field label={t.message}><textarea required rows={5} className="input resize-none" /></Field>
          <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
            {t.send}
          </button>
          {sent && <p className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">{t.thanks}</p>}
        </form>
      </main>
      <Footer lang={lang} />

      <style>{`
        .input { width: 100%; background: var(--background); color: var(--foreground); border: 1px solid var(--border); border-radius: 0.5rem; padding: 0.65rem 0.85rem; font: inherit; outline: none; transition: border-color .15s, box-shadow .15s; }
        .input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 25%, transparent); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

const ko = { title: "문의하기", subtitle: "Reborn CCA에 가입하거나 협업하고 싶으시다면 아래 양식을 작성해 주세요.", name: "이름", email: "이메일", message: "메시지", send: "보내기", thanks: "메시지가 전송되었습니다. 감사합니다!" };
const en = { title: "Get in touch", subtitle: "Want to join Reborn CCA or collaborate with us? Send us a message.", name: "Name", email: "Email", message: "Message", send: "Send", thanks: "Your message has been sent. Thank you!" };

