import { useDispatch, useSelector } from "react-redux";
import "./_filled-cart.scss";
import {
  deleteCartItem,
  updateItemQuantity,
} from "../../../Redux/Cart/cartSlice";

const FilledCart = () => {
  //fetching cart details form cart reducer
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();

  const quantityHandler = (e, item, key) => {
    const payload = {
      operator: e.target.innerText,
      key, //it is initally 0 when we adding item
      item,
    };
    //dispatch the action of cart
    dispatch(updateItemQuantity(payload));
  };

  const deleteHandler = (item) => {
    //so the selected item passed to the cart reducerr
    dispatch(deleteCartItem(item));
  };
  return (
    <div>
      <div className="row my-5 fc-main-div">
        <div className="col-8 p-4">
          {
            //feching the value of cartitem propertie from cart component
            cart.cartItems.map((item, key) => {
              return (
                <div>
                  <div className="row cart-item-card">
                    <div className="col-4">
                      <img
                        src={require("../../../assets/images/shop/" +
                          item.product_img)}
                      />
                    </div>
                    <div className="col-8">
                      <div className="p-3 cart-item-details">
                        <span className="cart-item-name">
                          {item.product_name}
                        </span>
                        <div>
                          <span className="cart-item-price">${item.price}</span>
                        </div>
                        <div>
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                        </div>
                        <hr />

                        <div className="cart-edit-container">
                          <div className="btn-group mx-3">
                            <div
                              className="btn btn-outline-dark"
                              onClick={(e) => quantityHandler(e, item, key)}
                            >
                              <span>-</span>
                            </div>
                            <div className="btn">
                              <span>{item.quantity}</span>
                            </div>
                            <div
                              className="btn btn-outline-dark"
                              onClick={(e) => quantityHandler(e, item, key)}
                            >
                              <span>+</span>
                            </div>
                          </div>
                          <div
                            className="btn btn-outline-danger mx-4"
                            onClick={() => deleteHandler(item)}
                          >
                            <span>
                              <i className="fa fa-trash mx-2" />
                              Remove Item
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })
          }
        </div>
        <div className="col-4 px-4 py-3 my-4 cart-summary">
          <h2 className="mb-5 mt-3">Summary</h2>
          <div>
            <span>Cart Total: ${cart.totalItemsPrice}</span>
            <span>Shipping Charges: Free</span>
            <hr />
            <span className="summary-total">
              Total : ${cart.totalItemsPrice}
            </span>
            <hr />
          </div>
          {/* mb-margin bottom mt-margin top */}
          <div className="btn btn-outline-dark w-100 mb-4 mt-1">Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
