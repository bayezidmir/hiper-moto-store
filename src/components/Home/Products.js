import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="mx-auto container my-12">
      <h2 className="text-4xl text-neutral font-semibold mb-5 ">
        Available Products
      </h2>
      <hr />
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 mt-5">
        {products.map((product) => (
          <Product key={product.id} productInfo={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
