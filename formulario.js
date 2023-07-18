const inputusuario = document.getElementById("password")
inputusuario.onclick= useronclick
inputusuario.onmouseover = useronhover

function useronclick (){
    const arts = document.getElementById("formulario")
    const parr = document.createElement("p")
    parr.innerText="El usuario ha dado click"
    arts.appendChild(parr)
   
}

function useronhover (){
    const arts = document.getElementById("formulario")
    const parr = document.createElement("p")
    parr.innerText="El usuario ha pasado el mouse"
    arts.appendChild(parr)

    inputusuario2.removeEventListener("mouseover", useronhover)
}

const inputusuario2 = document.getElementById("username")
inputusuario2.addEventListener("click", useronclick)
inputusuario2.addEventListener("mouseover", useronhover)

inputusuario2.removeEventListener("mouseover", useronhover)