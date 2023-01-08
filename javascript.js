const nav = document.querySelector('.navbar')
const btnzin = document.querySelector('.caixa')
btnzin.addEventListener("click", depois)
btnzin.addEventListener("touchstart", depois)

function depois(event) {
   
    if (event.type === "touchstart") event.preventDefault()
    nav.classList.toggle("active")
}
