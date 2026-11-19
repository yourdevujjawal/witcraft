import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
export const metadata:Metadata={title:"Selected work",description:"A selection of product explorations, developer tools and digital experiences from Witcraft."};
export default function WorkPage(){return <><section className="page-hero"><Container><div className="breadcrumb">Witcraft <span>/</span> Selected work</div><h1>Ideas, explored.<br/><span className="text-signal">Work, in progress.</span></h1><p>A selection of projects across product thinking, developer tooling and application engineering. Each one is presented with its current status and context.</p></Container></section><section className="section-pad"><Container><div className="grid gap-x-7 gap-y-14 md:grid-cols-2">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></Container></section></>;}
