import React from "react";

const Product = ({ data, onAddToCartClicked }) => {
  return (
    <button
      onClick={() => {
        onAddToCartClicked(data);
      }}
    >
      {data.title}
    </button>
  );
};

export default Product;
