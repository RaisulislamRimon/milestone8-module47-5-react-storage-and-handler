const addToDb = (id) => {
  // let shoppingCart;
  let shoppingCart = {}; // both are same...

  // get the shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

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
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
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
