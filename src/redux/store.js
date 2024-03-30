import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

export const store = configureStore(
  { reducer: reducers },
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);