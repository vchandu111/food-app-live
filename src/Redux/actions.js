export const ADD_TO_CART = "add_to_cart";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
