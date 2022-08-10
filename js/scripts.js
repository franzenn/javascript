// console.log(document.querySelector("h1"));      // PINTO POR CONSOLA EL H1 DE MI HTML
// let h1 = document.getElementById("h1");         // ACCEDO TAMBIEN AL H1 CON UN ID INVENTADO
// console.log(h1);                                // PINTO POR CONSOLA EL H1 DE MI HTML - MEDIANTE #ID
// console.log(document.querySelectorAll("h5"));   // PINTO POR CONSOLA TODOS LOS H5 DE MI HTML
// h1.classList.add("text-center")                 // MEDIANTE EL classList.add() AGREGO UNA CLASE A EL H1 LA CUAL CENTRA EL TEXTO



// h1 = document.querySelector("h1").textContent = "ESTE TITULO ES MANIPULADO POR JAVASCRIPT"    // MODIFICO EL H1 Y EL PARRAFO SIGUIENTE 
// let parrafo = document.querySelector("#DOM").textContent = "Este tambien :)"                 // PARRAFO MODIFICADO MEDIANTE .textContent

// let cards = document.querySelectorAll("h5");
// cards[0].textContent = "PRODUCTO MODIFICADO POR DOM";       //MODIFICO LAS 3 PRIMERAS CARDS
// cards[1].textContent = "PRODUCTO MODIFICADO POR DOM1";       //MEDIANTE .textContent 
// cards[2].textContent = "PRODUCTO MODIFICADO POR DOM2";

// let eliminarLogo = document.querySelector(".navbar-brand");    // ELIMINAMOS EL LOGO 
// eliminarLogo.remove();                                         // DE BOOTSTRAP

// let allH5 = document.querySelectorAll("h5");                    //CAPTURO TODOS LOS H5
// for (const todos of allH5) {                                    //LOS RECORRO CON UN For...of
//     console.log(todos.innerHTML);                               //Y LOS MUESTRO POR CONSOLA
// }

// let agregoH2 = document.querySelector("#divCreado");                //SE AGREGA AL HTML UN DIV CON UN ID #divCreado
// agregoH2.innerHTML = "<h2>HOLA, ESTE H2 FUÉ CREADO CON DOM</h2>";   //SE AGREGA MEDIANTE .innerHTML UN H2
// agregoH2.classList.add("text-center","text-danger");                //SE LES ADDEA LAS CLASES PARA CENTRARLO Y PONERLE COLOR




// let ejemplo = [                                                 //SE CREA UN ARRAY DE OBJETOS
//     {texto: "HOLA", numero:123},
//     {texto: "CHAU", numero:345},
// ];

// for(ejemplos of ejemplo){                                       //MEDIANTE UN FOR...OF SE CREA UN DIV Y DENTRO DE ESE DIV UN H3 Y UN PARRAFO CON EL TEXTO Y NUMERO DE C/ OBJETO
//     let contenedor = document.createElement("div")              //SE CREA COMO HIJO DEL BODY PARA COLOCARLO
//     contenedor.innerHTML = `<h3>${ejemplos.texto}</h3>
//     <p>${ejemplos.numero}</p>
//     `;
//     document.body.appendChild(contenedor);
// }

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
    })
})