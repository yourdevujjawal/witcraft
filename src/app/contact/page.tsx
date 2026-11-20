import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, GithubIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Witcraft for professional conversations and collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="breadcrumb">Witcraft <span>/</span> Contact</div>
          <h1>Have something<br /><span className="text-signal">in mind?</span></h1>
          <p>For project discussions, professional opportunities, technical conversations or simply to say hello, choose the channel that works best.</p>
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Start a conversation / 001</p>
              <h2 className="mt-6 max-w-md font-display text-4xl leading-tight tracking-editorial sm:text-5xl">Good conversations start with a hello.</h2>
              <p className="mt-6 max-w-md text-sm leading-8 text-muted">Share a little context about what you have in mind. I’ll get back to you as soon as I can.</p>
            </div>
            <div className="border-y border-ink/15">
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center justify-between gap-5 border-b border-ink/15 py-8">
                <span className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full border border-ink/15"><HugeiconsIcon icon={Mail01Icon} size={20}/></span><span><span className="block text-xs text-muted">Email</span><span className="mt-1 block break-all font-display text-xl tracking-tight sm:text-2xl">{siteConfig.email}</span></span></span>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-5 py-8">
                <span className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full border border-ink/15"><HugeiconsIcon icon={GithubIcon} size={20}/></span><span><span className="block text-xs text-muted">GitHub</span><span className="mt-1 block font-display text-xl tracking-tight sm:text-2xl">Explore my code</span></span></span>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
