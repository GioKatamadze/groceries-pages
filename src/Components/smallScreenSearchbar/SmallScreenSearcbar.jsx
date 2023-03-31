import SearchBar from "../Header/SearchBar/SearchBar.jsx";
import Settings from "../../Assets/settings.png";
import MobileSearchWrapper from "./SmallScreenSearcbarStyles.js";

const SmallScreenSearchbar = () => {
  return (
    <MobileSearchWrapper>
      <img src={Settings} />
      <SearchBar />
    </MobileSearchWrapper>
  );
};

export default SmallScreenSearchbar;
