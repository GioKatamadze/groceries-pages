import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext.js";
import { Route, Routes } from "react-router-dom";
import getData from "./Services/DataService.js";
import Home from "./Pages/Home/HomePage.jsx";
import Checkout from "./Pages/Checkout/CheckoutPage.jsx";

function useData() {
  const { setData } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
        localStorage.setItem("data", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      fetchData();
    }
  }, []);
}

function App() {
  useData();

  return (
    <div className="App" style={{ maxWidth: "100vw", height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
