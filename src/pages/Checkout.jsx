import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cartItems } = useContext(CartContext);

  const handlePayment = async () => {
    // Send data to Stripe backend API (Node.js/Firebase Cloud Function)
    console.log("Proceed to pay", cartItems);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}
