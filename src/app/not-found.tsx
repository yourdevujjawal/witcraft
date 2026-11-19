import Link from "next/link";
import { Container } from "@/components/container";
export default function NotFound(){return <section className="page-hero min-h-[60vh]"><Container><p className="eyebrow text-signal">404 / Page not found</p><h1>This page took<br/>a wrong turn<span className="text-signal">.</span></h1><p>The page may have moved, or perhaps it never existed.</p><Link href="/" className="button-dark mt-9 inline-flex">Back to home ↗</Link></Container></section>;}
