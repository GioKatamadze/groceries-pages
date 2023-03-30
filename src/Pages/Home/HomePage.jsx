import React, { useEffect, useState } from "react";
import getData from "../../Services/DataService.js";
import StyledHomePage from "./HomePageStyles";
import Header from "../../Components/Header/Header.jsx";
import SmallScreenSearchbar from "../../Components/smallScreenSearchbar/SmallScreenSearcbar.jsx";
import Categories from "../../Components/Home/categories/categories.jsx";
import TrendingItems from "../../Components/Home/Trending/Trending.jsx";
import ItemsByCategory from "../../Components/Home/ByCategory/itemsByCategory.jsx";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
      localStorage.setItem("data", JSON.stringify(fetchedData));
    };
    if (savedData === null) {
      fetchData();
    } else {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <StyledHomePage>
      <Header
        cart={cart}
        wishlist={wishlist}
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
      />
      <SmallScreenSearchbar
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
      />
      <Categories setCategory={setCategory} />
      <TrendingItems
        data={data}
        category={category}
        isSearching={isSearching}
        cart={cart}
        wishlist={wishlist}
        setCart={setCart}
        setWishlist={setWishlist}
      />
      <ItemsByCategory
        data={data}
        category={category}
        isSearching={isSearching}
        searchResult={searchResult}
        wishlist={wishlist}
        setCart={setCart}
        cart={cart}
        setWishlist={setWishlist}
      />
    </StyledHomePage>
  );
};

export default Home;
