
// Add this line at the top of the file to mark it as a client component
"use client";
import { useEffect, useState } from "react";
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
  "layout.contact": Contact,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}

export default function Home() {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const strapiData = await getHomePageData();
        const { blocks } = strapiData.data;

        if (blocks) {
          setBlocks(blocks);
        }
      } catch (error) {
        console.error("Error fetching home page data:", error);
      } finally {
        setLoading(false); // Stop loading when the fetch is complete
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blocks || blocks.length === 0) {
    return <div>No blocks found</div>;
  }

  return (
    <main>
      {blocks.map((block: any) => blockRenderer(block))}
    </main>
  );
}
