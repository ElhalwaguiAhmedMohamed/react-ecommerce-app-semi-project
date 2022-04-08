import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const URL = "http://localhost:3000/products";
      const fetchedProducts = await axios.get(URL);
      setProducts(fetchedProducts.data);
    }
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="col-md-12 text-center" style={{ color: "skyblue" }}>
          Products
        </h2>
      </div>

      <div className="card-deck d-flex justify-content-center flex-wrap">
        {products.map((product, index) => {
          return <ProductCard productRef={product} key={index.toString()} />;
        })}
      </div>
    </>
  );
}

export default Home;
