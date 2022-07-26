import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const loadUser = async () => {
      //const res = await axios.get(`http://localhost:3003/users/${id}`);
      // https://fakestoreapi.com/products

      // const res = await axios.get(`http://localhost:4000/users/${id}`);

      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setItem(res.data);
    };

    loadUser();
  }, []);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {item.id}</h1>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 text-center">
            <img className="img-fluid" src={item.image} alt="abcdgh" />
          </div>

          <div className="col-md-6 col-12">
            <h3 className="list-group-item">
              <strong className="text-success"> Name:</strong> {item.title}
            </h3>

            <h1 className="list-group-item">
              <strong> Price</strong> {item.price}
            </h1>
            <div className="list-group-item">
              <h3 className="list-group-item">
                <strong> Description :</strong>
              </h3>
              {item.description}
            </div>

            {/* <div className="list-group-item">phone: {user.phone}</div>
  <div className="list-group-item">website: {user.website}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
