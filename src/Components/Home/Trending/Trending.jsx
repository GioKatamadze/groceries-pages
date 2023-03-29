import { StyledWrapper } from "./trendigStyles.js";
import Products from "../../ProductComponent/ProductComponent.jsx";

const TrendingItems = ({ data }) => {
  const filteredItems = data.filter((item) => {
    return item.rating === 5;
  });

  return (
    <StyledWrapper>
      <div className="mainWrapper">
        <h2>Trending Items</h2>
        <div className="itemsWrapper">{Products(filteredItems)}</div>
      </div>
    </StyledWrapper>
  );
};

export default TrendingItems;
