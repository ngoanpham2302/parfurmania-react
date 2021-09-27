import React, { useState, createContext, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "App.css";

import Home from "pages/Home";
import ProductList from "pages/ProductList";
import ProductDetail from "pages/ProductDetail";
import ShoppingCart from "pages/ShoppingCart";

import Footer from "components/common/Footer";
import Newsletters from "components/common/Newsletters";
import HeaderContents from "components/common/HeaderContents";

export const CartContext = createContext();

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    let initialQuantity = 0;
    const cartStorage = localStorage.getItem("cart");
    if (!cartStorage) {
      initialQuantity = 0;
    } else {
      [...JSON.parse(cartStorage)].forEach((product) => {
        initialQuantity += product.quantity;
      });
    }
    setCartQuantity(initialQuantity);
  }, []);

  const value = useMemo(() => [cartQuantity, setCartQuantity], [cartQuantity]);

  return (
    <Router>
      <CartContext.Provider value={value}>
        <header id="header">
          <HeaderContents />
        </header>

        <main id="main">
          <Switch>
            <Route path="/product-list/:slug/:id">
              <ProductDetail />
            </Route>

            <Route exact path="/product-list">
              <ProductList />
            </Route>

            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

          <Newsletters />
        </main>

        <Footer />
      </CartContext.Provider>
    </Router>
  );
}

export default App;
