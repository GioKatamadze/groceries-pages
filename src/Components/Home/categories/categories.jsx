import CategoriesWrapper from "./categoriesStyles.js";

const Categories = ({ setCategory }) => {
  const handleDiv1Click = () => {
    setCategory("all");
  };
  const handleDiv2Click = () => {
    setCategory("drinks");
  };
  const handleDiv3Click = () => {
    setCategory("fruit");
  };
  const handleDiv4Click = () => {
    setCategory("bakery");
  };

  return (
    <CategoriesWrapper>
      <div className="mainWrapper">
        <div className="button" onClick={handleDiv1Click}>
          All items
        </div>
        <div className="button" onClick={handleDiv2Click}>
          Drinks
        </div>
        <div className="button" onClick={handleDiv3Click}>
          Fruit
        </div>
        <div className="button" onClick={handleDiv4Click}>
          Bakery
        </div>
      </div>
    </CategoriesWrapper>
  );
};

export default Categories;
