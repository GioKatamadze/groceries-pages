import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import StyledItem from "./OfferComponent.styles";
import { UserGetsCoffee, UserGetsCola } from "./OfferUtils.js";

const OfferItem = ({ productName, offerCount }) => {
  const {
    cart,
    freeCoffeeCount,
    setFreeCoffeeCount,
    freeColaCount,
    setFreeColaCount,
  } = useContext(AppContext);

  const data = localStorage.getItem("data");
  const newData = JSON.parse(data);
  const product = newData.find((item) => item.name === productName);

  useEffect(() => {
    UserGetsCoffee(cart, freeCoffeeCount, setFreeCoffeeCount);
    UserGetsCola(cart, freeColaCount, setFreeColaCount);
  }, [cart, setFreeCoffeeCount, setFreeColaCount]);

  return (
    <StyledItem key={product.id} offerCount={offerCount}>
      <div className="img">
        <img src={product.img} alt="Product" />
      </div>

      <div className="label">
        <h3>
          {offerCount}x {product.name}
        </h3>
      </div>

      <div className="priceBox">
        <div className="price">
          <del>{product.price}</del>
        </div>
        <div className="forFree">For Free!</div>
      </div>
    </StyledItem>
  );
};

export default OfferItem;
