import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const HOME_GARDEN = "home and garden";
const UTILITY = "utility";

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      id: 1,
      category: UTILITY,
      name: "A Battery",
      cost: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },

    {
      id: 2,
      category: UTILITY,
      name: "AA Battery",
      cost: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc"
    },

    {
      id: 3,
      category: UTILITY,
      name: "AAA Battery",
      cost: 4,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
      id: 4,
      category: HOME_GARDEN,
      name: "Blanket 1",
      cost: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc"
    },

    {
      id: 5,
      category: HOME_GARDEN,
      name: "Blanket 2",
      cost: 20,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    },
    {
      id: 6,
      category: HOME_GARDEN,
      name: "Blanket 3",
      cost: 25,
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
    },
    {
      id: 7,
      category: HOME_GARDEN,
      name: "Blanket 4",
      cost: 30,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc"
    },
    {
      id: 8,
      category: HOME_GARDEN,
      name: "Blanket 5",
      cost: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc"
    }
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    // let itemInCart = newCart.find((item) => product.name === item.name);
    let itemInCart = newCart.find((item) => product.id === item.id);

    if (itemInCart) {
      // itemInCart.quantity++;
      itemInCart.quantity + 0;
      // var y = document.querySelector(".cc");
      // e.target.classList.toggle("active")
      // y.classList.toggle("active");

      // y.classList.add("active");

      // alert("you have alreaded aded!");

      toast.info("  Product Alrady aded", {
        position: "top-right"
      });
    } else {
      itemInCart = {
        ...product,
        quantity: 1
      };
      newCart.push(itemInCart);
      toast.success(" Added to cart ", {
        position: "top-center"
      });
      // alert("Added to cart!");
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        {/* {getProductsInCategory().map((product, idx) => ( */}
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <br />

            <button className="cc" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <Link className="btn btn-info" to={`/details/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
