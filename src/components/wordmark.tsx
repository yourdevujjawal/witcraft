import Link from "next/link";

type WordmarkProps = { compact?: boolean; inverse?: boolean };

export function Wordmark({ compact = false, inverse = false }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Witcraft home"
      className={`wordmark inline-flex items-baseline font-display font-bold tracking-[-0.075em] ${inverse ? "text-paper" : "text-ink"}`}
    >
      <span className={compact ? "text-[1.65rem]" : "text-[1.85rem]"}>witcraft</span>
      <span className="ml-[2px] text-signal">.</span>
    </Link>
  );
}
