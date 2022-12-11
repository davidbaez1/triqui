let jugadas= new Array();
let jugador = "X"
let contador_x = 0
let contador_o = 0
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
        turno.textContent = "turno: "+jugador
        if(jugador == "O"){
            document.getElementById("contenedor-x").classList.remove("turno")
            document.getElementById("contenedor-o").classList.add("turno")
        }else{
            document.getElementById("contenedor-o").classList.remove("turno")
            document.getElementById("contenedor-x").classList.add("turno")
        }
        if(ganados(0,1,2)||ganados(3,4,5)||ganados(6,7,8)||ganados(0,3,6)||ganados(1,4,7)||ganados(2,5,8)||ganados(0,4,8)||ganados(0,5,8)||ganados(2,4,6)){
            p2.innerHTML = jugadas[i]
            fin.style.display = 'block'
            fin.innerHTML = "juego finalizado"
            document.getElementById("container-ganador").classList.remove("color")
            document.getElementById("container-ganador").classList.add("ganador")    
            document.getElementById("container-padre").classList.add("disable")
            if(jugadas[i] == "X"){
                contador_x++
                document.getElementById("ganador-x").value = +contador_x
            }else{
                contador_o++
                document.getElementById("ganador-o").value = +contador_o
            }
        }else{
            fin.style.display = 'block'
            fin.innerHTML = "no hay ganador"
        }
    })
})


btnjuegoNuevo.addEventListener("click", ()=>{
    document.querySelectorAll(".container-padre div").forEach((e)=>{
        document.getElementById(e.id).classList.remove("disable")
        e.innerHTML = ""
        jugadas = []
        document.getElementById("container-padre").classList.remove("disable")
        document.getElementById("container-ganador").classList.add("color")
        document.getElementById("container-ganador").classList.remove("ganador") 
        fin.style.display = 'none'
        p2.innerHTML = "?"
    }) 
})

