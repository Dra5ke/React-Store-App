import React, { useEffect, useState } from "react";
import Product from "./Product";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Basket = ({ basket, onRemoveFromBasket }) => {
  const total = basket.reduce((acc, product) => acc + product.price, 0)
  return (
    <>
      {basket.map((product, index) => (
        <Product
          key={index}
          product={product}
          onRemoveFromBasket={onRemoveFromBasket}
        />
      ))}
      <div className="basketFooter">
        <Link className="linkWithoutStyles backButton" to="/">
        <div className="backButtonContent">
          <FaArrowLeft className="arrowRightBack" /> <p>Go Back </p>
        </div>
      </Link>
      <span className="total">Total: {total} DKK</span>
      </div>
      
    </>
  );
};

export default Basket;
