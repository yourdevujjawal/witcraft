import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";
import { capabilities } from "@/lib/capabilities";

export function SelectedWork() {
  return <section className="section-pad bg-paper"><Container>
    <SectionHeading index="01" label="Selected work" title="A few things taking shape." description="Different problems, different disciplines. A shared belief that the details are where good work happens." />
    <div className="mt-14 grid gap-x-7 gap-y-14 md:grid-cols-2">{featuredProjects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div>
    <div className="mt-14 flex justify-end"><Link href="/work" className="text-link">View all work <ArrowUpRight size={16}/></Link></div>
  </Container></section>;
}
export function CapabilitiesPreview() {
  return <section className="section-pad bg-[#E9E7DE]"><Container>
    <SectionHeading index="02" label="Areas of focus" title="From first principles to the final pixel." description="A snapshot of the disciplines explored through the work. These are areas of practice, not an invitation to commission services."/>
    <div className="capability-list mt-14">{capabilities.map(item=><div className="capability-row" key={item.number}><span className="capability-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="capability-arrow"><MoveUpRight size={18}/></span></div>)}</div>
    <div className="mt-10 flex justify-end"><Link href="/capabilities" className="text-link">Explore capabilities <ArrowUpRight size={16}/></Link></div>
  </Container></section>;
}
export function PhilosophySection() {
  return <section className="philosophy-section"><Container><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
    <div><span className="eyebrow text-signal">03 / The Witcraft point of view</span><div className="philosophy-stamp mt-12">W<span>.</span></div></div>
    <div><h2 className="font-display text-4xl font-medium leading-[1.08] tracking-editorial text-paper sm:text-6xl">Good engineering is a form of <span className="text-signal">good thinking.</span></h2><p className="mt-8 max-w-2xl text-base leading-8 text-paper/65">A great digital product is more than a collection of attractive screens. It is a system of decisions — how information is organised, how interactions behave, how performance is maintained and how every detail contributes to the experience.</p><Link href="/about" className="footer-link mt-9 inline-flex">A little more about the approach <ArrowUpRight size={16}/></Link></div>
  </div></Container></section>;
}
export function ProcessSection() {
  const steps=[["01","Understand","Start with the problem, the people and the context."],["02","Shape","Give the information and experience a clear structure."],["03","Engineer","Build with care, clarity and maintainability in mind."],["04","Refine","Test the details and make the whole feel coherent."]];
  return <section className="section-pad bg-paper"><Container><SectionHeading index="04" label="A considered process" title="Clarity at every step."/><div className="process-grid mt-14">{steps.map(([n,t,d])=><div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></Container></section>;
}
