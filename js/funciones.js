
/* Función para generar productos en HTML */

function productosHTML(Productos, id){
    $(id).empty();
    for (const producto of Productos) {
       $(id).append(`<div class="col-lg-4 col-md-4 col-sm-12">
       <div class="card m-3" style="width: 18rem;">
                      <img src= "${producto.img}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${producto.producto}</h5>
                        <p class="card-text">Precio: ${producto.precio}</p>    
                        <p class="card-text">Categoría: ${producto.tipo}</p>                    
                        <a href="#" id='${producto.id}' class="btn btn-primary btn-agregar">Agregar a carrito</a>
                      </div>
                    </div>
                    </div>`);
    }
  }


/* Función para comprar producto */

function comprarProducto(e){
    e.preventDefault();
    const idProducto   = e.target.id;
    const existe = carrito.find(producto => producto.id == idProducto);
    if(existe == undefined){
      const seleccionado = ProductosSkincare.find(producto => producto.id == idProducto);
      carrito.push(seleccionado);
    }else{
      existe.agregarCantidad(1);
    }
    /* Se guarda en el storage */
    localStorage.setItem('carrito',JSON.stringify(carrito));
    /* Se muestra en el carrito */
    carritoHTML(carrito);
  }

/* Función para mostrar carrito en el HTML  */

function carritoHTML(productos){
  $('#carritoCantidad').html(productos.length);
  $('#carritoProductos').empty();
  for (const producto of productos) {
    $("#carritoProductos").append(`
    <p> ${producto.producto} 
    <span class="badge bg-secondary"> $ ${producto.precio}</span>
    <span class="badge bg-secondary"> Cantidad: ${producto.cantidad}</span>
    <span class="badge bg-secondary"> Subtotal: ${producto.subTotal()}</span>                                    
    </p>`);
}
}

/* Filtro de tipos de Producto */


function filtroTipos(lista) {
  $('#filtroProductos').append(`<option selected>Todos</option>`)
  for (const tipo of lista) {
    $('#filtroProductos').append(`<option> ${tipo} </option>`)
  }
}

$('#filtroProductos').change(function () {
  if (this.value != "Todos") {
  console.log(this.value)
  const encontradosProductos = ProductosSkincare.filter (producto => producto.tipo == this.value)
  productosHTML(encontradosProductos, '#productosContenedor')
} else {
  productosHTML(ProductosSkincare, '#productosContenedor')
}
})
