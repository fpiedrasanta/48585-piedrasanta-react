import React, { useContext } from 'react';

import './CartScreen.css';

import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';

import { BsFillTrashFill } from "react-icons/bs";

export const CartScreen = () => {

    const { obtenerPrecioTotal, quitarDelCarrito, carrito } = useContext(CartContext);

    return (
        <div className="container my-5">
            <h3>Resumen de compras</h3>
            <hr />
            <div className='listado'>
                {
                    carrito.map((producto) => (
                        <>
                            <p>Producto: {producto.nombre}</p>
                            <p>Cantidad: {producto.cantidad}</p>
                            <p>Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100))}</p>
                            <Button onClick={() => quitarDelCarrito(producto.id)}>
                                <BsFillTrashFill />
                            </Button>
                        </>
                    ))
                }    
            </div>
            <strong>Precio total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(obtenerPrecioTotal())}</strong>
        </div>
    )
}
