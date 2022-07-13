alert("Bienvenidos a nuestro e-commerce de El CHARRO!")
let edad = prompt("Para ingresar primero diganos a continuación su edad: ")

while (edad<18){
    alert("Disculpe, no puede ingresar siendo menor de edad.")
    let yaEsMayor = prompt("Ya es mayor de edad? Reponda con SI/NO")
    if(yaEsMayor=="si" || yaEsMayor=="SI"){
        edad = prompt("Que edad tiene?")
    }   
}

let seguridad = parseInt(prompt("Okey, para asegurarnos de que en realidad es mayor de edad diganos el año de su nacimiento..."))

if(seguridad<2004){
    alert("Disfruta de nuestra pagina!")
}
else{
    while(seguridad>2004){
        alert("Te vas de mi pagina.")
    }
}