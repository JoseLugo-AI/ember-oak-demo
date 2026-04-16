import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import StorySection from "@/components/StorySection";
import FoodPlatePinned from "@/components/FoodPlatePinned";
import PressAndPlate from "@/components/PressAndPlate";
import FullBleedPhoto from "@/components/FullBleedPhoto";
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
        <FoodPlatePinned
          src="/photo-dessert.png"
          alt="Seasonal strawberry composition, course centerpiece"
        />
        <PressAndPlate />
        <FullBleedPhoto
          src="/photo-hall.png"
          alt="Grand dining hall at night"
          aspect="aspect-[21/9]"
        />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
