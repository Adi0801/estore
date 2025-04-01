import { useSelector } from "react-redux";
import "./_top-nav.scss";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useState } from "react";

//to fetching the response google login sent we use gapi
import { gapi } from "gapi-script";
const TopNav = () => {
  //fetch total item from cart component that update cart in top-nav
  const cartItemCount = useSelector((state) => state.cr.totalItems);
  //creating state for userdetails
  const [userDetails, setUserDetails] = useState();

  //google login automatically sents response after login
  const successHandler = (res) => {
    setUserDetails(res.profileObj);
  };
  return (
    <div>
      <div className="header bg-dark">
        <div className="row top-nav-row">
          {/* brand is applying bootstrap css and margin y axis 1 */}
          <div className="brand my-1">
            <h1>eStore</h1>
          </div>
          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-100 p-0 m-0">
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <input className="form-control" placeholder="Search" />
            <button>
              {/* this camed from font-awesome libary included in index.html */}
              <i className="fa fa-search" />
            </button>
          </div>
          <div className="login-container p-0 ">
            {/* user icon is custom css class */}
            <i className="fa fa-user-circle user-icon" />
            <h5>
              {
                //adding conditional rendering
                userDetails === "" ? (
                  <GoogleLogin
                    clientId="47617158332-rtis570o73iar4d396n05l3vdcqeb3pb.apps.googleusercontent.com"
                    buttonText="Login"
                    cookiePolicy="single_host_origin"
                    onSuccess={successHandler}
                  />
                ) : (
                  userDetails.name
                )
              }
            </h5>
          </div>
          <div className="cart-wishlist">
            <ul className="p-0">
              <li className="list-icon">
                <i className="fa fa-heart" />
              </li>
              <Link to="/cart">
                <li className="list-icon">
                  <i className="fa fa-shopping-cart" />
                  {
                    //if we add sometime in cart it show else it number are hidden
                    cartItemCount !== 0 ? (
                      <div className="cart-item-count">
                        <p>{cartItemCount}</p>
                      </div>
                    ) : (
                      <></>
                    )
                  }
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
