import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import FullBleedPhoto from "@/components/FullBleedPhoto";
import StorySection from "@/components/StorySection";
import InThePress from "@/components/InThePress";
import FoodPlates from "@/components/FoodPlates";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <FullBleedPhoto
          src="/photo-dining-room.png"
          alt="Guests dining in the main hall"
          aspect="aspect-[16/9]"
        />
        <StorySection />
        <FullBleedPhoto
          src="/photo-exterior.png"
          alt="Castle exterior at dusk"
          aspect="aspect-[16/9]"
        />
        <InThePress />
        <FoodPlates />
        <FullBleedPhoto
          src="/photo-hall.png"
          alt="Grand dining hall at night"
          aspect="aspect-[16/9]"
        />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
