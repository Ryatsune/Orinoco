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