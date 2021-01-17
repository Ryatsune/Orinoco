class Teddie {
  constructor(teddie) {
    this._id = teddie._id;
    this.name = teddie.name;
    this.imageUrl = teddie.imageUrl;
    this.description = teddie.description;
    this.price = teddie.price;
    this.colors = teddie.colors;
  }
  
  createDomProductPage() {
    const bearSection = document.getElementById("bear-section");
      //création du contenu HTML
      bearSection.innerHTML += `
          <div class="p-4"> 
            <h1 class="card-name text-center mb-5">${this.name}</h1>
            <hr>
            <!-- ===== Block img & description ===== -->
            <div>
              <img class="card-img mb-5" src="${this.imageUrl}" alt="photo de l'ours">
            
              <p class="card-description">${this.description}</p>
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
                <label for="quantity-input" class="mr-3">Quantité</label>
                <input class="col-7 col-md-6 form-control" type="number" value="1" min="1" max="10" id="quantity-input">
              </div>
            </div>
            <!-- ===== END Block color & quantity ===== -->
            <!-- ===== Block stock ===== -->
            <p class="text-success font-italic m-3">En stock</p>
            <!-- ===== END Block stock ===== -->
            <!-- ===== Block price & add button ===== -->
            <div class="d-flex flex-wrap mt-3">
              <p class="font-weight-bolder col-12 col-md-8">${this.price} € </p>
              <div class="d-flex flex-wrap col-12 col-md-4">
                <button class="btn btn-success" id="btn-send-cart">Ajouter au panier</button>
            </div>
            <!-- ===== END price & add button ===== -->
          </div>
        </div>
      `
  }

  handleTeddyColors() {
    const selectColor = document.querySelector("#select-color");

    //boucle pour chaque couleur du teddie & crée le contenu HTML pour l'afficher
    this.colors.forEach(color => {
      selectColor.innerHTML += `
        <option value="${color}" id="option-color">${color}</option>
      `
    });
  }
}