
console.log(document.body.children[0].innerHTML = "hola")
document.body.children[1].children[0].innerText = "Nuvo texto"

const animation = () => {
    if(document.body.style.backgroundColor === "aqua"){
        document.body.style.backgroundColor = "tomato"
    } else {
        document.body.style.backgroundColor = "aqua"
    }
}

setInterval(animation, 1000)