import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import PromoSection from "@/components/PromoSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PromoSection />
        <MenuSection />
        <WhyChooseUs />
        {/* <AboutSection /> */}
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
