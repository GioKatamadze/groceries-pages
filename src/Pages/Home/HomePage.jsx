import React, { useEffect, useState } from "react";
import getData from "../../Services/DataService.js";
import StyledHomePage from "./HomePageStyles";
import Header from "../../Components/Header/Header.jsx";
import Categories from "../../Components/Home/categories/categories.jsx";
import TrendingItems from "../../Components/Home/Trending/Trending.jsx";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);

  const handleChildClick = (newValue) => {
    setCategory(newValue);
  };

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
      <Header />
      <Categories handleClick={handleChildClick} />
      <TrendingItems data={data} />
    </StyledHomePage>
  );
};

export default Home;
