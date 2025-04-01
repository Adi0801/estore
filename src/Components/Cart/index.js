import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart = () => {
  //we are fetching state of cart details from cartslice or cart reducer
  const cart = useSelector((state) => state.cr);
  return (
    //it check if any item present in the cart show filled cart or else empty cart component
    <div>{cart.cartItems.length === 0 ? <EmptyCart /> : <FilledCart />}</div>
  );
};

export default Cart;
