export const cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
    }
];

export function addToCart(productId) {
    const selectQuantity = document.querySelector(`.js-product-quantity-selector-${productId}`).value;
  
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) matchingItem = cartItem;
    })
    
    if (matchingItem) matchingItem.quantity += Number(selectQuantity);
    else {
        cart.push({
            productId: productId,
            quantity: Number(selectQuantity)
        })
    }
}

export function updateCartQuantity(productId) {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    })

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    const addedtocartElem = document.querySelector(`.js-added-to-cart-${productId}`);
    addedtocartElem.style.opacity = 1;
    const intervalId = setInterval(() => {addedtocartElem.style.opacity = 0;}, 1000);
}