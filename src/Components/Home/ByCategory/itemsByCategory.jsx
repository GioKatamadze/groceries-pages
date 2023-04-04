import { StyledWrapper, StyledItem } from "./itemsByCategoryStyles.js";
import Products from "../ProductComponent/ProductComponent.jsx";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../AppContext.js";

const ItemsByCategory = () => {
  const { data, category, isSearching, searchResult } = useContext(AppContext);
  const [dataToMap, setDataToMap] = useState(data);

  const title =
    isSearching || category === "all"
      ? isSearching
        ? "Searched items"
        : "All items"
      : category === "drinks"
      ? "Drinks"
      : category === "fruit"
      ? "Fruit"
      : "Bakery";

  useEffect(() => {
    if (!isSearching) {
      const filteredItems =
        category === "all"
          ? data
          : data.filter((item) => item.type === category);
      setDataToMap(filteredItems);
    } else {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchResult)
      );
      setDataToMap(filteredItems);
    }
  }, [isSearching, category, data, searchResult]);

  return (
    <StyledWrapper>
      <div className="mainWrapper">
        <h2>{title}</h2>
        <div className="itemsWrapper">{Products(dataToMap)}</div>
      </div>
    </StyledWrapper>
  );
};

export default ItemsByCategory;
