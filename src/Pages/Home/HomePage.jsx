import { useEffect, useContext } from "react";
import { AppContext } from "../../AppContext.js";
import StyledHomePage from "./HomePage.styles";
import Header from "../../Components/Header/Header.jsx";
import MobileSearchbar from "../../Components/SearchBar/MobileSearchbar/MobileSearchbar.jsx";
import Categories from "../../Components/Home/CategoryController/CategoryController.jsx";
import TrendingItems from "../../Components/Home/Trending/Trending.jsx";
import ItemsByCategory from "../../Components/Home/ByCategory/itemsByCategory.jsx";

const Home = () => {
  const { setIsSearching } = useContext(AppContext);

  useEffect(() => {
    setIsSearching(false);
  }, [setIsSearching]);

  return (
    <StyledHomePage>
      <Header />
      <MobileSearchbar />
      <Categories />
      <TrendingItems />
      <ItemsByCategory />
    </StyledHomePage>
  );
};

export default Home;
