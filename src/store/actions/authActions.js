import firebase from "../firebase";
export const login = (credentials) => {
  return (dispatch) => {
    dispatch({
      type: "ACTION_REQUEST",
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        console.log(data.user.uid);
        firebase
          .firestore()
          .collection("users")
          .doc(data.user.uid)
          .onSnapshot((doc) => {
            console.log(doc.data());
            var tempUser = {};
            tempUser = { id: doc.id, ...doc.data() };
            dispatch({
              type: "LOGIN_SUCCESS",
              user: tempUser,
              error: "",
            });
            dispatch({
              type: "ACTION_REQUEST_END",
            });
          });
      })

      .catch((error) => {
        dispatch({
          type: "LOGIN_FAIL",
          uid: "",
          error: error,
        });
        dispatch({
          type: "ACTION_REQUEST_END",
        });
        alert(error, "danger");
      });
  };
};
export const logout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then((data) => {
        dispatch({
          type: "LOGOUT_SUCCESS",
          uid: "",
          error: "",
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGOUT_FAIL",
          uid: "",
          error: error,
        });
      });
  };
};

export const removeAuthError = () => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_RESET",
      uid: "",
      error: "",
    });
  };
};
export const registeredComplete = () => {
  return (dispatch) => {
    dispatch({
      type: "REGISTER_COMPLETE",
    });
  };
};
export const register = (credentials, password) => {
  return async (dispatch) => {
    dispatch({
      type: "ACTION_REQUEST",
    });
    // var data = await firebase
    //   .storage()
    //   .ref()
    //   .child(
    //     "profile_pictures/" +
    //       uuidv4() +
    //       "." +
    //       credentials.image.name.split(".").pop()
    //   )
    //   .put(credentials.image);
    // var url = await data.ref.getDownloadURL();

    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, password)
      .then((data) => {
        firebase
          .firestore()
          .collection("users")
          .doc(data.user.uid)
          .set({
            ...credentials,
          })
          .then((res) => {
            dispatch({
              type: "REGISTER_SUCCESS",
            });
            dispatch({
              type: "ACTION_REQUEST_END",
            });
            alert("Account Created Successfully");
          })
          .catch((err) => {
            dispatch({
              type: "REGISTER_FAIL",
            });
            dispatch({
              type: "ACTION_REQUEST_END",
            });
            alert(err, "danger");
            console.log(err);
          });
      })
      .catch((err) => {
        dispatch({
          type: "REGISTER_FAIL",
        });
        dispatch({
          type: "ACTION_REQUEST_END",
        });
        alert(err, "danger");
        console.log(err);
      });
  };
};
// export const signupGoogle = () => {
//   return (dispatch) => {
//     dispatch({
//       type: "ACTION_REQUEST",
//     });
//     var provider = new firebase.auth.GoogleAuthProvider();
//     const firestore = firebase.firestore();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(async (result) => {
//         console.log(result.user);
//         var FreshUser = await firestore
//           .collection("users")
//           .doc(result.user.uid)
//           .get();
//         if (!FreshUser.exists) {
//           return firestore
//             .collection("users")
//             .doc(result.user.uid)
//             .set({
//               name: result.user.displayName,
//               email: result.user.email,
//             })
//             .then((res) => {
//               const config = {
//                 headers: {
//                   "Content-Type": " application/json",
//                   "Access-Control-Allow-Origin": "*",
//                 },
//               };
//               const body = {
//                 email: result.user.email,
//               };

//               axios.post(
//                 "https://us-central1-coin-hunter-admin.cloudfunctions.net/Notify",
//                 body,
//                 config
//               );

//               dispatch({
//                 type: "GOOGLE_SIGNUP_SUCCESS",
//                 user: { id: FreshUser.id, ...FreshUser.data() },
//                 error: "",
//               });
//               dispatch({
//                 type: "ACTION_REQUEST_END",
//               });
//             })
//             .catch((error) => {
//               dispatch({
//                 type: "GOOGLE_SIGNUP_FAIL",
//                 uid: "",
//                 error: error,
//               });
//               dispatch({
//                 type: "ACTION_REQUEST_END",
//               });
//               alert(error, "danger");
//             });
//         } else {
//           dispatch({
//             type: "GOOGLE_SIGNUP_SUCCESS",
//             user: { id: FreshUser.id, ...FreshUser.data() },
//             error: "",
//           });
//           dispatch({
//             type: "ACTION_REQUEST_END",
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: "GOOGLE_SIGNUP_FAIL",
//           uid: "",
//           error: error,
//         });
//         dispatch({
//           type: "ACTION_REQUEST_END",
//         });
//         alert(error, "danger");
//       });
//   };
// };

