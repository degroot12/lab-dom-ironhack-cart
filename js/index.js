// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceNum = Number(price.innerText);
  const quantityNum = Number(quantity.value);

  const subtotal = priceNum * quantityNum;

  const newSubtotal = product.querySelector('.subtotal span');

  newSubtotal.innerText = subtotal;
  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
const products = document.getElementsByClassName('product')
// console.log(products)
let totalValue = 0;


for (var i = 0, len = products.length; i < len; i++) {
  console.log(products[i])
    totalValue += updateSubtotal(products[i])
}


  // ITERATION 3
  let updatedTotal = document.querySelector('#total-value span')
  console.log(totalValue)
  updatedTotal.innerHTML = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
