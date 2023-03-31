import { useContext, useEffect, useState } from "react";
import { StyledWrapper } from "./CartWrapperStyles.js";
import CartProducts from "../CartProducts/CartProductsTemplate.jsx";
import { AppContext } from "../../../AppContext.js";

const CartItems = () => {
  const { category, isSearching, setIsSearching } = useContext(AppContext);
  useEffect(() => {
    setIsSearching(false);
  }, []);

  return (
    <StyledWrapper category={category} isSearching={isSearching}>
      <div className="mainWrapper">
        <h2>Checkout</h2>
        <div className="itemsWrapper">{CartProducts()}</div>
      </div>
    </StyledWrapper>
  );
};

export default CartItems;
