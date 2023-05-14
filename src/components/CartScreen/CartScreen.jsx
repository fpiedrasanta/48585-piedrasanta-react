import React, { useContext } from 'react';

import './CartScreen.css';

import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';

import { BsFillTrashFill } from "react-icons/bs";

import { Link } from 'react-router-dom'

export const CartScreen = () => {

    const { obtenerPrecioTotal, quitarDelCarrito, carrito, vaciarCarrito } = useContext(CartContext);

    return (
        <div className="container my-5">
            <h3>Resumen de compras</h3>
            <hr />
            {
                carrito.length <= 0 ?
                    <>
                        <h3>
                            Carrito vacío
                        </h3>
                        <hr />
                        <div className='botonera-cartscreen'>
                            <Link to="/" className="btn btn-success my-10">Volver al inicio</Link>
                        </div>
                    </> :
                    <>
                        <div className='listado'>
                            {
                                carrito.map((producto) => (
                                    <>
                                        <div className='detalle-compra'>
                                            <div className="detalle-compra-imagen">
                                                <img className="detalle-compra-fondo-producto"
                                                     src={`https://fpiedrasanta.github.io/34150-piedrasanta-javascript/images/${producto.urlImagen}`} 
                                                     alt={producto.nombre} />

                                                    <div className='detalle-compra-imagen-producto'>
                                                        <img src={`https://fpiedrasanta.github.io/34150-piedrasanta-javascript/images/${producto.urlImagen}`} 
                                                             alt={producto.nombre} />
                                                     </div>
                                                </div>
                                            <div className="detalle-compra-resumen">
                                                <p>Producto: {producto.nombre}</p>
                                                <p>Cantidad: {producto.cantidad}</p>
                                                <p>Precio: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100))}</p>
                                                <p><strong>Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100) * producto.cantidad)}</strong></p>
                                                <Button onClick={() => quitarDelCarrito(producto.id)}>
                                                    <BsFillTrashFill />
                                                </Button>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))
                            }
                        </div>
                        <hr />
                        <div className='precio-total'>Precio total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(obtenerPrecioTotal())}</div>
                        <hr />
                        <div className='botonera-cartscreen'>
                            <Link to='/checkout' className='btn btn-success btn-confirmar-compra'>Confirmar compra</Link>
                            <Button className='btn btn-danger btn-vaciar-carrito' onClick={() => vaciarCarrito()}>
                                Vaciar carrito
                            </Button>
                        </div>
                    </>
            }
        </div>
    )
}
