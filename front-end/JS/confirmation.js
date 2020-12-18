//******* Récupération des données localStorage *******//
let name = localStorage.getItem('name');
// console.log(name);
let price = localStorage.getItem('price');
// console.log(price);


//******* Récupération des span *******//
let confirmationName = document.querySelector('#teddie-confimation');
let confirmationPrice = document.querySelector('#price-confirmation');



//******* Modification des span via données localStorage *******//
confirmationName.innerHTML = `${name}`;
confirmationPrice.innerHTML = `${price} €`

