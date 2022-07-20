function Persona (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
    
    const productos = [];
    
    alert("Bienvenido a nuestra tienda online");
    let nombre = prompt("Cual es su nombre?");
    let apellido = prompt("Cual es su apellido?");
    
    const cliente = new Persona (nombre, apellido)
    
    
    alert("Hola "+ cliente.nombre);
    
    
    let pedirProducto = prompt("Quiere ingresar un producto a su carrito? SI/NO");
    
    while(pedirProducto == "SI" || pedirProducto == "si" || pedirProducto == "Si"){
        productos.push(prompt("Ingrese producto"));
        pedirProducto = prompt("Quiere ingresar otro producto? SI/NO");
    }
    
    alert("Su carrito contiene: "+productos);
    
    let confirmacion = prompt("Quiere agregar mas productos a su carrito?");
    
    while(confirmacion == "SI" || confirmacion == "si"){
        productos.push(prompt("Ingrese producto"));
        confirmacion = prompt("Quiere ingresar otro producto? SI/NO");
    }
    if(confirmacion=="no" || confirmacion=="NO"){
        alert("Perfecto, ya termino de hacer sus compras!")
    }
    alert("Se va a llevar los siguientes productos: "+productos);
    
    let eliminar = prompt("Quiere eliminar algun producto? SI/NO");
    
    while (eliminar=="si"  ||  eliminar=="SI"){
        let productoAEliminar = prompt("¿Cual?");
        let index = productos.indexOf(productoAEliminar);
        if(index != -1){
            productos.splice(index,1)
        }
        eliminar = prompt("Quiere eliminar algun otro producto?");
    }
    
    alert("Su carrito contiene: "+productos); 