import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/projects";
export default function sitemap():MetadataRoute.Sitemap{
 const routes=["","/work","/capabilities","/about","/privacy"];
 const fixed=routes.map(route=>({url:`${siteConfig.url}${route}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:route===""?1:.7}));
 const work=projects.map(project=>({url:`${siteConfig.url}/work/${project.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.6}));
 return [...fixed,...work];
}
