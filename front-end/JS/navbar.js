const toggler = document.querySelector('.navbar-toggler');
console.log(toggler);
const content = document.querySelector('#navbarSupportedContent');
console.log(content);


toggler.addEventListener("click", function () {
    content.classList.toggle('show');
})