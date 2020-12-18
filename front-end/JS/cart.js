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



//*********** Récupération des données du localStorage ***********//
// const finalCart = [];
// console.log(finalCart);

// const addToCart = finalCart.push(JSON.parse(localStorage.getItem("cart")));
// console.log(addToCart);

//récupération de la key & value du localStorage --> stockées dans finalCart
let finalCart = JSON.parse(localStorage.getItem('cart'));
console.log(finalCart);

//boucle forEach pour répeter l'action pour chaque produits
finalCart.forEach((info) => {
    
//********** Ajoute à la page les données récupérées de localStorage ***********//
    teddieImage.src = info.imageUrl;
    teddieName.innerHTML = `Lot d'un ourson ${info.name}`;
    teddiePrice.innerHTML = `${info.price} €`
});


//********** Supprime les articles du panier ***********//


// function name(params) {
    
//     suppriDOM()

//      suppriLocalStorage()
     
// }



//article panier = 0
//localStorage vide
//Ajout de 1 Norbert au panier
//localStorage = tableau des objets = Norbert  // [{name : imageUrl : Price : Descirption : ID: }] =Norbert
//récupérer la value  du localStorage
//ajout de 1 objet (carl)
//localStorage = tableau des objets = Norbert  // [{name NORBERT : imageUrl : Price : Descirption : ID:},  {name : CARL imageUrl : Price : Descirption : ID: }]
