import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Rates from "@/components/Rates";
import Testimonials from "@/components/Testimonials";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <Products />
      <Features />
      <Rates />
      <Testimonials />
      <MobileApp />
      <Footer />
    </main>
  );
}
