import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext.js";
import { Route, Routes } from "react-router-dom";
import getData from "./Services/DataService.js";
import Home from "./Pages/Home/HomePage.jsx";
import Checkout from "./Pages/Checkout/CheckoutPage.jsx";

function App() {
  const { data, setData } = useContext(AppContext);

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
