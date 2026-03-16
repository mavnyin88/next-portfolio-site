// import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WorkSection from "./components/worksection";
import CreativeCoding from "./components/creativecoding";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkSection />
      <CreativeCoding />
      <Footer />
    </>
  );
}
