alert("Bienvenidos a nuestro e-commerce de El CHARRO!") //  Saludo principal

let edad = 0; //  Declaracion de la variable EDAD del usuario

function pedirNombre(){  // Funcion que pide el nombre de usuario
    edad = prompt("Para ingresar primero diganos a continuación su edad: ")
}
function saludar(nombre, apellido, edad, lugar){  // Funcion que realiza el saludo del usuario con las variables
    console.log("Hola "+nombre+" "+apellido+" con "+edad+" años de edad, que vive en "+lugar+". Espero que disfrutes nuestra pagina!")
    alert("Hola "+nombre+" "+apellido+" con "+edad+" años de edad, que vive en "+lugar+". Espero que disfrutes nuestra pagina!")
}

pedirNombre()  // LLAMO A LA FUNCION PARA PEDIRLE EL NOMBRE AL USUARIO 

while (edad<18){  // SI LA EDAD ES MENOR A 18 NO PERMITE ENTRAR AL USUARIO Y VUELVE A PREGUNTAR SI YA ES MAYOR
    alert("Disculpe, no puede ingresar siendo menor de edad.")
    let yaEsMayor = prompt("Ya es mayor de edad? Reponda con SI/NO")
    if(yaEsMayor=="si" || yaEsMayor=="SI"){
        edad = prompt("Que edad tiene?")  // SI VUELVE A CONTESTAR <18 SIGUE EN EL BUCLE WHILE, DE LO CONTRARIO SALE DEL BUCLE.
    }   
}

let seguridad = parseInt(prompt("Okey, para asegurarnos de que en realidad es mayor de edad diganos el año de su nacimiento..."))

if(seguridad<2004){  // SI LA DECLARACION DE LA VARIABLE seguridad ES MENOR A 2004 (MAYOR DE EDAD) PUEDE INGRESAR A LA PAGINA.
    alert("Disfruta de nuestra pagina!")
}
else{  // SI LA DECLARACION DE seguridad ES MAYOR A 2004 (MENOR DE EDAD) = BUCLE INFINITO DEL QUE NO PUEDE SALIR.
    while(seguridad>2004){
        alert("Te vas de mi pagina.")
    }
}

let nombre = prompt("Como es tu nombre?")
let apellido = prompt("Como es tu apellido?")
let lugar = prompt("De que país sos?")

saludar(nombre, apellido, edad, lugar) // PASO POR PARAMETRO LAS VARIABLES NOMBRE, APELLIDO, EDAD Y LUGAR PARA REALIZAR LA FUNCION saludar AL USUARIO.
