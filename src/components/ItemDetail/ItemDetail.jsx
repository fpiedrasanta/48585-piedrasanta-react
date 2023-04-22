import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import { Button, Nav } from 'react-bootstrap'

import './ItemDetail.css'

export const ItemDetail = ({ producto }) => {
    const obtenerPrecio = (producto) => {
        let precio = producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100);
        let precioConFormato = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio);
  
        return precioConFormato;
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

                    <ItemCount />

                    <div className="wrap-btn-add-cart">
                        <Button variant="primary">Agregar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
