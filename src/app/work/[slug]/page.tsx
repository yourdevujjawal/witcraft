import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { ProjectArtwork } from "@/components/project-artwork";
import { projects } from "@/lib/projects";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return projects.map(project=>({slug:project.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const project=projects.find(item=>item.slug===slug);return project?{title:project.name,description:project.summary}:{};}
export default async function ProjectPage({params}:Props){
 const {slug}=await params;const project=projects.find(item=>item.slug===slug);if(!project)notFound();
 return <><section className="page-hero"><Container><div className="breadcrumb"><Link href="/work">Selected work</Link><span>/</span>{project.name}</div><p className="eyebrow mt-12 text-signal">{project.eyebrow}</p><h1>{project.name}<span className="text-signal">.</span></h1><p>{project.description}</p></Container></section><section className="bg-paper py-14 sm:py-20"><Container>
 <ProjectArtwork project={project} large/><p className="legal-note mt-6">The visual above is illustrative portfolio artwork, not a screenshot of a live production interface.</p><dl className="case-meta mt-12"><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div></dl>
 <article className="case-copy"><h2>The challenge</h2><p>{project.challenge}</p><h2>The approach</h2><ul>{project.approach.map(item=><li key={item}>{item}</li>)}</ul><h2>Context and notes</h2><ul>{project.notes.map(item=><li key={item}>{item}</li>)}</ul>
 {project.links?.length?<div className="mt-10 flex flex-wrap gap-5">{project.links.map(link=><a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-link">{link.label} <ArrowUpRight size={16}/></a>)}</div>:null}</article>
 <div className="mt-20 border-t border-ink/15 pt-7"><Link href="/work" className="text-link"><ArrowLeft size={16}/> Back to selected work</Link></div>
 </Container></section></>;
}
