import React, { useEffect, useState } from 'react'
import './ItemList.css'
import { Item } from '../Item/Item';
import { Producto } from '../Classes/clases.js';

export const ItemList = ({ agregarProducto }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://fpiedrasanta.github.io/34150-piedrasanta-javascript/jsons/productos.json')
        .then((respuesta) => respuesta.json())
        .then((json) => {
          let listaProductos = [];

          for(let item of json){
            listaProductos.push(Producto.fromObject(item));
          }  
          
          setProductos(listaProductos);
        })
        .catch((error) => console.log(error))
        .finally(() => {
            setLoading(false)
        });
  }, []);
  
  return (
    <>
        {
            productos.length > 0 && !loading ?
                productos.map(producto => <Item producto={producto} key={producto.id} agregarProducto={agregarProducto} />) :
                <p>Cargando...</p>
        }
    </>
  )
}
