import React, { useEffect, useState } from "react";
import Product from "./Product";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Basket = ({basket, onRemoveFromBasket}) => {
  // const [basket, setBasket] = useState([]);

  // useEffect(() => {
  //   const getBasket = async () => {
  //     const retrievedBasket = await fetchBasket();
  //     setBasket(retrievedBasket);
  //   };

  //   getBasket();
  // }, []);

  // // Fetch basket
  // const fetchBasket = async () => {
  //   const res = await fetch("http://localhost:5000/basket");
  //   const data = await res.json();

  //   return data;
  // };

  // // Remove from basket
  // const removeFromBasket = async (id) => {
  //   const res = await fetch(`http://localhost:5000/basket/${id}`, {
  //     method: "DELETE",
  //   });
    
  //   res.status === 200
  //     ? setBasket(basket.filter((product) => product.id !== id))
  //     : alert("Error Deleting This product");
  // };

  return (
    <>
      {basket.map((product, index) => (
        <Product
          key={index}
          product={product}
          onRemoveFromBasket={onRemoveFromBasket}
        />
      ))}
      <Link className="linkWithoutStyles backButton" to="/">
        <div className="backButtonContent">
          <FaArrowLeft className="arrowRightBack" /> <p>Go Back </p>
        </div>
      </Link>
    </>
  );
};

export default Basket;
