import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

import './ItemDetail.css'

export const ItemDetail = ({ producto }) => {
    
    const navigate = useNavigate();
    
    const volver = () => {
        navigate(-1);
    }

    const [counter, setCounter] = useState(0);

    const obtenerPrecio = (producto) => {
        let precio = producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100);
        let precioConFormato = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio);
  
        return precioConFormato;
    }
    
    //Desestructuro porque al value lo pasé cómo objeto.
    const { agregarAlCarrito } = useContext(CartContext);

    const sumarAlCarrito = () => { 
        agregarAlCarrito({
            id: producto.id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precioUnitarioSinIVA: producto.precioUnitarioSinIVA,
            porcentajeIVA: producto.porcentajeIVA,
            urlImagen: producto.urlImagen,
            categoria: producto.categoria,
            detalles: producto.detalles,
            stock: producto.stock,
            cantidad: counter
        });
    }

    return (
        <div className="main-content container">
            <div id="detalle_producto" className="row justify-content-center">
                <div className="col-lg-6 col-md-12">    
                    <img className="img-detail" 
                        src={`https://fpiedrasanta.github.io/34150-piedrasanta-javascript/images/${producto.urlImagen}`} 
                        alt={producto.nombre} />
                </div>
                <div className="col-lg-6 col-md-12">
                    <h4 className="">{producto.nombre}</h4>
                    <p>{producto.descripcion}</p>
                    <strong><p>Precio: {obtenerPrecio(producto)}</p></strong>
                    <p>{producto.detalles}</p>

                    <ItemCount stock={producto.stock} cantidad={counter} setCantidad={setCounter} />

                    <div className="wrap-btn-add-cart">
                        <Button variant="primary" onClick={sumarAlCarrito}>Agregar al carrito</Button>
                    </div>

                    <div className="wrap-btn-return-cart">
                        <Button variant="secondary" onClick={volver}>Volver</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
