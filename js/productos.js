/* Class de Productos Skincare */
class Productos {
    constructor (id, producto, precio, tipo, img, cantidad) {
        this.id = parseInt(id)
        this.producto = producto
        this.precio = parseFloat(precio)
        this.tipo = tipo
        this.img = img
        this.cantidad = cantidad || 1;
    }



/* Metodo agregar cantidad y subtotal */
agregarCantidad(valor) {
    this.cantidad += valor;
}
subTotal() {
    return this.cantidad * this.precio;
}

}
