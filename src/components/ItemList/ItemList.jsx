import { React, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ItemList.css';
import { Item } from '../Item/Item';

export const ItemList = ({productos=[]}) => {
    const { obtenerCantidad } = useContext(CartContext);

    return (
        <>
            {
                productos.map((producto) => <Item producto={producto} key={producto.id} cantidadCarrito={obtenerCantidad(producto.id)}/>)
            }
        </>
    )
}