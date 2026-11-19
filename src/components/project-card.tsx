import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectArtwork } from "@/components/project-artwork";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card group">
      <Link href={`/work/${project.slug}`} className="block" aria-label={`View ${project.name} case study`}>
        <ProjectArtwork project={project} />
        <div className="mt-5 flex items-start justify-between gap-5">
          <div>
            <p className="eyebrow text-muted">{project.eyebrow}</p>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.045em] sm:text-3xl">{project.name}</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">{project.summary}</p>
          </div>
          <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-ink/15 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <ArrowUpRight size={17} />
          </span>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="status-pill">{project.status}</span>
          {project.stack.slice(0, 3).map((item) => <span className="tech-pill" key={item}>{item}</span>)}
        </div>
      </Link>
    </article>
  );
}
