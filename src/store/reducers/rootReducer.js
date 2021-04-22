import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bedsheetsReducer from "./bedsheetsReducer";
import cartReducer from "./cartReducer";
import suitsReducer from "./suitsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  suits: suitsReducer,
  bedsheets: bedsheetsReducer,
  cart: cartReducer,
});
export default rootReducer;
