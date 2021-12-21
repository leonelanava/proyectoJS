/* Función para generar productos en HTML */

function productosHTML(Productos, id){
    $(id).empty();
    for (const producto of Productos) {
       $(id).append(`<div class="card m-3" style="width: 18rem;">
                      <img src= "${producto.img}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${producto.producto}</h5>
                        <p class="card-text">Precio: ${producto.precio}</p>    
                        <p class="card-text">Categoría: ${producto.tipo}</p>                    
                        <a href="#" id='${producto.id}' class="btn btn-primary btn-agregar">Agregar a carrito</a>
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
    localStorage.setItem('carrito',JSON.stringify(carrito));
    carritoHTML(carrito);
  }


/* Función para mostrar carrito en el HTML  */

function carritoHTML(ProductosSkincare){
    $('#carritoCantidad').html(ProductosSkincare.length);
    $('#carritoProductos').empty();
    for (const producto of ProductosSkincare) {
      $('#carritoProductos').append(`<p> ${producto.producto} 
                                      <span class="badge badge-warning">
                                      $ ${producto.precio}</span>
                                      <span class="badge badge-warning">
                                      Cantidad: ${producto.cantidad}</span>
                                      <span class="badge badge-warning">
                                      Subtotal: ${producto.subTotal()}</span>                                     
                                      </p>`);
    }
  }
  
  

  





/* FUNCIONES BACK OFFICE - COMENTADAS POR EL MOMENTO */

 /* Busqueda de productos por su ID 
 let busquedaID = document.getElementById("insertarIDProducto")
IDingresada = parseInt(busquedaID.children)
IDencontrada = Productos.find( producto => producto.id == IDingresada)
busquedaID.onsubmit = (e) => {
    e.preventDefault();
    resultadoIDenDOM();
    console.log(IDencontrada)
}

Función para mostrar ID encontrada en DOM 

function resultadoIDenDOM() {
    productoIDIngresado.innerHTML="";
        let divID = document.createElement('div');
        divID.innerHTML= "El producto encontrado es " + JSON.stringify(IDencontrada);
        productoIDIngresado.appendChild(divID);
    }

    */