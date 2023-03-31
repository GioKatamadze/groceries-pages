import StyledCheckoutPage from "./CheckoutStyles.js";
import Header from "../../Components/Header/Header.jsx";
import SmallScreenSearchbar from "../../Components/smallScreenSearchbar/SmallScreenSearcbar.jsx";
import CartItems from "../../Components/Checkout/CartWrapper/CartWrapper.jsx";
import Calculator from "../../Components/Checkout/Calculator/Calculator.jsx";
import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext.js";

const Checkout = () => {
  const { setIsSearching } = useContext(AppContext);
  useEffect(() => {
    setIsSearching(false);
  }, []);

  return (
    <StyledCheckoutPage>
      <Header />
      <SmallScreenSearchbar />
      <CartItems />
      <Calculator />
    </StyledCheckoutPage>
  );
};

export default Checkout;
