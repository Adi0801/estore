import { useDispatch, useSelector } from "react-redux";
import "./_product.scss";
import { Link } from "react-router-dom";

import productSlice from "../../Redux/Product/productSlice";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Product/productAction";
import { addCartItem } from "../../Redux/Cart/cartSlice";

const Product = () => {
  //create a array list to show all the product
  const productData = useSelector((state) => state.productReducer.products);
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  //display the cart in product component
  const addToCart = (itemData) => {
    //here we also pass qantity as payload to cart component
    const payload = { ...itemData, quantity: 1 };
    //Because of this we can add and delete item in cart component
    dispatch(addCartItem(payload));
  };

  console.log(cart);

  // return (
  //   //adding flex for better responsiveness ->add classname in root  container
  //   <div className="products-container">
  //     {productData.map((product, key) => {
  //       return (

  //           <div className="mx-5 p-3  product-card">
  //             <div className="product-image-container">
  //               {/* require is used to select image from the path */}
  //               <img
  //                 src={require("../../assets/images/shop/" +
  //                   product.product_img)}
  //               />
  //             </div>
  //             <div className="product-info">
  //               <h5>
  //                 <a href="#">{product.product_name}</a>
  //               </h5>
  //               <p className="product-price">${product.price}</p>
  //               <div className="product-rating">
  //                 <i className="fa fa-star" />
  //                 <i className="fa fa-star" />
  //                 <i className="fa fa-star" />
  //                 <i className="fa fa-star" />
  //                 <i className="fa fa-star" />
  //               </div>
  //             </div>
  //           </div>
  //           // <div className="my-3">
  //           //   <div className="cart-button">
  //           //     <i className="fa fa-shopping-cart" />
  //           //     <p>Add to Cart</p>
  //           //   </div>
  //           // </div>

  //       );
  //     })}
  //   </div>

  return (
    <div className="products-container">
      {productData.map((product, key) => (
        <div key={key} className="mx-5 p-3 product-card">
          <div className="product-image-container">
            <Link to="/productDetails" state={product}>
              <img
                src={require("../../assets/images/shop/" + product.product_img)}
                alt={product.product_name}
              />
            </Link>
          </div>
          <div className="product-info">
            <h5>
              <Link to="/productDetails" state={product}>
                {product.product_name}
              </Link>
            </h5>
            <p className="product-price">${product.price}</p>
            <div className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>

          {/* Add to Cart button inside product card */}
          <div className="my-3" onClick={() => addToCart(product)}>
            <div className="cart-button">
              <div className="cart-icon-container">
                <i className="fa fa-shopping-cart mx-4" />
              </div>
              <div className="cart-text-container mx-3">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
