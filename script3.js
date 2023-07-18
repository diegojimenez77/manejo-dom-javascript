const poster = document.getElementById("poster");
const file = poster.src;

const blur = document.querySelector("#blur")
blur.style.backgroundImage = `url(${file})`

const flecha = document.getElementById("flecha")
const menu = document.getElementById("mainMenu")

flecha.addEventListener("click",()=>{
    // if(menu.classList.contains("hide")){
    //     menu.classList.remove("hide")
    // }else{
    //     menu.classList.add("hide")
    // }
    menu.classList.toggle("hide")
})