import { useState, useEffect } from "react";
import Menu from "../components/Menu";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nico3113.pythonanywhere.com/api/products/",
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
  }, []);

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

      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}

      {data.length > 0 && (
        <div id="products" className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {displayProducts}
        </div>
      )}
    </>
  );
}
