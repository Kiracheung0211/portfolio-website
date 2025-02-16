"use client";
import Hero from "@/components/Hero";
import Navigation from "@/components/tab-scroller";
import Work from "@/components/work";
import ContactPage from "@/components/connect";
import Story from "@/components/Story";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 pb-10">
      <Navigation />
      <Hero />
      <Work />
      <Writing />
      <Story />
      <ContactPage />
    </main>
  );
}
