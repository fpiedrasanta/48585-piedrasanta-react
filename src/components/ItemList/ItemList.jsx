import React from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'

export const ItemList = ({productos=[]}) => {
return (
    <>
        {
            productos.map((producto) => <Item producto={producto} key={producto.id}/>)
        }
    </>
  )
}