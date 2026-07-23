import { Link, NavLink } from "react-router-dom";

const pages = [
  {
    id: 1,
    slug: "about",
    title: "¿Quienes somos?",
  },
  {
    id: 2,
    slug: "products",
    title: "Productos",
  },
  {
    id: 3,
    slug: "contact",
    title: "Contáctanos",
  },
];

const pagesHtml = pages.map((page) => {
  return (
    <li key={page.id}>
      <NavLink to={"/encasaconmaria/" + page.slug}>{page.title}</NavLink>
    </li>
  );
});

function Menu(props) {
  return (
    <>
      <nav>
        <Link to={"/encasaconmaria/"}>En casa con María</Link>

        <ul>{pagesHtml}</ul>
      </nav>
    </>
  );
}

export default Menu;
