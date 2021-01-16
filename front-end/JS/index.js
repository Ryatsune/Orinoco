//récupération de ma balise section
const objectApi = document.getElementById("bear-cards");

//attend la réponse de la requête à l'API et retourne le résultat au format json
async function ajaxGet(url) {
  let result = await fetch(url);
  return result.json();
}

//pour chaque teddie de l'API
//crée le contenu HTML pour afficher des cards
//contenant les informations de l'API
function displayTeddies(url) {
  //utilisation de l'API fetch
  ajaxGet(url).then((teddies) => {

    teddies.forEach((teddie) => {
      let link = document.createElement("a");
      link.id = "lien";
      link.href = "product.html?id=" + teddie._id;
      link.textContent = "fiche du produit";
      
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
}
displayTeddies("http://localhost:3000/api/teddies");