import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import RootReducer from "./reducers";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("Error in storing the state in local storage is:", err);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Error in loading the state from localstorage is: ", err);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();
const middleware = [thunk];

const store = createStore(
  RootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
