import React, { useEffect, useState } from 'react'
import './ItemList.css'
import { Item } from '../Item/Item';

export const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://fpiedrasanta.github.io/34150-piedrasanta-javascript/jsons/productos.json')
        .then((respuesta) => respuesta.json())
        .then((json) => {
            setProductos(json);
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
                productos.map(producto => <Item producto={producto} key={producto.id} />) :
                <p>Cargando...</p>
        }
    </>
  )
}
