export let cart = JSON.parse(localStorage.getItem('cart'));

if(cart.length === 0){
 cart = [{
  productId: '1',
  quantity: 2
},
{
  productId: '2',
  quantity: 3
}
]; 
}

export function setCartQunatity() {
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  const cartQuantity = document.querySelector('.cart-quantity');
  cartQuantity.innerHTML = totalQuantity;
}

export function addToCart(productId) {
  let product;
  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      product = cartItem;
    }
  });
  if (product) {
    product.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
saveProducts();
}

function saveProducts(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function removeFromCart(productId){
  const newCart =[];
  cart.forEach( item => {
    if(item.productId !== productId){
      newCart.push(item);
    }
  })
  cart = newCart;
  saveProducts()
}
