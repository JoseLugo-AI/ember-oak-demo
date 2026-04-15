import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <StorySection />
        <MenuSection />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
