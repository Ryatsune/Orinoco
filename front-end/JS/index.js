///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// METHODE ANONYXERCES //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

//récupération de ma balise section
const objectApi = document.getElementById("bear-cards");

// await fetch pour l'accés à l'API du serveur et gen' du html
//attente réponse de la requête res
async function products(url) {
  let result = await fetch(url);
  return result.json();
}


//utilisation de l'API fetch
products("http://localhost:3000/api/teddies").then((teddies) => {

  //boucle forEach pour répeter l'action autant qu'il y a de produits
  teddies.forEach((teddie) => {
    console.log(teddie);

    //createElement à modifier, plus un a mais une div ??
    //comprendre les 4 lignes suivantes
    let link = document.createElement("a");
    link.id = "lien";
    link.href = "product.html?id=" + teddie._id;
    link.textContent = "fiche du produit";

    //création du contenu html pour les cards
    objectApi.innerHTML += `
                    <div class="card col-12 col-md-6 col-lg-4 mb-5 img-card bear">
                        <img class="card-img mt-3" src="${teddie.imageUrl}" alt="photo de l'ours">
                        <div class="card-body">
                            <h3 class="card-name">${teddie.name}</h3>
                            <p class="card-description">${teddie.description}</p>
                            <a href=${link.href} class="text-decoration-none">
                                <button class="btn btn-block btn-pink">Voir la fiche produit</button>
                            </a>
                        </div>
                    </div>
          `;    
  });
});