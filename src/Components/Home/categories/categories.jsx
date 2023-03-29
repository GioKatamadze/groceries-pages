import CategoriesWrapper from "./categoriesStyles.js";

const Categories = (props) => {
  const { handleClick } = props;

  const handleDiv1Click = () => {
    handleClick("all");
  };

  const handleDiv2Click = () => {
    handleClick("drinks");
  };

  const handleDiv3Click = () => {
    handleClick("fruit");
  };

  const handleDiv4Click = () => {
    handleClick("bakery");
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
