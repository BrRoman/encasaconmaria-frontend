import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import mariaImg from "../static/img/maria.png";
import rosario from "../static/img/rosario.png";
import jabon from "../static/img/jabon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center">
      <img
        src={mariaImg}
        alt="Virgen María"
        style={{ marginTop: "50px" }}
        className="w-1/2 md:w-1/4 img-fluid"
      />
      <h1>En casa con María</h1>
      <h2>Tienda cristiana de productos naturales</h2>

      <div
        id="menu"
        className="flex flex-col items-start gap-8 md:flex-row md:flex-wrap md:justify-center my-5"
      >
        <Link to="/about">
          <div>
            <FontAwesomeIcon
              icon="fa-solid fa-person-circle-question"
              size="2x"
            />
            <span>¿Quienes somos?</span>
          </div>
        </Link>

        <Link to="/products">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-basket-shopping" size="2x" />
            <span>Tienda</span>
          </div>
        </Link>

        <Link to="/contact">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-pen-nib" size="2x" />
            <span>Contáctanos</span>
          </div>
        </Link>
      </div>

      <div id="categories">
        <div className="flex flex-col md:flex-row gap-8 my-8">
          <img
            src={rosario}
            alt="Foto rosario"
            className="w-full md:rounded-md img-fluid"
          />

          <div>
            <h2>Nuestros rosarios</h2>
            <div className="text">
              Todos nuestros rosarios son fabricados a mano siguiendo métodos
              tradicionales en uso en la Iglesia católica.
              <br />
              Trabajamos en un ambiente de ascesis, de oración y de paz.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 my-8">
          <img
            src={jabon}
            alt="Foto jabón"
            className="w-full md:rounded-md img-fluid"
          />

          <div>
            <h2>Nuestros jabones</h2>
            <div className="text">
              Nuestros jabones son 100% naturales, fabricados con pura glicerina
              y ingredientes de origen natural recogidos en la naturaleza de
              Dios. Garantizados sin pesticidas ni colorantes.
              <br />
              Los jabones son disponibles o en forma redonda (65mm diametro) o
              en forma normal (90 x 55 mm).
            </div>
          </div>
        </div>

        <button className="btn btn-white">
          <Link to="/products">Ver los productos</Link>
        </button>
      </div>
    </div>
  );
}
