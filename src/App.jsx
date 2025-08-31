import React from "react";
import Routes from "./Routes";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <CartProvider>
          <ToastProvider>
            <Routes />
          </ToastProvider>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
