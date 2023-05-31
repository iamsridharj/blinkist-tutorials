import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ABTestProvider } from "./contexts/ABTestProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ABTestProvider>
      <App />
    </ABTestProvider>
  </React.StrictMode>
);
