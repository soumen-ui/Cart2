import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const cartFromlocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

function Home() {
  const [cart, setCart] = useState(cartFromlocalStorage);
  const [page, setPage] = useState(PAGE_PRODUCTS);


  useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default Home;
