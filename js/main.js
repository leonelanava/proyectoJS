
/* INFORMACIÓN DE PRODUCTOS */

/* Array tipos */

tiposProductos = ["Limpiador", "Serum", "Bloqueador"]

 
/* Llamada a productos  */
$.get("data/productos.json",function (respuesta, estado) {
    console.log(respuesta);
    console.log(estado);
    //Si la llamada fue existosa
    if(estado=="success"){
        //Transformamos de objeto generico a objeto Producto
        for (const generico of respuesta) {
            ProductosSkincare.push(new Productos (generico.id, generico.producto, generico.precio, generico.tipo, generico.img, generico.cantidad));            
        }
        console.log(ProductosSkincare);
        //Generamos la interfaz producto
        productosHTML(ProductosSkincare, '#productosContenedor');
    //Si la llamada no fue existosa    
    }else{
        console.log("Error en la carga de los datos");
    }   
});





/* Funcionalidad de comprar */
$('.btn-agregar').click(comprarProducto);



/* Almacenando datos del carrito */

if ("carrito" in localStorage) {
    let genericos=JSON.parse(localStorage.getItem('carrito'));
    console.log(genericos);
    for (const item of genericos) {
        carrito.push(new Productos (item.id, item.producto, item.precio, item.img, item.cantidad));                
    }            
}

console.log(carrito);

/* Mostrar información del carrito*/

carritoHTML(carrito); 

/* Mostrando filtros en HTML */
filtroTipos(tiposProductos)




