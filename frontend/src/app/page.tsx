
import { getHomePageData } from "@/data/loaders";
import { HeroSection } from "@/components/custom/hero-section";
import { FeatureSection } from "@/components/custom/FeaturesSection";



const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeatureSection,
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