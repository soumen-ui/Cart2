import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const [quantity, setquantity] = useState(0);

  const handlr = () => {
    setquantity(quantity + 1);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));

    toast.warning(" Added to cart ", {
      position: "top-center"
    });
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="cart_product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <br />
            {quantity}
            <button
              onClick={(e) => setQuantity(product, parseInt(e.target.value))}
            >
              {" "}
              aaaa
            </button>

            <br />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
