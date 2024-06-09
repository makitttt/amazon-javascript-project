let prodcutsHtml = '';

products.forEach((product) => {
    prodcutsHtml += `
            <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="${product.rating.stars}">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.price / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id = "${product.id}" data-product-name = "${product.name}">
                Add to Cart
            </button>
            </div>
    `;
});

const gridElement = document.querySelector('.products-grid');
gridElement.innerHTML = prodcutsHtml;

const addToCartsAllElements = document.querySelectorAll('.js-add-to-cart');
addToCartsAllElements.forEach((button) => {
  button.addEventListener('click', () => {
    let product;
    cart.forEach(item => {
      if(item.productId === button.dataset.productId){
        product = item;
      }
    });
    if(product){
      product.quantity += 1;
    } else {
      cart.push({
        productId : button.dataset.productId,
        quantity : 1
      });
    }
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    const cartQuantity = document.querySelector('.cart-quantity');
    cartQuantity.innerHTML = totalQuantity;
  });
});