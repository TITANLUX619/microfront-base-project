import { RECEIVE_PRODUCTS, ADD_TO_CART } from "../constants";

let PRODUCTS_DATA = [
  { id: 1, title: "iPad 4 Mini", price: 500.01 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99 },
];

async function retrieveProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTS_DATA), 100);
  });
}

export const listProducts = () => async (dispatch) => {
  const products = await retrieveProducts();

  dispatch({
    type: RECEIVE_PRODUCTS,
    products,
  });
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};
