import Estadistica from "@/components/Estadistica";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import Servicio from "@/components/Home/Servicios";
import Map from "@/components/Map";
import LayoutMaxWith from "@/layouts/LayoutMaxWith";

export default function Home() {
  return (
    <>
      <Header />
      <LayoutMaxWith>
        <Hero />
        <Estadistica/>
        <Servicio/>
        <Map/>
        <Footer/>
      </LayoutMaxWith>
    </>
  );
}
