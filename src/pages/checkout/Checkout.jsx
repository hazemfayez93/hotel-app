import { useSelector } from "react-redux";
import CheckoutRooms from "../../components/checkoutRooms/CheckoutRooms";
import Summary from "../../components/summary/Summary";
import "./Checkout.scss";

const Checkout = () => {
  const { checkout } = useSelector((state) => state.checkout);
  return (
    <main className="checkout">
      <CheckoutRooms checkout={checkout} />
      <Summary checkout={checkout} />
    </main>
  );
};

export default Checkout;
