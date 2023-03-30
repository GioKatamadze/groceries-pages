import { StyledWrapper } from "./itemsByCategoryStyles.js";
import Products from "../AllProductsTemplate/Products.jsx";

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
  const DataDeterminer = () => {
    if (!isSearching) {
      if (category === "all") {
        return data;
      } else {
        const filteredItems = data.filter((item) => {
          return item.type === category;
        });
        return filteredItems;
      }
    }
    if (isSearching) {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchResult)
      );
      return filteredItems;
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

  console.log(isSearching);

  return (
    <StyledWrapper>
      <div className="mainWrapper">
        <h2>{TitleDeterminer()}</h2>
        <div className="itemsWrapper">{Products(DataDeterminer())}</div>
      </div>
    </StyledWrapper>
  );
};

export default ItemsByCategory;
