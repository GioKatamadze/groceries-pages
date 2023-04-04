import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext.js";
import { StyledCheckoutPage, Button } from "./CheckoutPage.styles.js";
import Header from "../../Components/Header/Header.jsx";
import MobileSearchbar from "../../Components/SearchBar/MobileSearchbar/MobileSearchbar.jsx";
import CartItems from "../../Components/Checkout/CartWrapper/CartWrapper.jsx";
import Calculator from "../../Components/Checkout/Calculator/Calculator.jsx";

const Checkout = () => {
  const { setIsSearching } = useContext(AppContext);

  useEffect(() => {
    setIsSearching(false);
  }, [setIsSearching]);

  return (
    <StyledCheckoutPage>
      <Header />
      <MobileSearchbar />
      <CartItems />
      <Calculator />
      <Button>
        <div className="button">Checkout</div>
      </Button>
    </StyledCheckoutPage>
  );
};

export default Checkout;
