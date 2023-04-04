import { StyledWrapper, Hr, Button } from "./CalculatorStyles.js";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../AppContext.js";

const Calculator = () => {
  const { cart } = useContext(AppContext);
  const [total, setTotal] = useState("");

  const calculateSubtotal = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.count * parseFloat(item.price.slice(1));
    }, 0);
    setTotal(total.toFixed(2));
  };

  useEffect(() => {
    calculateSubtotal();
  }, [cart]);

  return (
    <StyledWrapper>
      <Hr />
      <div className="calculatorDiv">
        <h2>Subtotal</h2>
        <h3>£{total}</h3>
      </div>
      <Hr />
      <div className="calculatorDiv">
        <h2>Discount</h2>
        <h3>£0.00</h3>
      </div>
      <Hr />
      <div className="calculatorDiv" id="checkoutDiv">
        <h2>Total</h2>
        <h3>£{total}</h3>
        <Button>Checkout</Button>
      </div>
      <Hr />
    </StyledWrapper>
  );
};

export default Calculator;
