import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./GlobalStates/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
