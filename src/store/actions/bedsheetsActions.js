import firebase from "../firebase";
// import { v4 as uuidv4 } from "uuid";
export const getBedSheets = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("bedsheets")
      .onSnapshot((query) => {
        var tempInvitations = [];
        query.forEach((doc) => {
          tempInvitations.push({ id: doc.id, ...doc.data() });
        });
        dispatch({
          type: "GET_BEDSHEETS",
          bedsheets: tempInvitations,
        });
      });
  };
};
