/* Class de Productos Skincare */
class Productos {
    constructor (id, producto, precio, tipo) {
        this.id = id
        this.producto = producto
        this.precio = precio
        this.tipo = tipo
    }
}

/* Array que contiene Productos de Skincare */
const ProductosSkincare = [];

/* COMENTANDO ESTO TEMPORALMENTE
ProductosSkincare.push(new Productos (1, "Limpiador en Gel", 50, "limpiador"))
ProductosSkincare.push(new Productos (2, "Limpiador Espuma", 30, "limpiador"))
ProductosSkincare.push(new Productos (3, "leche limpiadora", 40, "limpiador"))
ProductosSkincare.push(new Productos (4,"serum vitamina C", 70, "serum"))
ProductosSkincare.push(new Productos (5,"serum hidratante", 80, "serum"))
ProductosSkincare.push(new Productos (6,"bloqueador gel", 60, "bloqueador"))
ProductosSkincare.push(new Productos (7,"bloqueador crema", 50, "bloqueador"))



/* Información de entrada */
let peticionProducto = document.getElementById("insertarProducto")

/* Información de salida */
let productoIngresado = document.getElementById("productoIngresado")

/* Obteniendo información de entrada */

peticionProducto.onsubmit = (e) => {
    e.preventDefault();
    let hijos = peticionProducto.children;
    ProductosSkincare.push( new Productos (hijos[0].value, hijos[1].value, hijos[2].value, hijos[3].value ));
    productoenDOM(ProductosSkincare);
    console.log(ProductosSkincare)
    localStorage.setItem('Productos', JSON.stringify(ProductosSkincare));

}



//Funcion para generar la interfaz
function productoenDOM(listaProductos) {
    productoIngresado.innerHTML="";
    for (const producto of listaProductos) {
        let divProducto= document.createElement('div');
        divProducto.innerHTML= `<p>El producto ingresado tiene el ID ${producto.id} , es  ${producto.producto} su precio es  ${producto.precio} y es de tipo ${producto.tipo} </p><hr> `; 
        productoIngresado.appendChild(divProducto);
    }
}






/* Creando elementos para el DOM desde JS 

let ListaProductos = document.getElementById("ProductosSkincare")

for (const producto of ProductosSkincare) {
    let li = document.createElement("li");
   li.innerHTML = JSON.stringify(producto);
   ListaProductos.appendChild(li);
}

*/

/* Filtro para encontrar productos menores a 50*

let Menora50 = ProductosSkincare.filter(producto => producto.precio < 50);
console.log("Estos son los productos menores a 50")
console.log(Menora50)


/* Metodo find para encontrar productos por su ID 

IDingresada = parseInt (prompt("Ingrese ID del producto"));

let IDencontrada = ProductosSkincare.find( producto => producto.id == IDingresada)

/* Mostrar ID encontrado en el HTML 

let respuestaID = document.createElement("div");
respuestaID.innerHTML = "El producto encontrado es " + JSON.stringify(IDencontrada);
document.body.appendChild(respuestaID);



/* Filtro para encontrar productos en categoría limpiador
let CategoríaIngresada = prompt("Ingrese categoría de producto: limpiador, serum o bloqueador")
let filtroLimpiador = ProductosSkincare.filter(tipo => tipo.includes("limpiador"))

if (CategoríaIngresada = "limpiador") {
    console.log(filtroLimpiador)

*/