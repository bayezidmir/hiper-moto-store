import React from "react";

const Product = ({ productInfo }) => {
  const { name, price, description, img } = productInfo;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span>Min Order Quantity:</span>{" "}
          <span className="font-semibold">500 Pieces</span>{" "}
        </p>
        <p>
          <span>Available Quantity:</span>{" "}
          <span className="font-semibold">2000 Pieces</span>{" "}
        </p>

        <p>{description}</p>
        <p className="text-lg font-semibold">
          Price: <span className="font-bold">{price}/ unit</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
