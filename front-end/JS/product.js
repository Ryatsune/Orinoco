let idParametre = window.location.search;  // récupération de l'ID

// ///////////////////////////////////////////////////////
// ///////////////////////// New /////////////////////////
// ///////////////////////////////////////////////////////

async function product(url) {
  let result = await fetch(url);
  return result.json();
}

//appel à l'API fetch avec en callback l'API des teddies
//si resolve alors .then s'execute
product("http://localhost:3000/api/teddies").then((teddies) => {

  //boucle forEach pour répeter l'action autant qu'il y a de produits
  teddies.forEach((teddie) => {

    //pour chaque teddie compare l'id avec idParametre récupéré dans l'Url
    if ('?id=' + teddie._id === idParametre) {

      let teddieObject = new Teddie(teddie);
      teddieObject.createDomProductPage();
      teddieObject.handleTeddyColors();

      //récupération du bouton ajouter au panier
      const addBtn = document.querySelector('#btn-send-cart')

      //écoute de l'évènement au click sur le bouton
      addBtn.addEventListener('click', btnSendCart);

      //au clic déclenche les fonctions addToNewCart & updateNewCart
      function btnSendCart() {
        addToNewCart(); 
      }

      
      //fonction push mon objet -> tableau & stock mon tableau dans le localStorage
      function addToNewCart() {

        //variable cartUser contient les infos de teddie
        let cartUser = teddie;

        // check if in localStorage
        isInCart = false;
        let cartArray = JSON.parse(localStorage.getItem('cart'));
        if (cartArray) {               
          for (let i = 0; i < cartArray.length; i++) {
            if (cartUser._id == cartArray[i]._id) {
              isInCart = true;
            }
          }
        }


        const quantity = document.querySelector('#quantity-input');
        const color = document.querySelector("#select-color").options[document.querySelector("#select-color").selectedIndex];

        //condition si le panier est vide
        if (localStorage.getItem('cart') == undefined) {
          //créer un tableau
          const newCart = [];
          //ajoute la quantité & la couleur choisie à l'objet
          cartUser.quantity = quantity.value;
          cartUser.color = color.text;    
          //ajoute cartUser dans le tableau newCart
          newCart.push(cartUser);
          //envoi le tableau newCart au localStorage 
          localStorage.setItem('cart', JSON.stringify(newCart));
          console.log("Etape 1 : Array crée et teddie ajouté");
          //notifie l'utilisateur avec une alerte
          alert('Panier crée et article ajouté au panier !');
        } else if (isInCart) {
          console.log("Etape 2 : Teddie déjà présent dans l'array");
          alert('Cet article a déjà été ajouté au panier');
        } else {
          //récupération de la key & value du localStorage --> stockées dans finalCart
          let finalCart = JSON.parse(localStorage.getItem('cart'));
          console.log(finalCart);
          //ajoute la quantité & la couleur choisie à l'objet
          cartUser.quantity = quantity.value;
          cartUser.color = color.text;      
          //ajoute cartUser dans le tableau finalCart
          finalCart.push(cartUser);
          //envoi le tableau newCart au localStorage 
          localStorage.setItem('cart', JSON.stringify(finalCart));
          console.log("Etape 3 : Ajout du nouveau teddie à l'array");
          //notifie l'utilisateur avec une alerte
          alert('Article ajouté au panier !');
        }        
      }
    }
  });
});