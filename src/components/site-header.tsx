"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Wordmark } from "@/components/wordmark";
import { Container } from "@/components/container";

const links = [
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="flex h-[82px] items-center justify-between">
        <Wordmark />
        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
          <Link href="/contact" className="header-cta">
            Get in touch <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} strokeWidth={1.7} />
          </Link>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-ink/15 md:hidden"
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={20} strokeWidth={1.7} />
        </button>
      </Container>
      {open && (
        <nav aria-label="Mobile navigation" className="mobile-nav md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Get in touch <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.7} />
          </Link>
        </nav>
      )}
    </header>
  );
}
