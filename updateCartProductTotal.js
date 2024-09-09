import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");
  let productTax = document.querySelector(".productTax");
  let productDiscount = document.querySelector(".productDiscount");


  let localCartProducts = getCartProductFromLS();
  let initialValue = 0;
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);
  //   console.log(totalProductPrice);

  productSubTotal.textContent = `₹${totalProductPrice}`;
  productTax.textContent = `+₹${(0.18*totalProductPrice).toFixed(2)}`;
  productDiscount.textContent = `-₹${(0.05 * totalProductPrice).toFixed(2)}`;
  productFinalTotal.textContent = `₹${(totalProductPrice + 0.18*totalProductPrice -  0.05*totalProductPrice).toFixed(2)}`;
};
