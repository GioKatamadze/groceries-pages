import SearchBar from "../SearchbarComponent/SearchbarComponent.jsx";
import Settings from "../../../Assets/settings.png";
import MobileSearchWrapper from "./MobileSearchbar.styles.js";

const MobileSearchbar = () => {
  return (
    <MobileSearchWrapper>
      <img src={Settings} />
      <SearchBar />
    </MobileSearchWrapper>
  );
};

export default MobileSearchbar;
