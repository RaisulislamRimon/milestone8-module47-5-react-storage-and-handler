import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";

const Cosmetic = (props) => {
  const { _id, picture, favoriteFruit, greeting } = props.products;
  const addToCart = (_id) => {
    addToDb(_id);
    // const quantity = localStorage.getItem(_id);
    // console.log("cart added", _id, quantity);
    // localStorage.setItem(_id, 1);
  };
  const removeFromCart = (id) => {
    // console.log("cart removed", id);
    removeFromDb(id);
  };
  return (
    <div>
      <div className="card" style={{ width: "25rem" }}>
        <img
          src={picture}
          className="card-img-top"
          alt="..."
          style={{ width: "500px", border: "none", borderRadius: "10px" }}
        />
        <div className="card-body">
          <h3 className="card-title">{favoriteFruit}</h3>
          <p>product id : {_id}</p>
          <p className="card-text">{greeting}</p>
          <button onClick={() => addToCart(_id)} className="btn btn-primary">
            Add to cart
          </button>
          <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
