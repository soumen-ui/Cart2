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
      <h1> This is in Product page </h1>
      <ul>
        {dta?.map((item) => (
          <li key={item.objectID}>
            <p>{item.points} </p>
            <p>{item.id} </p>

            <img className="img-fluid" src={item.image} alt="pic abc" />
            <p>{item.author} </p>
            <h2>{item.price} </h2>
            <h2>{item.name} </h2>

            <p>{item.first_name} </p>

            <p>{item.email} </p>

            <a href={item.url}>{item.title}</a>

            <p>
              {" "}
              <Link className="btn btn-info" to={`/details/${item.id}`}>
                {" "}
                View Details
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
