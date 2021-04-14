import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bedsheetsReducer from "./bedsheetsReducer";
import suitsReducer from "./suitsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  suits: suitsReducer,
  bedsheets: bedsheetsReducer,
});
export default rootReducer;
