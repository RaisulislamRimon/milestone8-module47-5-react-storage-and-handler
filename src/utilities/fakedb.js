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

const removeFromDb = (id) => {
  // console.log("remove from db", id);
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      console.log("remove from db");
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export { addToDb, removeFromDb };

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
