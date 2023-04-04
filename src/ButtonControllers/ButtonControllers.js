export const updateItemCount = (item, countUpdate) => ({
  ...item,
  count: Math.max(Math.min(item.count + countUpdate, item.available), 1),
});

export const PlusOne = (product, setArr) => {
  setArr((prevItems) => {
    const updatedItems = prevItems.map((item) =>
      item.id === product.id ? updateItemCount(item, 1) : item
    );
    return updatedItems;
  });
};

export const MinusOne = (product, setArr) => {
  setArr((prevItems) => {
    const updatedItems = prevItems.map((item) =>
      item.id === product.id ? updateItemCount(item, -1) : item
    );
    return updatedItems;
  });
};

export const RemovefromCart = (item, arr, setArr) => {
  const updatedArr = arr.filter((i) => i.id !== item.id);
  setArr(updatedArr);
};

export const ToggleInArray = (item, arr, setArr) => {
  const index = arr.findIndex((i) => i.id === item.id);
  if (index === -1) {
    setArr([...arr, { ...item, count: 1 }]);
  } else {
    const updatedArr = [...arr];
    updatedArr.splice(index, 1);
    setArr(updatedArr);
  }
};
