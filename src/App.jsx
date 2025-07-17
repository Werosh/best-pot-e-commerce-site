import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppRouter />
      </Router>
    </CartProvider>
  );
}
