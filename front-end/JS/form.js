let inputLastName = document.querySelector('#name');
let inputFirstName = document.querySelector('#firstname');
let inputAddress = document.querySelector('#address');
let inputCity = document.querySelector('#city');
let inputEmail = document.querySelector('#email');
let formSubmit = document.querySelector('#form');

//récupération du cart localStorage
let cart = JSON.parse(localStorage.getItem('cart'));

//définition d'un tableau vide pour stocker les id des teddies
// présents dans le cart
let productsArray = [];

//boucle permettant la récupération des id de teddie
//présents dans le cart et push dans tableau ProductsArray
for (let i = 0; i < cart.length; i++) {
    productsArray.push(cart[i]._id);
}

//au clic sur le bouton "Valider la commande"
//construit l'objet data grâce à la récupération de la saisie input
//et la récupération du tableau productsArray pour les id de teddies
//effectue une méthode POST via la methode Fetch
//renvoi la réponse sous forme d'alerte
formSubmit.addEventListener('submit', function logDatas(e) {
    e.preventDefault();

    const data = {
        'contact': {
            'firstName': inputFirstName.value,
            'lastName': inputLastName.value,
            'address': inputAddress.value,
            'city': inputCity.value,
            'email': inputEmail.value
        },
        'products': productsArray
    }
    
    console.log(data);
    
    let promise = fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(response => {
        //initialise la variable orderId et lui associe la valeur orderId de la response
        let orderId = response.orderId;
        //ajoute au localStorage la key orderId et la valeur de la variable précédemment crée
        localStorage.setItem('orderNum', orderId);
        //renvoi ver la page de confirmation de commande
        window.location.href='confirmation.html';
    })
    .catch(error => alert("Erreur : " + error));
})