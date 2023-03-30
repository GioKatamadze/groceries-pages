import SearchBar from "../Header/SearchBar/SearchBar.jsx";
import Settings from "../../Assets/settings.png";
import MobileSearchWrapper from "./SmallScreenSearcbarStyles.js";

const SmallScreenSearchbar = ({ setIsSearching, setSearchResult }) => {
  return (
    <MobileSearchWrapper>
      <img src={Settings} />
      <SearchBar
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
      />
    </MobileSearchWrapper>
  );
};

export default SmallScreenSearchbar;
