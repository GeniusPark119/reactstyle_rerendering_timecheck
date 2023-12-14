import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./modules/index";
import rootReducer from "./redux/reducer/RenderDataReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default store
