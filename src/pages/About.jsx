import Menu from "../components/Menu";
import nico_lady from "../static/img/nico_lady.png";

export default function About() {
  return (
    <>
      <Menu />

      <div>
        <h2>¿Quienes somos?</h2>

        <div className="flex flex-col md:flex-row gap-8 my-8 px-4">
          <img
            src={nico_lady}
            alt="Foto"
            className="w-full md:w-1/2 md:rounded-md img-fluid"
          />

          <div className="text">
            Somos una pareja joven, católica, amantes de la naturaleza. Buscamos
            hacer las cosas con amor y vivir honestamente del trabajo de
            nuestras manos, multiplicando la creatividad que Dios ha puesto en
            nosotros. Vivimos en Totana (Murcia), España.
          </div>
        </div>
      </div>
    </>
  );
}
