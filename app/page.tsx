import {
  Navbar,
  Hero,
  OurStory,
  GenderRevealDetails,
  GiftRegistry,
  Wishes,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <OurStory />
      <GenderRevealDetails />
      <GiftRegistry />
      <Wishes />
      <Footer />
    </main>
  );
}
