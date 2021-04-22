import firebase from "../firebase";
// import { v4 as uuidv4 } from "uuid";
export const addToCart = (cartItem) => {
  return (dispatch) => {
    // firebase
    //   .firestore()
    //   .collection("suits")
    //   .onSnapshot((query) => {
    //     var tempInvitations = [];
    //     query.forEach((doc) => {
    //       tempInvitations.push({ id: doc.id, ...doc.data() });
    //     });
    //     dispatch({
    //       type: "GET_SUITS",
    //       suits: tempInvitations,
    //     });
    //   });

    dispatch({ type: "ADD_TO_CART", cart: cartItem });
  };
};
export const removeFromCart = (cartItem) => {
  return (dispatch) => {
    // firebase
    //   .firestore()
    //   .collection("suits")
    //   .onSnapshot((query) => {
    //     var tempInvitations = [];
    //     query.forEach((doc) => {
    //       tempInvitations.push({ id: doc.id, ...doc.data() });
    //     });
    //     dispatch({
    //       type: "GET_SUITS",
    //       suits: tempInvitations,
    //     });
    //   });

    dispatch({ type: "REMOVE_FROM_CART", cart: cartItem });
  };
};

export const addQuantity = (cartItem) => {
  return (dispatch) => {
    // firebase
    //   .firestore()
    //   .collection("suits")
    //   .onSnapshot((query) => {
    //     var tempInvitations = [];
    //     query.forEach((doc) => {
    //       tempInvitations.push({ id: doc.id, ...doc.data() });
    //     });
    //     dispatch({
    //       type: "GET_SUITS",
    //       suits: tempInvitations,
    //     });
    //   });

    dispatch({ type: "ADD_QUANTITY", cart: cartItem });
  };
};

export const subQuantity = (cartItem) => {
  return (dispatch) => {
    // firebase
    //   .firestore()
    //   .collection("suits")
    //   .onSnapshot((query) => {
    //     var tempInvitations = [];
    //     query.forEach((doc) => {
    //       tempInvitations.push({ id: doc.id, ...doc.data() });
    //     });
    //     dispatch({
    //       type: "GET_SUITS",
    //       suits: tempInvitations,
    //     });
    //   });

    dispatch({ type: "SUB_QUANTITY", cart: cartItem });
  };
};
export const updateCart = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("suits")
      .onSnapshot((query) => {
        var tempInvitations = [];
        query.forEach((doc) => {
          if (doc.data().stock > 0) tempInvitations.push(doc.id);
        });
        dispatch({
          type: "UPDATE_CART",
          suits: tempInvitations,
        });
      });

    // dispatch({ type: "SUB_QUANTITY", cart: cartItem });
  };
};
