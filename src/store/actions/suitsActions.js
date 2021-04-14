import firebase from "../firebase";
// import { v4 as uuidv4 } from "uuid";
export const getSuits = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("suits")
      .onSnapshot((query) => {
        var tempInvitations = [];
        query.forEach((doc) => {
          tempInvitations.push({ id: doc.id, ...doc.data() });
        });
        dispatch({
          type: "GET_SUITS",
          suits: tempInvitations,
        });
      });
  };
};
