import { useContext, useEffect } from "react";
import { StyledWrapper } from "./CartWrapperStyles.js";
import CartProducts from "../CartProductComponent/CartProductComponent.jsx";
import { AppContext } from "../../../AppContext.js";
import OfferItem from "../../Offer/OfferComponent.jsx";

const CartItems = () => {
  const { isSearching, setIsSearching, freeColaCount, freeCoffeeCount } =
    useContext(AppContext);

  useEffect(() => {
    setIsSearching(false);
  }, []);

  return (
    <StyledWrapper
      isSearching={isSearching}
      freeColaCount={freeColaCount}
      freeCoffeeCount={freeCoffeeCount}
    >
      <div className="mainWrapper">
        <h2>Checkout</h2>
        <div className="itemsWrapper">{CartProducts()}</div>
        <h2 className="offerSectionTitle">You Get</h2>
        <div className="itemsWrapper2">
          <OfferItem productName="Coca-Cola" offerCount={freeColaCount} />
          <OfferItem productName="Coffee" offerCount={freeCoffeeCount} />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default CartItems;
