import Servicio from "./components/servicio";

export default function Servicios() {
  return (
    <section id="servicios" className="w-full gap-y-6 px-16 lg:px-56 scroll-mt-16 text-center text-black">
      <h4 className="font-bold text-[#FFCA3A] text-shadow-xl">Nuestros servicios</h4>
      <h2 className="font-bold text-4xl mb-12">Conocé nuestros servicios</h2>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-y-8 gap-x-6 mb-8 items-start">
        <Servicio title="Autos" service="Grúas y remolques"/>

        <Servicio title="Camionetas" service="Grúas y remolques"/>

        <Servicio title="Motos" service="Grúas"/>

        <Servicio title="Utilitarios" service="Grúas y remolques"/>

        <Servicio title="Máquinas Agrícolas" service="Grúas y remolques"/>
      </div>

      <p className="text-gray-500 text-lg">Todos nuestros servicios llegan a todo el país, tanto en casos de imprevistos como para los traslados programados a las 24hs del dia.</p>
    </section>
  );
}