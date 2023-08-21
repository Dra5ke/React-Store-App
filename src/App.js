import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const retrievedProducts = await fetchProducts();
      setProducts(retrievedProducts);
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getBasket = async () => {
      const retrievedBasket = await fetchBasket();
      setBasket(retrievedBasket);
    };

    getBasket();
  }, []);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    return data;
  };

  // Add To Basket
  const addToBasket = async (product) => {
    const productId = product.id;
    const basketItem = {
      ...product,
      productId: productId,
      id: Math.floor(Math.random() * 10000) + 1,
    };
    const res = await fetch("http://localhost:5000/basket", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(basketItem),
    });

    const data = await res.json();

    setBasket([...basket, data]);
  };

  // Fetch basket
  const fetchBasket = async () => {
    const res = await fetch("http://localhost:5000/basket");
    const data = await res.json();

    return data;
  };

  // Remove from basket
  const removeFromBasket = async (id) => {
    const res = await fetch(`http://localhost:5000/basket/${id}`, {
      method: "DELETE",
    });

    res.status === 200
      ? setBasket(basket.filter((product) => product.id !== id))
      : alert("Error Deleting This product");
  };

  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Stefan's Electronics Store</h1>
          <Link className="linkWithoutStyles" to="/basket">
            <span style={{ textDecoration: "none" }}>
              <FaShoppingBasket className="shoppingBasket" />
            </span>
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {products.length > 0 ? (
                  <ProductList
                    products={products}
                    basket={basket}
                    onAddToBasket={addToBasket}
                  />
                ) : (
                  "No products available"
                )}
              </>
            }
          ></Route>
          <Route
            path="/basket"
            element={
              <Basket basket={basket} onRemoveFromBasket={removeFromBasket} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
