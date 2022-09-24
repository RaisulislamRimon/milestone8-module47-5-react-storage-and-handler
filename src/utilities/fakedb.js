const addToDb = (id) => {
  let shoppingCart = {};

  // const quantity = localStorage.getItem(id);
  const quantity = shoppingCart[id];

  if (quantity) {
    const newQuantity = quantity + 1;
    // localStorage.setItem(id, newQuantity);
    shoppingCart[id] = newQuantity;
  } else {
    // localStorage.setItem(id, 1);
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", shoppingCart);
};

export { addToDb };

// const addToDb = (id) => {
//   const quantity = localStorage.getItem(id);

//   if (quantity) {
//     const newQuantity = +quantity + 1;
//     localStorage.setItem(id, newQuantity);
//   } else {
//     localStorage.setItem(id, 1);
//   }
// };

// export { addToDb };
