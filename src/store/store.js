import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const saveToLocalStorage = (state) => {
  const serializedUid = JSON.stringify(state.auth);
  localStorage.setItem("auth", serializedUid);
  const serializedCart = JSON.stringify(state.cart);
  localStorage.setItem("cart", serializedCart);
};

const checkLocalStorage = () => {
  const serializedUid = localStorage.getItem("auth");
  const serializedCart = localStorage.getItem("cart");

  if (serializedUid === null) return undefined;
  return {
    auth: JSON.parse(serializedUid),
    cart: JSON.parse(serializedCart),
  };
};
const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  checkLocalStorage(),

  comp(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
