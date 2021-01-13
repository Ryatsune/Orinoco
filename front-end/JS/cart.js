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
const divItems = document.querySelector("#cart-items");
// console.log(divItems);


//affiche le bon block selon si le panier est vide ou non
if (localStorage.getItem('cart') == undefined) {
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
const finalCart = JSON.parse(localStorage.getItem('cart'));


//********** Ajoute à la page les données récupérées de localStorage ***********//
//pour chaque article présent dans le localStorage
//récupère les information & crée le contenu HTML
finalCart.forEach(item => {

    divItems.innerHTML += `
                <div class="shadow p-3 mb-5 rounded" id="${item._id}">
                    <div class="d-flex flex-row-reverse">
                        <button class="btn btn-danger btn-sm trash-btn" id="${item._id}"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="d-flex flex-wrap text-center">
                        <img src="${item.imageUrl}" alt="" class="shadow sm-img">
                    <div class="col-9 mt-5">

                        <ul class="d-flex justify-content-around list-unstyled">
                            <li>${item.name}</li>
                            <li>couleur</li>
                            <li>quantité pièces(s)</li>
                            <li>${item.price} €</li>
                        </ul>
                    </div>
                    <div>
                        <button class="btn btn-danger mt-5" id="trash-btn"><i class="fas fa-times"></i></button>
                    </div>
                </div>
                `; 
});


//********** Supprime les articles du panier ***********//


// function name(params) {
    
//     suppriDOM()

//      suppriLocalStorage()
     
// }
