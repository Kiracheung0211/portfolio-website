"use client";
import Hero from "@/app/Hero";
import Navigation from "@/components/tab-scroller";
import Work from "@/app/Work";
import ContactPage from "@/components/connect";
import Story from "@/app/Story";
import Writing from "@/app/Writing";

export default function Home() {
  return (
    <main className="w-screen flex flex-col gap-6 pb-10">
      <Navigation />
      <Hero />
      <div className="flex flex-col justify-center items-center w-full max-sm:px-2 gap-6">
        <Work />
        <Writing />
        <Story />
        <ContactPage />
      </div>
    </main>
  );
}
