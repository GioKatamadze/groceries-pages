import React, { useContext } from "react";
import { AppContext } from "../../AppContext.js";
import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledNav } from "./HeaderStyles.js";
import SearchBar from "../SearchBar/SearchbarComponent/SearchbarComponent.jsx";
import Heart from "../../Assets/heart.png";
import User from "../../Assets/avatar.png";
import Cart from "../../Assets/Icon.png";
import Settings from "../../Assets/settings.png";

const Header = () => {
  const { cart, wishlist } = useContext(AppContext);
  const wishCount = wishlist.length;
  const cartCount = cart.length;
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const gotoCheckout = () => {
    navigate("/checkout");
  };

  return (
    <StyledHeader>
      <div className="headerWrapper">
        <div className="title" onClick={gotoHome}>
          <h1>GROCERIES</h1>
        </div>

        <div className="searchWrapper">
          <img src={Settings} />
          <SearchBar />
        </div>

        <StyledNav>
          <div className="heart">
            {wishCount >= 1 ? (
              <div className="wishCounter">{wishCount}</div>
            ) : (
              <></>
            )}
            <img src={Heart} />
          </div>
          <div className="user">
            <img src={User} />
          </div>
          <div className="cart" onClick={gotoCheckout}>
            {cartCount >= 1 ? (
              <div className="cartCounter">{cartCount}</div>
            ) : (
              <></>
            )}
            <img src={Cart} />
          </div>
        </StyledNav>
      </div>
    </StyledHeader>
  );
};

export default Header;
