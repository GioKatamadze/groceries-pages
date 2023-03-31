import StyledHomePage from "./HomePageStyles";
import Header from "../../Components/Header/Header.jsx";
import SmallScreenSearchbar from "../../Components/smallScreenSearchbar/SmallScreenSearcbar.jsx";
import Categories from "../../Components/Home/categories/categories.jsx";
import TrendingItems from "../../Components/Home/Trending/Trending.jsx";
import ItemsByCategory from "../../Components/Home/ByCategory/itemsByCategory.jsx";
import { useEffect, useContext } from "react";
import { AppContext } from "../../AppContext.js";

const Home = () => {
  const { setIsSearching } = useContext(AppContext);
  useEffect(() => {
    setIsSearching(false);
  }, []);
  return (
    <StyledHomePage>
      <Header />
      <SmallScreenSearchbar />
      <Categories />
      <TrendingItems />
      <ItemsByCategory />
    </StyledHomePage>
  );
};

export default Home;
