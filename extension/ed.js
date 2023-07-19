function hideElement(ev) {
    const element = ev.target
    element.style.display = "none"
    document.body.style.overflow = ""
}

function addBorder(ev) {
    const element = ev.target
    element.style.border = "2px solid tomato"
}

function removeBorder(ev) {
    const element = ev.target
    element.style.border = ""
}
document.body.addEventListener("click", hideElement )
document.body.addEventListener("mouseover", addBorder )
document.body.addEventListener("mouseout", removeBorder )