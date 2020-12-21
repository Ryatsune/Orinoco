//lire le local storage
//add les valeurs du local storage
//ajouter à la page


//*********** Récupération des balises concernées dans cart.html ***********//
let teddieName = document.querySelector('#teddie-name');
// console.log(teddieName);
let teddieImage = document.querySelector('#teddie-img');
// console.log(teddieImage);
let teddiePrice = document.querySelector('#teddie-price');
// console.log(teddiePrice);
let trashBtn = document.querySelector('#trash-btn');
// console.log(trashBtn);
let emptySection = document.querySelector('#empty-cart');
// console.log(emptySection);
let paySection = document.querySelector('#pay-form');
// console.log(paySection);



if (localStorage.getItem('cart')
== undefined) {
    console.log("❌ Panier vide ");
    
} else {
    console.log("✅ Voici votre panier");

    emptySection.classList.remove("d-block");
    emptySection.classList.add("d-none");

    paySection.classList.remove("d-none");
    paySection.classList.add("d-block");

}



//*********** Récupération des données du localStorage ***********//
//récupération de la key & value du localStorage --> stockées dans finalCart
let finalCart = JSON.parse(localStorage.getItem('cart'));


//********** Ajoute à la page les données récupérées de localStorage ***********//
//boucle forEach pour répeter l'action pour chaque produits
finalCart.forEach((info) => { 
    teddieImage.src = info.imageUrl;
    teddieName.innerHTML = `Lot d'un ourson ${info.name}`;
    teddiePrice.innerHTML = `${info.price} €`
});


//********** Supprime les articles du panier ***********//


// function name(params) {
    
//     suppriDOM()

//      suppriLocalStorage()
     
// }
