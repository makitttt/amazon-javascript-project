import {cart,removeFromCart} from '../data/cart.js'
import {products} from '../scripts/product.js'
import {formatCurrency} from '../scripts/utils/convert-amount.js'

let checkoutHtml;
cart.forEach(cartItem => {
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach(product => {
        if(product.id === productId){
            matchingProduct = product;
        }
    });
    checkoutHtml += `<div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Friday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.price)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link"
                  data-product-id = "${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shippingdelete
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});

const orderSummaryElement = document.querySelector('.order-summary');
orderSummaryElement.innerHTML = checkoutHtml;

document.querySelectorAll('.js-delete-link').forEach((deleteLink) => {
    deleteLink.addEventListener('click', () => {
        console.log('inside' + deleteLink.dataset.productId);
        const productId = deleteLink.dataset.productId;
        removeFromCart(productId);
        const deleteItem = document.querySelector(`.js-cart-item-container-${productId}`);
        deleteItem.remove();
        if(cart.length === 0){
          orderSummaryElement.innerHTML = `<p> No items in cart</p>`;
        }
    });
});