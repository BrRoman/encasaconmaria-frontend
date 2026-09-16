import { useState, useEffect } from "react";
import Menu from "../components/Menu";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://nico3113.pythonanywhere.com/api/products/" +
            (filter !== "all" ? "?filter=" + filter : ""),
        );
        if (!response.ok) {
          throw new Error("Server response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  const Product = ({ product }) => {
    return (
      <div className="flex flex-col items-center bg-white text-gray-700 p-4 rounded shadow">
        <img
          src={`https://nico3113.pythonanywhere.com/static/img/${product.name}.png`}
          alt="Missing file"
          className="md:w-3/4"
        />

        <h5 className="my-3">
          Referencia <b>{product.name}</b>
        </h5>

        <p className="text">{product.description}</p>

        <button className="btn btn-white">
          Precio: <b>{product.price.toString()} €</b>
        </button>
      </div>
    );
  };

  const displayProducts = data.map((product) => {
    return <Product key={product.name} product={product}></Product>;
  });

  return (
    <>
      <Menu />

      <h1>Productos</h1>

      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}

      {data.length > 0 && (
        <>
          <div className="flex flex-col md:flex-row md:items-center mx-4 mb-4">
            <p className="text-left text-white p-2">Filtrar por categoría:</p>
            <select
              className="bg-white text-gray-700 p-2 rounded shadow md:w-1/4"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all"> Todo</option>
              <option value="rosario">Rosarios</option>
              <option value="decenario">Decenarios</option>
              <option value="jabon">Jabones</option>
            </select>
          </div>
          <div id="products" className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {displayProducts}
          </div>
        </>
      )}
    </>
  );
}
