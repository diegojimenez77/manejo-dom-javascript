function addparrafo(){
    const div = document.getElementById("articles")
    const parr = document.createElement("p")
    parr.innerText = "Este parrafo se creo al dar click"

    div.appendChild(parr)
}

const abrir = document.getElementById("abrir")
const cerrar = document.getElementById("cerrar")

let ventana

abrir.addEventListener("click",() => {
    ventana = window.open("https://ed.team", "_blank", "width=500, height=300")
})

cerrar.addEventListener("click", () => {
    ventana.close()
})