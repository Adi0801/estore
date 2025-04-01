import "./_empty-cart.scss";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="p-4 ec-main-div">
      <span className="my-5 ec-text">The Cart is Empty</span>
      <hr />
      <div className="btn btn-warning my-3">
        <Link to="/">
          <span style={{ fontWeight: 500 }}>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
