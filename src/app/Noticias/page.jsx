import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Map from "@/components/Map";
import Hero from "@/components/Noticias/Hero";

import LayoutMaxWith from "@/layouts/LayoutMaxWith";

export default function Autenticacion() {
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
