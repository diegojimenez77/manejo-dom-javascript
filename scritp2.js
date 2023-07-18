function addparrafo(){
    const div = document.getElementById("articles")
    const parr = document.createElement("p")
    parr.innerText = "Este parrafo se creo al dar click"

    div.appendChild(parr)
}