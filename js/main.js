/* INFORMACIÓN DE PRODUCTOS */

/* Array tipos */

tiposProductos = ["Limpiador", "Serum", "Bloqueador"]



/* Añadiendo los objetos al array global  */

ProductosSkincare.push(new Productos (1, "Limpiador en Gel", 50, tiposProductos[0], "https://i.ibb.co/vmL6zGK/pexels-photo-5797994.jpg"));
ProductosSkincare.push(new Productos (2, "Limpiador Espuma", 30, tiposProductos[0], "https://i.ibb.co/xS9mh79/pexels-photo-4735905.jpg"))
ProductosSkincare.push(new Productos (3, "Leche Limpiadora", 40, tiposProductos[0], "https://i.ibb.co/rxKHVwp/pexels-photo-7319145.jpg"))
ProductosSkincare.push(new Productos (4,"Serum vitamina C", 70, tiposProductos[1], "https://i.ibb.co/FJJSQpm/pexels-photo-8131586.jpg"))
ProductosSkincare.push(new Productos (5,"Serum hidratante", 80, tiposProductos[1], "https://i.ibb.co/8N2YPf2/pexels-photo-5069440.jpg"))
ProductosSkincare.push(new Productos (6,"Bloqueador gel", 60, tiposProductos[2], "https://i.ibb.co/vzVv0BF/pexels-photo-8155447.jpg"))




/* Añadiendo estos productos al HTML */
productosHTML(ProductosSkincare, '#productosContenedor');



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




