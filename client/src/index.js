import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore, compose } from "redux"; // 여기서 createStore로 변경
import rootReducer, { rootSaga } from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { check, logout, tempSetUser } from "./modules/user";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist"; // persistReducer와 persistStore를 import



const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);
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