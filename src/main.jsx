import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ErrorBoundary from "./error/ErrorBoundray.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <CartProvider>
        <App />
      </CartProvider>
    </ErrorBoundary>
  </StrictMode>
);
