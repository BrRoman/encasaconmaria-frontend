import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mariaImg from "../static/img/maria.png";

const pages = [
  {
    id: 1,
    slug: "",
    title: "Inicio",
  },
  {
    id: 2,
    slug: "about",
    title: "¿Quienes somos?",
  },
  {
    id: 3,
    slug: "products",
    title: "Tienda",
  },
  {
    id: 4,
    slug: "contact",
    title: "Contáctanos",
  },
];

const pagesHtml = pages.map((page) => {
  return (
    <li key={page.id} className="text-gray-200 hover:text-white">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to={"/" + page.slug}
      >
        {page.title}
      </NavLink>
    </li>
  );
});

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="menu" className="md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center py-4">
        <NavLink to={"/"}>
          <div className="flex items-center">
            <img
              alt="En casa con María logo"
              src={mariaImg}
              className="h-8 mx-4"
            />

            <p className="m-0 text-2xl">En casa con María</p>
          </div>
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "hidden" : "block md:hidden"}
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" size="2x" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "block md:hidden" : "hidden"}
        >
          <FontAwesomeIcon icon="fa-solid fa-close" size="2x" />
        </button>
      </div>

      <div>
        <nav className={isOpen ? "block" : "hidden md:block md:mr-4"}>
          <ul className="flex-column text-left ml-4 mb-4">{pagesHtml}</ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
