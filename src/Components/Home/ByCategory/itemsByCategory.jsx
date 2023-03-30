import { StyledWrapper, StyledItem } from "./itemsByCategoryStyles.js";
import Products from "../AllProductsTemplate/Products.jsx";
import { useEffect, useState } from "react";

const ItemsByCategory = ({
  data,
  category,
  isSearching,
  searchResult,
  cart,
  setCart,
  wishlist,
  setWishlist,
}) => {
  const [dataToMap, setDataToMap] = useState(data);

  const DataDeterminer = () => {
    if (!isSearching) {
      if (category === "all") {
        setDataToMap(data);
      } else {
        const filteredItems = data.filter((item) => {
          return item.type === category;
        });
        setDataToMap(filteredItems);
      }
    }
    if (isSearching) {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchResult)
      );
      setDataToMap(filteredItems);
    }
  };

  const TitleDeterminer = () => {
    if (isSearching) {
      return "Searched items";
    } else {
      if (category === "all") {
        return "All items";
      } else if (category === "drinks") {
        return "Drinks";
      } else if (category === "fruit") {
        return "Fruit";
      } else {
        return "Bakery";
      }
    }
  };

  useEffect(() => {
    DataDeterminer();
  }, [isSearching, category]);

  return (
    <StyledWrapper>
      <div className="mainWrapper">
        <h2>{TitleDeterminer()}</h2>
        <div className="itemsWrapper">
          {Products(dataToMap, cart, setCart, wishlist, setWishlist)}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ItemsByCategory;
