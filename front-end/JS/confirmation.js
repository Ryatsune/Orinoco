//supprime la key cart du localStorage
localStorage.removeItem('cart');

//récupère le price du localStorage et la span 
//puis fill la span avec le price
function displayPriceFromStorage(params) {
    let finalPrice = JSON.parse(localStorage.getItem('finalPrice'));
    let spanPrice = document.querySelector('#price-confirmation');
    spanPrice.innerHTML = finalPrice + '€';
}
displayPriceFromStorage();

//récupère l'orderId du localStorage et la span 
//puis fill la span avec l'orderNum
function displayOrderIdFromStorage(params) {
    let orderNum = localStorage.getItem('orderNum');
    let spanOrder = document.querySelector('#order-confirmation');
    spanOrder.innerHTML = orderNum;
}
displayOrderIdFromStorage();