import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/HomePage.jsx";
import Checkout from "./Pages/Checkout/CheckoutPage.jsx";

function App() {
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
