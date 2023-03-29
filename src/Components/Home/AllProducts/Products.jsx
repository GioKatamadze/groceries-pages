import StyledItem from "./ProductComponentStyles.js";
import Cart from "../../Assets/cartSVG.jsx";
import Heart from "../../Assets/heartSVG.jsx";

const Products = (data) => {
  const mappedProducts = data.map((product) => {
    return (
      <StyledItem key={product.id}>
        <div className="img">
          <img src={product.img} alt="Product" />
        </div>
        <div className="label">
          <div className="labelTop">
            <h3>{product.name}</h3>
            <div className="p">{product.description}</div>
          </div>
          <div className="labelBottom">
            <div className="quantity">
              {product.available <= 5 ? (
                <div className="less">Only {product.available} left</div>
              ) : (
                <div className="more">Available</div>
              )}
            </div>
            <div className="priceAndControllers">
              <div className="price">{product.price}</div>
              <div className="controllers">
                <Cart className="cart" />
                <Heart className="heart" />
              </div>
            </div>
          </div>
        </div>
      </StyledItem>
    );
  });
  return mappedProducts;
};

export default Products;
