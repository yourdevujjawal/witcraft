import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, GithubIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
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
            <div>
              <ContactForm />
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-ink/15 pt-6 text-sm">
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink">
                  <HugeiconsIcon icon={Mail01Icon} size={16}/>{siteConfig.email}
                </a>
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink">
                  <HugeiconsIcon icon={GithubIcon} size={16}/>GitHub
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14}/>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
