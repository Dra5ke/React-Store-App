import React from "react";
import Product from "./Product";

const ProductList = ({ products, basket, onAddToBasket }) => {
  const basketCountForProducts = basket.reduce((acc, product) => {
    const existingItem = acc.find((item) => item.id === product.productId);
    if (existingItem) {
      existingItem.count++;
    } else {
      acc.push({ id: product.productId, count: 1 });
    }
    return acc;
  }, []);

  return (
    <>
      {products.map((product, index) => {
        const basketCount = basketCountForProducts.find(
          (item) => item.id === product.id
        );

        return (
          <Product
            key={index}
            product={product}
            onAddToBasket={onAddToBasket}
            basketCount={basketCount ? basketCount.count : 0}
          />
        );
      })}
    </>
  );
};

export default ProductList;
