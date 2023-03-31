import StyledItem from "./CartProductStyles.js";
import Delete from "../../../Assets/Delete.jsx";
import Minus from "../../../Assets/Minus.jsx";
import Plus from "../../../Assets/Plus.jsx";
import { useContext } from "react";
import { AppContext } from "../../../AppContext.js";

const CartProducts = () => {
  const { cart, setCart } = useContext(AppContext);
  const toggleObjectInArray = (obj, arr, setArr) => {
    const updatedArr = arr.filter((item) => item.id !== obj.id);
    setArr(updatedArr);
  };

  const incrementCount = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, count: Math.min(item.count + 1, item.available) }
          : item
      )
    );
  };

  const decrementCount = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
      )
    );
  };

  const mappedProducts = cart.map((product) => {
    return (
      <StyledItem key={product.id}>
        <div className="img">
          <img src={product.img} alt="Product" />
        </div>

        <div className="labelTop">
          <h3>{product.name}</h3>
          <div className="p">{product.description}</div>
        </div>

        <div className="controllers">
          <div className="quantity">
            <div className="quantityControllers">
              <div className="minus" onClick={() => decrementCount(product.id)}>
                <Minus />
              </div>
              <div className="count">{product.count}</div>
              <div className="plus" onClick={() => incrementCount(product.id)}>
                <Plus />
              </div>
            </div>

            <div className="quantityAvailable">
              {product.available <= 5 ? (
                <div className="less">Only {product.available} left</div>
              ) : (
                <div className="more">Available</div>
              )}
            </div>
          </div>
          <div className="priceAndControllers">
            <div className="price">{product.price}</div>
            <div
              className="delete"
              onClick={() => toggleObjectInArray(product, cart, setCart)}
            >
              <Delete />
            </div>
          </div>
        </div>
      </StyledItem>
    );
  });

  return mappedProducts;
};

export default CartProducts;
