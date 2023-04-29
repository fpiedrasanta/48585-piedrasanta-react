import './ItemDetailContainer.css'

import React, { useState, useEffect } from 'react'
import {ImSpinner3} from 'react-icons/im'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getFirestore } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const [loading, setLoading] = useState(true);

    const {itemId} = useParams();

    useEffect(() =>{
        setLoading(true);
    
        const db = getFirestore();

        const merchandising = db.collection('merchandising');

        merchandising.doc(itemId).get()
            .then((respuesta) => {
                setProducto({
                    id: respuesta.id,
                    ...respuesta.data()
                });
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