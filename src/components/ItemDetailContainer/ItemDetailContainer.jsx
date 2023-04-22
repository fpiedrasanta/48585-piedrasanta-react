import './ItemDetailContainer.css'

import React, { useState, useEffect } from 'react'
import {ImSpinner3} from 'react-icons/im'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const [loading, setLoading] = useState(true);

    const {itemId} = useParams();

    useEffect(() =>{
        setLoading(true);
    
        fetch('https://fpiedrasanta.github.io/34150-piedrasanta-javascript/jsons/productos.json')
            .then((respuesta) => respuesta.json())
            .then((json) => {
                console.log(json);
                setProducto(json.find( producto => producto.id === Number(itemId)));
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    },[itemId])


    return (
        <>
            {
                loading ?
                    <div className='spinner'><ImSpinner3/></div> :
                    <ItemDetail producto={ producto }/>
            }
        </>
  )
}