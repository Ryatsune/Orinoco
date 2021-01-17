let emptySection = document.querySelector('#empty-cart');
let paySection = document.querySelector('#pay-form');
const divItems = document.querySelector("#cart-items");

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

function buildTeddieCards() {
    //récupération de la key & value du localStorage --> stockées dans finalCart
    const finalCart = JSON.parse(localStorage.getItem('cart'));
    
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
                            <div class="mt-4 col-md-9">
                                <ul class="d-flex flex-wrap justify-content-around list-unstyled">
                                    <li class="col-12 col-md-auto pr-0">${item.name}</li>
                                    <li class="col-12 col-md-auto pr-0">${item.color}</li>
                                    <li class="col-12 col-md-auto pr-0">${item.price} € (unité)</li>
                                    <li class="col-12 col-md-auto pr-0">${item.quantity} pièces(s)</li>
                                    <li class="col-12 col-md-auto pr-0 cart-price">${item.quantity * item.price}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `;
    });   
}
buildTeddieCards();


//********** Récupère les prix de chaque item & les additionne pour afficher le total  ***********//
function addition() {
    //récupération des li contenant les prix de chaque item
    let allPrices = document.querySelectorAll('.cart-price');
    let price = [];
    //boucle permettant de récupérer toutes les valeurs et les push dans le tableau
    for (let i = 0; i < allPrices.length; i++) {
        price.push(allPrices[i].innerHTML);
    }
    //converti les strings en number et les additionne
    const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
    divItems.innerHTML += `
                    <hr>
                    <div>
                        <ul class="d-flex justify-content-around list-unstyled">
                            <li class="font-weight-bolder">MONTANT TOTAL : </li>
                            <li class="font-weight-bolder">${price.reduce(reducer)} €</li>
                        </ul>
                    </div>
                    <hr>
                    `;
    localStorage.setItem('finalPrice', price.reduce(reducer));
}
addition();     

//********** Supprime les articles du DOM ***********//
function removeElement() {
    const trashBtn = document.querySelectorAll('button.trash-btn');
    //boucle permettant la suppression de la div au clic sur le bouton (de cette même div)
    for (let i = 0; i < trashBtn.length; i++) {
        trashBtn[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.parentNode.remove();
            let idTrash = trashBtn[i].id;
            removeElementFromCart(idTrash);
            document.location.reload();
        }, false);
    }
}
removeElement();

//********** Supprime les articles du panier ***********//
function removeElementFromCart(id) {
    
    //récupération de mon panier dans le localStorage
    let updateCart = JSON.parse(localStorage.getItem('cart'));

    //boucle qui selon la longueur de mon tableau 
    //compare si l'id de ma div est identique à l'id de mon objet
    //supprime la div si true ou supprime la key si le tableau est vide
    for (let i = 0; i < updateCart.length; i++) {
        if (id == updateCart[i]._id) {
            updateCart.splice(i, 1);
        }
    }

    //push le tableau mis à jour dans le localStorage
    localStorage.setItem('cart', JSON.stringify(updateCart));

    //supprime la key cart si il est vide et recharge la page
    if (updateCart.length === 0) {
        localStorage.removeItem('cart');
        window.location.reload();
    }
}