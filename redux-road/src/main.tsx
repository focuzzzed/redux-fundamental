import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)