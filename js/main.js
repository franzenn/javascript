let total = parseInt(prompt("Cuantos examenes tuviste en tu ultima materia?"));

let numeroIngresado = parseInt(prompt("Ingresa todas tus notas y te dire tu promedio"))

let contador=+numeroIngresado;

for(let i=1;i<total;i++){
    contador+=numeroIngresado;
    numeroIngresado=parseInt(prompt("Ingresa otra nota"));
}

let promedio = contador/total;
alert("Su promedio es de: "+ promedio);

if(promedio<7){
    let estudiaste=prompt("Decime la verdad, estudiaste?");
        while(estudiaste=="si"){
            estudiaste=prompt("No me mientas!!!")
        }
        if(estudiaste=="no"){
            alert("Ponete las pilas!!!")
        }
}
else{
    alert("Felicitaciones por aprobar la materia!")
}
