import { useState } from "react";
import StyledItem from "./ProductComponentStyles.js";
import FullHeart from "../../../Assets/FullheartSVG.jsx";
import EmptyHeart from "../../../Assets/EmptyheartSVG.jsx";
import FullCart from "../../../Assets/FullcartSVG.jsx";
import EmptyCart from "../../../Assets/EmptycartSVG.jsx";

const Products = (data) => {
  const [isWished, setIsWished] = useState(false);
  const AddToWishlist = () => {
    setIsWished(true);
    console.log(isWished);
  };
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
                <EmptyCart className="cart" onclick={AddToWishlist} />
                <EmptyHeart className="heart" />
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
