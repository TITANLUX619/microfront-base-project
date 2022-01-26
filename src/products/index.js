import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions";
import Product from "./components/Product";

const ProductList = ({ products, onAddToCartClicked }) => {
  console.log(products, onAddToCartClicked);
  return (
    <div>
      <h3>Products</h3>

      {products.map((product) => (
        <Product
          key={product.id}
          data={product}
          onAddToCartClicked={(data) => {
            onAddToCartClicked(data);
          }}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const products = Object.values(state.products);

  return {
    products,
  };
};

export default connect(mapStateToProps, { onAddToCartClicked: addToCart })(
  ProductList
);
