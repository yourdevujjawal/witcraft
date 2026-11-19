import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-space",display:"swap"});
const ibm=IBM_Plex_Mono({subsets:["latin"],weight:["400","500"],variable:"--font-ibm",display:"swap"});
export const metadata: Metadata={
 metadataBase:new URL(siteConfig.url),title:{default:siteConfig.title,template:"%s | Witcraft"},description:siteConfig.description,
 applicationName:"Witcraft",alternates:{canonical:"/"},openGraph:{type:"website",url:siteConfig.url,siteName:"Witcraft",title:siteConfig.title,description:siteConfig.description},
 twitter:{card:"summary_large_image",title:siteConfig.title,description:siteConfig.description},robots:{index:true,follow:true}
};
export const viewport:Viewport={themeColor:"#171A19",colorScheme:"light"};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" className={`${inter.variable} ${space.variable} ${ibm.variable}`}><body><a href="#main-content" className="skip-link">Skip to content</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>;
}
