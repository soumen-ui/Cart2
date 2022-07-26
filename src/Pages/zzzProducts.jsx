import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function Products() {
  ////	 const [dta, setDta] = useState(null);    //////for non nested json data un coment this & comment below line
  const [dta, setDta] = useState();

  useEffect(() => {
    const fetchDta = async () => {
      const result = await axios(
        ////    "https://jsonplaceholder.typicode.com/posts"  //////for non nested json data un coment this & comment below line
        "https://fakestoreapi.com/products/"
      );

      setDta(result.data);
    };

    fetchDta();
  }, []);

  return (
    <>
      <h1> fetch api with axios in nested deta in josn file start </h1>
      <ul>
        {dta?.map((item) => (
          <li key={item.objectID}>
            <p>{item.points} </p>
            <h1>{item.id} </h1>

            <img src={item.image} alt="pic abc" />
            <p>{item.author} </p>
            <h1>{item.price} </h1>
            <h2>{item.title}</h2>

            <p>{item.name} </p>
            <p>{item.first_name} </p>

            <p>{item.email} </p>
            <Link className="btn btn-info" to={`/details/${item.id}`}>
              {" "}
              View Details
            </Link>

            {/* <a href={item.url}></a> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
