import StyledHeader from "./HeaderStyles.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import Heart from "../../Assets/heart.png";
import User from "../../Assets/avatar.png";
import Cart from "../../Assets/Icon.png";
import Settings from "../../Assets/settings.png";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../../AppContext.js";

const Header = () => {
  const { cart, wishlist } = useContext(AppContext);

  const navigate = useNavigate();
  const wishCount = wishlist.length;
  const cartCount = cart.length;

  const gotoHome = () => {
    navigate("/");
  };

  const gotoCheckout = () => {
    navigate("/checkout");
  };

  const wishCounter = () => {
    if (wishCount >= 1) {
      return <div className="wishCounter">{wishCount}</div>;
    } else {
      return;
    }
  };

  const cartCounter = () => {
    if (cartCount >= 1) {
      return <div className="cartCounter">{cartCount}</div>;
    } else {
      return;
    }
  };
  return (
    <StyledHeader>
      <div className="mainWrapper">
        <div className="title" onClick={gotoHome}>
          <h1>GROCERIES</h1>
        </div>

        <div className="searchWrapper">
          <img src={Settings} />
          <SearchBar />
        </div>

        <div className="sideNav">
          <div className="heart">
            {wishCounter()}
            <img src={Heart} />
          </div>
          <div className="user">
            <img src={User} />
          </div>
          <div className="cart" onClick={gotoCheckout}>
            {cartCounter()}
            <img src={Cart} />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
