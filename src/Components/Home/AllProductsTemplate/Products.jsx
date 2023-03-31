import StyledItem from "./ProductComponentStyles.js";
import FullHeart from "../../../Assets/FullheartSVG.jsx";
import EmptyHeart from "../../../Assets/EmptyheartSVG.jsx";
import FullCart from "../../../Assets/FullcartSVG.jsx";
import EmptyCart from "../../../Assets/EmptycartSVG.jsx";
import { useContext } from "react";
import { AppContext } from "../../../AppContext.js";

const Products = (dataToMap) => {
  const { cart, setCart, wishlist, setWishlist } = useContext(AppContext);
  const toggleObjectInArray = (obj, arr, setArr) => {
    const index = arr.findIndex((item) => item.id === obj.id);
    if (index === -1) {
      setArr([...arr, obj].map((item) => ({ ...item, count: 1 })));
    } else {
      const updatedArr = [...arr];
      updatedArr.splice(index, 1);
      setArr(updatedArr);
    }
  };

  const Hearts = (product) => {
    if (wishlist.some((i) => i.id === product.id)) {
      return <FullHeart className="heart" />;
    } else {
      return <EmptyHeart className="heart" />;
    }
  };

  const Carts = (product) => {
    if (cart.some((i) => i.id === product.id)) {
      return <FullCart className="cart" />;
    } else {
      return <EmptyCart className="cart" />;
    }
  };

  const mappedProducts = dataToMap.map((product) => {
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
                <div
                  onClick={() => toggleObjectInArray(product, cart, setCart)}
                >
                  {Carts(product)}
                </div>
                <div
                  onClick={() =>
                    toggleObjectInArray(product, wishlist, setWishlist)
                  }
                >
                  {Hearts(product)}
                </div>
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
