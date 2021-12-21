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
                        <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                      </div>
                    </div>`);
    }
  }



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