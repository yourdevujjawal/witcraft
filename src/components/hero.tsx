import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/container";

export function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-grid">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="live-dot" />
              <span className="eyebrow">Independent digital engineering portfolio</span>
            </div>
            <h1 className="hero-title">
              Good ideas
              <br />
              deserve <span className="hero-title-accent">thoughtful</span>
              <br />
              engineering<span className="text-signal">.</span>
            </h1>
            <p className="hero-copy">
              We explore the space where considered design meets careful engineering — creating digital experiences that feel as good as they work.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/work" className="button-dark">
                Explore selected work <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.7} />
              </Link>
              <Link href="/about" className="button-quiet">
                The thinking behind it <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} strokeWidth={1.7} />
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract composition of a digital interface">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-orbit orbit-three" />
            <div className="hero-visual-core">
              <span className="core-mark">w<span>.</span></span>
              <span className="core-caption">IDEAS / MADE / TANGIBLE</span>
            </div>
            <span className="hero-coordinate coordinate-one">19°N 72°E</span>
            <span className="hero-coordinate coordinate-two">FIG. 001 — WITCRAFT</span>
            <span className="hero-visual-arrow"><HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={1.7} /></span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>DESIGN-MINDED</span>
          <span className="hero-bottom-line" />
          <span>ENGINEERING-DRIVEN</span>
          <span className="hero-bottom-line" />
          <span>DETAIL-OBSESSED</span>
        </div>
      </Container>
    </section>
  );
}