// export const loginGoogle = () => {
//   return (dispatch) => {
//     dispatch({
//       type: "ACTION_REQUEST",
//     });
//     var provider = new firebase.auth.GoogleAuthProvider();
//     const firestore = firebase.firestore();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         return firestore
//           .collection("users")
//           .doc(result.user.uid)
//           .onSnapshot((doc) => {
//             console.log(doc.data());
//             var tempUser = {};
//             tempUser = { id: doc.id, ...doc.data() };
//             dispatch({
//               type: "LOGIN_SUCCESS",
//               user: tempUser,
//               error: "",
//             });
//             dispatch({
//               type: "ACTION_REQUEST_END",
//             });
//           });
//       })
//       .catch((error) => {
//         dispatch({
//           type: "LOGIN_FAIL",
//           uid: "",
//           error: error,
//         });
//         dispatch({
//           type: "ACTION_REQUEST_END",
//         });
//         alert(error, "danger");
//       });
//   };
// };
// export const signupFacebook = () => {
//   return (dispatch) => {
//     dispatch({
//       type: "ACTION_REQUEST",
//     });
//     var provider = new firebase.auth.FacebookAuthProvider();
//     const firestore = firebase.firestore();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(async (result) => {
//         console.log(result.user);
//         var FreshUser = await firestore
//           .collection("users")
//           .doc(result.user.uid)
//           .get();
//         if (!FreshUser.exists) {
//           return firestore
//             .collection("users")
//             .doc(result.user.uid)
//             .set({
//               name: result.user.displayName,
//               email: result.user.email,
//             })
//             .then((res) => {
//               const config = {
//                 headers: {
//                   "Content-Type": " application/json",
//                   "Access-Control-Allow-Origin": "*",
//                 },
//               };
//               const body = {
//                 email: result.user.email,
//               };

//               axios.post(
//                 "https://us-central1-coin-hunter-admin.cloudfunctions.net/Notify",
//                 body,
//                 config
//               );

//               dispatch({
//                 type: "GOOGLE_SIGNUP_SUCCESS",
//                 user: { id: FreshUser.id, ...FreshUser.data() },
//                 error: "",
//               });
//               dispatch({
//                 type: "ACTION_REQUEST_END",
//               });
//             })
//             .catch((error) => {
//               dispatch({
//                 type: "GOOGLE_SIGNUP_FAIL",
//                 uid: "",
//                 error: error,
//               });
//               dispatch({
//                 type: "ACTION_REQUEST_END",
//               });
//             });
//         } else {
//           dispatch({
//             type: "GOOGLE_SIGNUP_SUCCESS",
//             user: { id: FreshUser.id, ...FreshUser.data() },
//             error: "",
//           });
//           dispatch({
//             type: "ACTION_REQUEST_END",
//           });
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: "GOOGLE_SIGNUP_FAIL",
//           uid: "",
//           error: error,
//         });
//         dispatch({
//           type: "ACTION_REQUEST_END",
//         });
//       });
//   };
// };

// export const loginFacebook = () => {
//   return (dispatch) => {
//     dispatch({
//       type: "ACTION_REQUEST",
//     });
//     var provider = new firebase.auth.FacebookAuthProvider();
//     const firestore = firebase.firestore();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         return firestore
//           .collection("users")
//           .doc(result.user.uid)
//           .onSnapshot((doc) => {
//             console.log(doc.data());
//             var tempUser = {};
//             tempUser = { id: doc.id, ...doc.data() };
//             dispatch({
//               type: "LOGIN_SUCCESS",
//               user: tempUser,
//               error: "",
//             });
//             dispatch({
//               type: "ACTION_REQUEST_END",
//             });
//           });
//       })
//       .catch((error) => {
//         dispatch({
//           type: "LOGIN_FAIL",
//           uid: "",
//           error: error,
//         });
//         dispatch({
//           type: "ACTION_REQUEST_END",
//         });
//       });
//   };
// };
export const recoverAccount = (email) => {
  return (dispatch) => {
    dispatch({
      type: "ACTION_REQUEST",
    });
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((res) => {
        dispatch({
          type: "ACTION_REQUEST_END",
        });
        dispatch({
          type: "ACCOUNT_RECOVER",
        });
        alert("Email Sent for Account Recovery");
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "ACCOUNT_RECOVER_FAIL",
        });
      });
  };
};
