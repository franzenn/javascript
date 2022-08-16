//OPERADORES AVANZADOS AND, OR Y TERNARIO

Swal.fire("BIENVENIDO A EL CHARRO ONLINE!");

  
// let edad = Number(prompt("Indique su edad"));
// const añoNacimiento = 2022 - edad;

// if(edad>0){
// edad >= 18 ? alert("PUEDE COMPRAR ALCOHOL!") : alert("Es menor de edad, no puede comprar alcohol");
// }
// edad > 0 && console.log("El usuario nació en: "+ añoNacimiento);
// console.log(edad || "No ingreso edad");

//DESESTRUCTURACIÓN

const usuario = {
    nombre: "Franco",
    edadUsuario: 24,
    año: 1998,
    estudiante: "Coderhouse"
}
const {nombre, edadUsuario, año, estudiante} = usuario;
console.log("Hola "+nombre+"!");


//SPREAD

const segundoUsuario = {
    ...usuario,
    nombre: "Ivan",
    edadUsuario: 20, 
    año: 2002,
    dni: 40994230
}
console.log(segundoUsuario);


//INICIO CARRITO

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("sumarCarrito").innerHTML = `${carrito.length}  - $${total}`;

const productosDeCards = [
    {id:1, title:"TACOS", img:"img/taco.jpg", price:1000, category:"Mexicano"},
    {id:2, title:"BURRITO", img:"img/burritos.jpg", price:1500, category:"Mexicano"},
    {id:3, title:"ENSALADA", img:"img/ensalada.png", price:900, category:"Light"},
    {id:4, title:"PAPAS CHARRO", img:"img/entrada.png", price: 770, category:"Entradas"},
    {id:5, title:"HAMBURGUESA CHARRO", img:"img/hamburguesa.png", price: 1100, category:"Hamburguesa"},
    {id:6, title:"BEBIDAS PEPSI", img:"https://jrdistribution.com.ar/wp-content/uploads/2018/10/lineA-500-600x504.jpg", price: 330, category:"Bebidas"},
];

function filtrarProductosPorCategoria(categoria) {
    document.getElementById("cardsDOM").innerHTML="";
    const productosFiltrados = productosDeCards.filter((producto) => producto.category === categoria);

    productosFiltrados.forEach((producto) => { 
        document.getElementById("cardsDOM").innerHTML = "";
        const idBoton = `add-cart${producto.id}`   
        document.getElementById("cardsDOM").innerHTML += `
                <div class="col-4 card container m-3 mx-auto">
                    <h2 class='text-center'>${producto.title}</h2>
                    <img src="${producto.img}">
                    <h3 class="text-center text-danger">${"$"+producto.price}</h3>
                    <button id="${idBoton}">Agregar al carrito</button>
                </div>`
    })
}



productosDeCards.forEach((producto) => { 
    const idBoton = `add-cart${producto.id}`   
    document.getElementById("cardsDOM").innerHTML += `
            <div class="col-4 card container m-3 mx-auto">
                <h2 class='text-center'>${producto.title}</h2>
                <img src="${producto.img}">
                <h3 class="text-center text-danger">${"$"+producto.price}</h3>
                <button id="${idBoton}">Agregar al carrito</button>
            </div>`
})

productosDeCards.forEach((producto) => {
    const idBoton = `add-cart${producto.id}`
    document.getElementById(idBoton).addEventListener('click', () => { 
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
        document.getElementById("sumarCarrito").innerHTML = `(${carrito.length})  - $${total}`;
        Swal.fire({
            title: 'Perfecto!',
            text: 'Haz agregado al carrito',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    })
})