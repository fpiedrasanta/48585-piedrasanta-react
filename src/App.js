import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
/* import { Error } from './Error'; */

import { CartContext } from './components/context/CartContext';

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    //Spread del array + item
    setCarrito([...carrito, item]);
  }

  const obtenerTotal = () => {
    return carrito.reduce((acumulador, producto) => {
      return acumulador + producto.cantidad;
    }, 0);
  }

  console.log(carrito);

  return (
    //Lo paso con doble llave porque lo paso cómo un objeto.
    <CartContext.Provider value={{
      agregarAlCarrito,
      obtenerTotal
    }}>
      <header>
        <Router>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
            { /*<Route path='/error' element={<Error />} /> */ }
            { /* <Route path='*' element={<Navigate to='/error' />} /> */ }
          </Routes>
        </Router>
      </header>
    </CartContext.Provider>
  );
}

export default App;
