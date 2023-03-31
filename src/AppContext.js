import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);

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
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
