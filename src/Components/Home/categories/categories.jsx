import { useContext } from "react";
import { AppContext } from "../../../AppContext.js";
import CategoriesWrapper from "./categoriesStyles.js";

const Categories = () => {
  const { setCategory } = useContext(AppContext);

  return (
    <CategoriesWrapper>
      <div className="mainWrapper">
        <div className="button" onClick={() => setCategory("all")}>
          All items
        </div>
        <div className="button" onClick={() => setCategory("drinks")}>
          Drinks
        </div>
        <div className="button" onClick={() => setCategory("fruit")}>
          Fruit
        </div>
        <div className="button" onClick={() => setCategory("bakery")}>
          Bakery
        </div>
      </div>
    </CategoriesWrapper>
  );
};

export default Categories;
