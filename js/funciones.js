



/* PRODUCTOS EN HTML */

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


/* COMPRAR PRODUCTO */

function comprarProducto(e){
    e.preventDefault();
    $("#mensajeCompra").fadeIn(1000).delay(2000).fadeOut(1000); 
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


/* CARRITO EN HTML */

function carritoHTML(productos){
  $('#carritoCantidad').html(productos.length);
  $('#carritoProductos').empty();

   //Mostrando carrito en HTML
  for (const producto of productos) {
    $("#carritoProductos").append(registroCarrito(producto))
      } 

      //Manejadores de cantidades
  $('.btn-delete').on('click', eliminarCarrito);
  $('.btn-add').on('click', addCantidad);
  $('.btn-sub').on('click', subCantidad);

     //Confirmación de compra
  $('#carritoProductos').append("<button id='btnConfirmar'>Confirmar</button>");
  $("#btnConfirmar").click(enviarCompra);
    }


//Funcion para enviar un POST y vaciar carrito
function enviarCompra() {
  $.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(carrito), function (respuesta, estado) {
    console.log(respuesta);
    console.log(estado);
    
    if (estado == "success") {
      $("#mensajeCompra").html("Se realizó la compra");
      $("#mensajeCompra").fadeIn(2000).fadeOut(2000);
      $("#carritoProductos").empty();
      $('#carritoCantidad').html("0");
    
      
      localStorage.clear();
      carrito.splice(0,carrito.length);      
    }
  } );
  
}



/* Registro carrito */
function registroCarrito(producto) {
  return `<p> ${producto.producto} 
  <span class="badge bg-secondary"> $ ${producto.precio}</span>
  <span class="badge bg-secondary"> Cantidad: ${producto.cantidad}</span>
  <span class="badge bg-secondary"> Subtotal: ${producto.subTotal()}</span> 
  <a id="${producto.id}" class="btn btn-info btn-add">+</a>
            <a id="${producto.id}" class="btn btn-warning btn-sub">-</a>  
            <a id="${producto.id}" class="btn btn-danger btn-delete">x</a>    
  </p>`
}


/* MANEJADOR DE CANTIDADES */

function eliminarCarrito(e){
  console.log(e.target.id);
  let posicion= carrito.findIndex(producto => producto.id == e.target.id);  
  carrito.splice(posicion,1);
  localStorage.setItem('carrito',JSON.stringify(carrito));
}

/* Agregar cantidad */
function addCantidad() {  
  let producto= carrito.find(p => p.id == this.id);
  console.log(producto);
  producto.agregarCantidad(1);
  $(this).parent().children()[1].innerHTML = "Cantidad: "+producto.cantidad;
  $(this).parent().children()[2].innerHTML = producto.subTotal();
  localStorage.setItem('carrito',JSON.stringify(carrito));  
}


/* Restar cantidad */
function subCantidad() {  
  let producto= carrito.find(p => p.id == this.id);
  if( producto.cantidad >1 ){
    /* Resto cantidad */
    producto.agregarCantidad(-1);
    $(this).parent().children()[1].innerHTML = "Cantidad: "+producto.cantidad;
    $(this).parent().children()[2].innerHTML = producto.subTotal();
    localStorage.setItem('carrito',JSON.stringify(carrito));
  }   
}





/* FILTRO DE TIPOS DE PRODUCTO */


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
}
 else {
  productosHTML(ProductosSkincare, '#productosContenedor')
}

}) 

