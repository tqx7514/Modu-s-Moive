import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer, { rootSaga } from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { check, logout, tempSetUser } from "./modules/user";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const user = localStorage.getItem("user");

export function loadUser() {
  console.log("user입니다", user);
  try {
    if (user === null) {
      console.log("유저가없다");
      store.dispatch(logout());
    }
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.error(e);
  }
}

sagaMiddleware.run(rootSaga);
loadUser();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
