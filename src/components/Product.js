import { Truncate } from "@primer/react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

const Product = ({ product, onAddToBasket, onRemoveFromBasket }) => {
  return (
    <div className="product">
      <h3>
        <Truncate inline expandable maxWidth={400} title={product.name}>
          {product.name}
        </Truncate>
      </h3>
      <div className="productFooter">
        <span className="price">
          DKK {product.price} {}
        </span>
        {onAddToBasket ? (
          <FaShoppingCart
            className="shoppingCart"
            onClick={() => onAddToBasket(product)}
          />
        ) : (
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onRemoveFromBasket(product.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
