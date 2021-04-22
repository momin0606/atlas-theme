const initState = {
  cart: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.cart,
      };
    case "ADD_TO_CART":
      var oldCart = state.cart;
      var exists = oldCart.find((cartItem) => cartItem.id == action.cart.id);
      var newCart = state.cart;
      if (!exists) newCart = [...oldCart, action.cart];
      return {
        ...state,
        cart: newCart,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE_FROM_CART":
      var oldCart = state.cart;
      var newCart = oldCart.filter((item) => item.id != action.cart.id);

      return {
        ...state,
        cart: newCart,
      };
    case "ADD_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.cart
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "SUB_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.cart
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "UPDATE_CART":
      var oldCart = state.cart;
      var newCart = oldCart.filter((item) => action.suits.includes(item.id));
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
