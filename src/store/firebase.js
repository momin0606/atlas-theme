import firebase from "firebase";
export const firebaseConfig = {
  apiKey: "AIzaSyBMiBY9FqOtxiFFtutgRs3wLDzebIq3dP8",
  authDomain: "atlas-couture.firebaseapp.com",
  projectId: "atlas-couture",
  storageBucket: "atlas-couture.appspot.com",
  messagingSenderId: "332154682692",
  appId: "1:332154682692:web:14cd2a7d6b84e64c832b11",
  measurementId: "G-SG4SGPKSTN",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
