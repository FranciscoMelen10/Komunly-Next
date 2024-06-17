import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Calendario/Hero";
import Map from "@/components/Map";
import LayoutMaxWith from "@/layouts/LayoutMaxWith";

export default function Calendario() {
  return (
    <>
      <Header />
      <LayoutMaxWith>
        <Hero/>
        <Map/>
        <Footer/>
      </LayoutMaxWith>
    </>
  );
}
