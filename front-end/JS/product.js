let idParametre = window.location.search;  // récupération de l'ID
//   // console.log(idParametre);                  // ?id=5be9c8541c9d440000665243
  
//   // if (idParametre === '?id=5be9c8541c9d440000665243') {
//     //   console.log('ourson 1');
//     // } else if (idParametre === '?id=5beaa8bf1c9d440000a57d94') {
//       //   console.log('ourson 2');
//       // } else if (idParametre === '?id=5beaaa8f1c9d440000a57d95') {
//         //   console.log('ourson 3');
//         // } else if (idParametre === '?id=5beaabe91c9d440000a57d96') {
//           //   console.log('ourson 4');
//           // } else if (idParametre === '?id=5beaacd41c9d440000a57d97') {
//             //   console.log('ourson 5');
// // }


// ///////////////////////////////////////////////////////
// ///////////////////////// New /////////////////////////
// ///////////////////////////////////////////////////////


const bearSection = document.getElementById("bear-section");

async function product(url) {
  let result = await fetch(url);
  return result.json();
}

//appel à l'API fetch avec en callback l'API des teddies
//si resolve alors .then s'execute
product("http://localhost:3000/api/teddies").then((teddies) => {

  //boucle forEach pour répeter l'action autant qu'il y a de produits
  teddies.forEach((teddie) => {
    //console.log(teddie);

    
    //pour chaque teddie compare l'id avec idParametre récupéré dans l'Url
    if ('?id=' + teddie._id === idParametre) {

      //création du contenu HTML
      bearSection.innerHTML += `

                      <div class="p-4"> 
                        <h1 class="card-name text-center mb-5">${teddie.name}</h1>
                        <hr>
                        <!-- ===== Block img & description ===== -->
                        <div>
                          <img class="card-img mb-5" src="${teddie.imageUrl}" alt="photo de l'ours">
                        
                          <p class="card-description">${teddie.description}</p>
                        </div>
                        <hr>
                        <!-- ===== END Block img & description ===== -->
                        <!-- ===== Block color & quantity ===== -->
                        <div class="d-flex flex-wrap col-12 mt-4">
                          <div class="d-flex col-12 col-md-6 mb-3">
                            <label for="color" class="mr-3">Couleur</label>
                            <select name="color" class="form-control col-8 col-md-6" id="select-color"></select>
                          </div>
                          <div class="d-flex col-12 col-md-6 form-group">
                            <label for="example-number-input" class="mr-3">Quantité</label>
                            <input class="col-7 col-md-6 form-control" type="number" value="1" min="1" max="10" id="example-number-input">
                          </div>
                        </div>
                        <!-- ===== END Block color & quantity ===== -->
                        <!-- ===== Block stock ===== -->
                        <p class="text-success font-italic m-3">En stock</p>
                        <!-- ===== END Block stock ===== -->
                        <!-- ===== Block price & add button ===== -->
                        <div class="d-flex flex-wrap mt-3">
                          <p class="font-weight-bolder col-12 col-md-8">${teddie.price} € </p>
                          <div class="d-flex flex-wrap col-12 col-md-4">
                            <button class="btn btn-success" id="btn-send-cart">Ajouter au panier</button>
                        </div>
                        <!-- ===== END price & add button ===== -->
                      </div>
                    </div>
      `

      //***** Récupération du select via ID et stockage dans const *****//
      const selectColor = document.querySelector("#select-color");

      //***** Boucle forEach pour chaque couleur selon le teddie *****//
      teddie.colors.forEach(color => {
        selectColor.innerHTML += `
          <option value="${color}">${color}</option>
        `
      });



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

        //condition si le panier est vide
        if (localStorage.getItem('cart')
        == undefined) {
          //créer un tableau
          const newCart = [];
          //ajoute cartUser dans le tableau newCart
          newCart.push(cartUser);
          //envoi le tableau newCart au localStorage 
          localStorage.setItem("cart", JSON.stringify(newCart));
          console.log("Etape 1 : Array crée et teddie ajouté");
          //notifie l'utilisateur avec une alerte
          alert('Article ajouté au panier !');
        // } else if (cartUser == se trouve déjà dans mon tableau) {
        } else if (isInCart) {
          console.log("Etape 2 : Teddie déjà présent dans l'array");
          alert('Cet article a déjà été ajouté au panier');
        } else {
          //récupération de la key & value du localStorage --> stockées dans finalCart
          let finalCart = JSON.parse(localStorage.getItem('cart'));
          //ajoute cartUser dans le tableau finalCart
          finalCart.push(cartUser);
          //envoi le tableau newCart au localStorage 
          localStorage.setItem("cart", JSON.stringify(finalCart));
          console.log("Etape 3 : Ajout du nouveau teddie à l'array");
          //notifie l'utilisateur avec une alerte
          alert('Article ajouté au panier !');
        }        
      }
    }
  });
});


// //Add un article au localStorage
//     //localStorage.setItem('clé', 'valeur');

// //Lecture de l'article localStorage
//     //sessionStorage.getItem('clé');

// //Suppression de l'élément localStorage
//     //localStorage.removeItem('clé');

// //Suppression de tous les éléments de localStorage
//     //localStorage.clear();

// //Add array localStorage
//     //let colors = ["red", "blue", "green"];
//     //localStorage.setItem("my_colors", JSON.stringify(colors));

// //lecture d'un tableau localStorage
//     //JSON.parse(localStorage.getItem(my_colors));

// //Vérifier le localStorage
//     //if(typeof(Storage !== "undefined") {
//       //Code pour localStorage
//     //} else {
//       //Le navigateur ne supporte pas localStorage
//     //}
//     //})