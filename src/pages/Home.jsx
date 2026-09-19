import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import About from "../components/home/About";
import MenuPreview from "../components/home/MenuPreview";
import Specials from "../components/home/Specials";
import Gallery from "../components/home/Gallery";
import Visit from "../components/home/Visit";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <MenuPreview/>
        <Specials />
        <Gallery />
        <Visit />
      </main>

      <Footer />
    </>
  );
}