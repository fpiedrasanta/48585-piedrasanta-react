import './ItemListContainer.css';

import React, { useEffect, useState } from 'react';
import { ImSpinner3 } from 'react-icons/im'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();

  useEffect(() =>{
    setLoading(true);
    
    fetch('https://fpiedrasanta.github.io/34150-piedrasanta-javascript/jsons/productos.json')
        .then((respuesta) => respuesta.json())
        .then((json) => {
          setProductos(categoryId ? json.filter(producto => producto.categoria === categoryId) : json);
          setLoading(false);
        })
        .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <>
      {
        loading ? 
          <div className='spinner'><ImSpinner3/></div> : 
          <div className="main-content container">
            <div id="productos" className="row">
              <ItemList productos={productos}/>
            </div>
          </div>
      }
    </>
  );
}