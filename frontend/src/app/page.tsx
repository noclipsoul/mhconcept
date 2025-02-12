
import { getHomePageData } from "@/data/loaders";
import { HeroSection } from "@/components/custom/hero-section";
import { FeatureSection } from "@/components/custom/FeaturesSection";
import { About } from "@/components/custom/About";
import { Contact } from "@/components/custom/contact";
import { Partner } from "@/components/custom/Partners";
import { Reference } from "@/components/custom/references";
import { Project } from "@/components/custom/Projects";
import { Location } from "@/components/custom/Location";
const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.about": About,

  "layout.partnership": Partner,
 
  "layout.features-section": FeatureSection,
  "layout.projects": Project,
  "layout.nos-references": Reference,
 "layout.location": Location,
  "layout.contact":Contact,

};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}



export default async function Home() {
  const strapiData = await getHomePageData();



  const { blocks } = strapiData.data;

if (!blocks) {
  return <div> no blocks found</div>
  
}



  return (
    <main>
   {blocks.map((block:any)=>blockRenderer(block))}
    </main>
  );}