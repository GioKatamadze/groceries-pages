import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [freeColaCount, setFreeColaCount] = useState(0);
  const [freeCoffeeCount, setFreeCoffeeCount] = useState(0);

  const appState = {
    wishlist,
    setWishlist,
    cart,
    setCart,
    isSearching,
    setIsSearching,
    searchResult,
    setSearchResult,
    category,
    setCategory,
    data,
    setData,
    freeColaCount,
    setFreeColaCount,
    freeCoffeeCount,
    setFreeCoffeeCount,
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
