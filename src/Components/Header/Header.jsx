import StyledHeader from "./HeaderStyles.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import Heart from "../../Assets/heart.png";
import User from "../../Assets/avatar.png";
import Cart from "../../Assets/Icon.png";
import Settings from "../../Assets/settings.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="mainWrapper">
        <div className="title">
          <h1>GROCERIES</h1>
        </div>

        <div className="searchWrapper">
          <img src={Settings} />
          <SearchBar />
        </div>

        <div className="sideNav">
          <div className="heart">
            <div className="wishCounter"></div>
            <img src={Heart} />
          </div>
          <div className="user">
            <img src={User} />
          </div>
          <div className="cart">
            <div className="cartCounter"></div>
            <img src={Cart} />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
