import React, { useState } from "react";
import { useEffect } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <Cosmetic key={product._id} products={product} />
      ))}
    </div>
  );
};

export default Cosmetics;
