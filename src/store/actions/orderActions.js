import firebase from "../firebase";
// import { v4 as uuidv4 } from "uuid";
export const createOrder = (order) => {
  return async (dispatch) => {
    console.log(order.cart);
    var suits = await firebase.firestore().collection("suits").get();
    order.cart.forEach(async (item) => {
      suits.docs.forEach(async (doc) => {
        if (doc.id == item.id) {
          var oldSuit = await firebase
            .firestore()
            .collection("suits")
            .doc(doc.id)
            .get();
          var oldStock = oldSuit.data().stock;
          var newStock = oldStock - item.quantity;
          firebase
            .firestore()
            .collection("suits")
            .doc(doc.id)
            .update({ stock: newStock });
        }
      });
    });
    firebase
      .firestore()
      .collection("orders")
      .add({
        ...order,
      })
      .then((query) => {
        dispatch({
          type: "CREATE_ORDER",
        });
        dispatch({
          type: "EMPTY_CART",
        });
      });
  };
};
