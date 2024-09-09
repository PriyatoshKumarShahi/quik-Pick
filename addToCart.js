import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// -----------------------------------------------------
// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
// --------------------------------------------------------
getCartProductFromLS();

// -----------------------------------------------------
// to add the data into localStorage
// --------------------------------------------------------
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  //   console.log(quantity, price);
  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );


  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    const gst = 0.18 * price;
    price = price + gst;


    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    //show toast when product added to the cart
    showToast("add", id);
  }

  if (existingProd) {
    return false;
  }


  price = Number(price * quantity);
  quantity = Number(quantity);
  const gst = 0.18 * price;
  price = price + gst;

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  updateCartValue(arrLocalStorageProduct);

  //show toast when product added to the cart
  showToast("add", id);
//   const gst = 0.18 * price;
// document.querySelector('.productTax').innerHTML = `₹${gst.toFixed(2)}`;

  
};
