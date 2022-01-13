
/* INFORMACIÓN DE PRODUCTOS */

/* Array tipos */

tiposProductos = ["Limpiador", "Serum", "Bloqueador"]


/* Añadiendo los objetos al array global  
ProductosSkincare.push(new Productos (1, "Limpiador en Gel", 50, tiposProductos[0], "https://i.ibb.co/vmL6zGK/pexels-photo-5797994.jpg"));
ProductosSkincare.push(new Productos (2, "Limpiador Espuma", 30, tiposProductos[0], "https://i.ibb.co/xS9mh79/pexels-photo-4735905.jpg"))
ProductosSkincare.push(new Productos (3, "leche limpiadora", 40, tiposProductos[0], "https://i.ibb.co/rxKHVwp/pexels-photo-7319145.jpg"))
ProductosSkincare.push(new Productos (4,"serum vitamina C", 70, tiposProductos[1], "https://i.ibb.co/FJJSQpm/pexels-photo-8131586.jpg"))
ProductosSkincare.push(new Productos (5,"serum hidratante", 80, tiposProductos[1], "https://i.ibb.co/8N2YPf2/pexels-photo-5069440.jpg"))
ProductosSkincare.push(new Productos (6,"bloqueador gel", 60, tiposProductos[2], "https://i.ibb.co/vzVv0BF/pexels-photo-8155447.jpg"))

 
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



/* Añadiendo estos productos al HTML 
productosHTML(ProductosSkincare, '#productosContenedor'); */


/* Mostrando filtros en HTML */
filtroTipos(tiposProductos)


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




