import Formulario from "@/components/Formulario";
import Header from "@/components/Header";
import LayoutMaxWith from "@/layouts/LayoutMaxWith";

export default function Autenticacion() {
  return (
    <>
      <Header />
      <LayoutMaxWith style="min-h-[100vh] flex items-center">
        <Formulario />
      </LayoutMaxWith>
    </>
  );
}
