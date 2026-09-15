import { Link, NavLink } from "react-router-dom";

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
    title: "Productos",
  },
  {
    id: 4,
    slug: "contact",
    title: "Contáctanos",
  },
];

const pagesHtml = pages.map((page) => {
  return (
    <li key={page.id} className="text-gray-300 hover:text-white">
      <NavLink to={"/" + page.slug}>{page.title}</NavLink>
    </li>
  );
});

function Menu(props) {
  return (
    <>
      <div className="flex justify-center items-center py-4">
        <nav>
          <ul className="flex space-x-4">
            <li key="0">
              <NavLink to={"/"}>
                <img
                  alt="En casa con María logo"
                  src="/encasaconmaria-frontend/src/static/img/maria.png"
                  className="h-8 w-auto"
                />
              </NavLink>
            </li>
            {pagesHtml}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
