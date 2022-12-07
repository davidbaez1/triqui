let jugadas=[]
let jugador = "X"
function ganados(e,i,o){
    if(jugadas[e] == jugadas[i] && jugadas[i] == jugadas[o] && jugadas[o] != null ){
        return true
    }
    return false
}
document.querySelectorAll(".container-padre div").forEach((e,i)=>{
    e.addEventListener("click",(event)=>{
        event.target.textContent = jugador
        event.target.classList.add("disable")
        jugadas[i] = jugador
        jugador = jugador === "X"?"O":"X"
        turno.innerHTML = "turno: "+jugador
        if(ganados(0,1,2)||ganados(3,4,5)||ganados(6,7,8)||ganados(0,3,6)||ganados(1,4,7)||ganados(2,5,8)||ganados(0,4,8)||ganados(0,5,8)||ganados(2,4,6)){
            p2.innerHTML = jugadas[i]
            fin.innerHTML = "juego finalizado"
            turno.style.display = "none"
            document.getElementById("container-ganador").classList.remove("color")
            document.getElementById("container-ganador").classList.add("colorGanador")    
            document.getElementById("container-padre").classList.add("disable")
        }
    })
})


btnjuegoNuevo.addEventListener("click", ()=>{
    document.querySelectorAll(".container-padre div").forEach((e,i)=>{
        e.innerHTML = ""
        jugadas = []
        location.reload()
    }) 
})

