export const updateCart = cart => {
  return { type: "UPDATE_CART", cart };
};

export const addProductToCart = (cart, itemProduct) => dispatch => {
  const newCart = cart.slice();
  let isOnCart = false;
  newCart.forEach(item => {
    if (item.idProductoDeSucursal === itemProduct.idProductoDeSucursal) {
      isOnCart = true;
      item.cantidad = item.cantidad + itemProduct.cantidad;
      item.subtotal = parseFloat((item.precio * item.cantidad).toFixed(2));
    }
  });
  if (!isOnCart) {
    const newProducto = {
      idPromocion: "",
      idProductoDeSucursal: itemProduct.idProductoDeSucursal,
      idProducto: itemProduct.producto.idProducto,
      nombre: itemProduct.producto.nombre,
      precio: itemProduct.precioVentaMayorista,
      marca: itemProduct.producto.marca.nombre,
      cantidad: itemProduct.cantidad,
      subtotal: parseFloat(itemProduct.subtotal.toFixed(2))
    };
    newCart.push({ ...newProducto });
  }

  return dispatch(updateCart(newCart));
};
