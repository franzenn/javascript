function Persona (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
    
    const productos = [];
    
    alert("Bienvenido a nuestra tienda online");
    let nombre = prompt("Cual es su nombre?");
    let apellido = prompt("Cual es su apellido?");
    
    const cliente = new Persona (nombre, apellido)
    
    
    alert("Hola "+ cliente.nombre.toUpperCase());

    
    let pedirProducto = prompt("Quiere ingresar un producto a su carrito? SI/NO");
    
    while(pedirProducto.toUpperCase() === "SI"){
        productos.push(prompt("Ingrese producto"));
        pedirProducto = prompt("Quiere ingresar otro producto? SI/NO");
    }
    
    alert("Su carrito contiene: "+productos);
    
    let confirmacion = prompt("Quiere agregar mas productos a su carrito?");
    
    while(confirmacion.toUpperCase() == "SI"){
        productos.push(prompt("Ingrese producto"));
        confirmacion = prompt("Quiere ingresar otro producto? SI/NO");
    }
    if(confirmacion.toUpperCase() == "NO"){
        alert("Perfecto, ya terminó de hacer sus compras!")
    }
    alert("Se va a llevar los siguientes productos: " + productos);
    
    let eliminar = prompt("Quiere eliminar algun producto? SI/NO");
    
    while (eliminar.toUpperCase() =="SI"){
        let productoAEliminar = prompt("¿Cual?");
        let index = productos.indexOf(productoAEliminar);
        if(index != -1){
            productos.splice(index,1)
        }
        eliminar = prompt("Quiere eliminar algun otro producto?");
    }
    
    alert("Su carrito contiene: "+productos); 



    productos.forEach( (producto) => {   //MUESTRA POR CONSOLA LOS PRODUCTOS DEL ARRAY MEDIANTE UN FOREACH
        console.log(producto);
    })


    const resultado = productos.find((el) => el =="coca cola");    //EN CASO DE AGREGAR AL ARRAY "coca cola" Y "fernet" 
    const resultado2 = productos.find((el) => el =="fernet");      //POR ALERT SE MUESTRA UN MENSAJE OCULTO

    if(resultado!=undefined && resultado2!=undefined){
        alert("Salio fernet con coca? :D");
    }


    const filtro = productos.filter((el)=> el.includes('zapatillas'));  //SE FILTRAN TODOS LOS PRODUCTOS DEL ARRAY QUE CONTENGAN "zapatillas"
    console.log(filtro);                                                //LOS MUUESTRA POR CONSOLA

    
