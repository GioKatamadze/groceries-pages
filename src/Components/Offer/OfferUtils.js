export const updateFreeItemCount = (
  cart,
  itemName,
  countThreshold,
  state,
  setState = () => {}
) => {
  const item = cart.find((item) => item.name === itemName);
  if (!item) {
    if (state) {
      setState(0);
    } else {
      return;
    }
    return;
  }
  setState(item.count >= countThreshold ? 1 : 0);
};

export const UserGetsCoffee = (cart, freeCoffeeCount, setFreeCoffeeCount) => {
  updateFreeItemCount(
    cart,
    "Croissants",
    3,
    freeCoffeeCount,
    setFreeCoffeeCount
  );
};

export const UserGetsCola = (cart, freeColaCount, setFreeColaCount) => {
  updateFreeItemCount(cart, "Coca-Cola", 6, freeColaCount, setFreeColaCount);
};
