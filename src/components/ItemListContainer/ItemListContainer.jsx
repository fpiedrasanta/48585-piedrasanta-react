import './ItemListContainer.css';

import React, { useEffect, useState } from 'react';
import { ImSpinner3 } from 'react-icons/im'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();

  useEffect(() =>{
    setLoading(true);
    
    const db = getFirestore();

    const merchandising = categoryId ? 
      db.collection('merchandising').where("categoria", "==", categoryId) : 
      db.collection('merchandising');

    merchandising.get()
      .then((respuesta) => {
        const lista = respuesta.docs.map((documento) => {
          return {
            id: documento.id,
            ...documento.data()
          };
        });

        setProductos(lista);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
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