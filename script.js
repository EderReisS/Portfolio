var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu") /* todos elementos do container com classe menu*/
})