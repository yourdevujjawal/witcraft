"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, GithubIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="grid gap-12 border-b border-paper/15 pb-14 pt-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="eyebrow text-signal">A thought, an idea, a work in progress.</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.04] tracking-editorial text-paper sm:text-6xl">
              Keep making<br /><span className="text-signal">good things.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link href="/contact" className="footer-link">
              Get in touch <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.7} />
            </Link>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="footer-link">
              GitHub <HugeiconsIcon icon={GithubIcon} size={16} strokeWidth={1.7} />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="footer-link">
              {siteConfig.email} <HugeiconsIcon icon={Mail01Icon} size={16} strokeWidth={1.7} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-7 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark inverse compact />
          <p>© {new Date().getFullYear()} Witcraft. Built with care.</p>
          <Link href="/privacy" className="transition hover:text-paper">Privacy</Link>
        </div>
      </Container>
    </footer>
  );
}
