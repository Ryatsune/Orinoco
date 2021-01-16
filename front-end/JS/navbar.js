//récupération de la nav et du menu
const toggler = document.querySelector('.navbar-toggler');
const content = document.querySelector('#navbarSupportedContent');

//écoute de l'évènement click sur le bouton burger
//toggle le menu
toggler.addEventListener("click", function () {
    content.classList.toggle('show');
})