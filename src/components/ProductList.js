import React from "react";
import Product from "./Product";

const ProductList = ({products, onAddToBasket}) => {
    return (
        <>
        {products.map((product, index) => (
          <Product key={index} product={product} onAddToBasket={onAddToBasket} />
        ))}
      </>
    )
}

export default ProductList;