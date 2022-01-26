import { RECEIVE_PRODUCTS } from "../constants";

const initialState = [
  { id: 1, title: "iPad 4 Mini", price: 500.01 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99 },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.reduce((result, product) => {
        result[product.id] = product;
        return result;
      }, {});
    default:
      return state;
  }
};

export default reducer;
