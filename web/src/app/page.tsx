import type { Metadata } from "next";
import { HomeHero } from "../components/sections/home/HomeHero";
import { HomeProducts } from "../components/sections/home/HomeProducts";
import { HomeStats } from "../components/sections/home/HomeStats";
import { HomeSmartERP } from "../components/sections/home/HomeSmartERP";
import { HomeVideoShowcase } from "../components/sections/home/HomeVideoShowcase";
import { HomeServices } from "../components/sections/home/HomeServices";
import { HomeIndustries } from "../components/sections/home/HomeIndustries";
import { HomeWhyChoose } from "../components/sections/home/HomeWhyChoose";
import { HomeTechStack } from "../components/sections/home/HomeTechStack";
import { HomeProcess } from "../components/sections/home/HomeProcess";
import { HomeFAQ } from "../components/sections/home/HomeFAQ";
import { HomeCTA } from "../components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "Engineering the Future of Business Software | Prozync Innovations",
  description:
    "Prozync Innovations builds enterprise ERP platforms, AI solutions, SaaS products, and custom software. Experience SmartERP — your complete business management platform.",
  alternates: { canonical: "https://prozync.com" },
  openGraph: {
    title: "Engineering the Future of Business Software | Prozync Innovations",
    description:
      "Enterprise ERP, AI solutions, SaaS platforms, and custom digital products built to scale.",
    url: "https://prozync.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProducts />
      <HomeStats />
      <HomeSmartERP />
      <HomeVideoShowcase />
      <HomeServices />
      <HomeIndustries />
      <HomeWhyChoose />
      <HomeTechStack />
      <HomeProcess />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
