import type { Metadata } from "next";

import "./globals.css";

import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";

import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/footer";


export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();

  return {
    title: metadata?.data?.title ?? "Epic Next Course",
    description: metadata?.data?.description ?? "Epic Next Course",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const globalData = await getGlobalData();
  
  return (
    <html lang="en">
      <body>
        <Header data={globalData.data.header} />
        {children}
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}