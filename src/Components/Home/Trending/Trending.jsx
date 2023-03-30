import { StyledWrapper } from "./trendigStyles.js";
import Products from "../AllProductsTemplate/Products.jsx";

const TrendingItems = ({
  data,
  category,
  isSearching,
  cart,
  setCart,
  wishlist,
  setWishlist,
}) => {
  const filteredItems = data.filter((item) => {
    return item.rating === 5;
  });

  return (
    <StyledWrapper category={category} isSearching={isSearching}>
      <div className="mainWrapper">
        <h2>Trending Items</h2>
        <div className="itemsWrapper">{Products(filteredItems)}</div>
      </div>
    </StyledWrapper>
  );
};

export default TrendingItems;
