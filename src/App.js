import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartScreen } from './components/CartScreen/CartScreen';
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

  const obtenerCantidadTotal = () => {
    return carrito.reduce((acumulador, producto) => {
      return acumulador + producto.cantidad;
    }, 0);
  }

  const obtenerPrecioTotal = () => {
    return carrito.reduce((acumulador, producto) => {
      return acumulador + (producto.cantidad * producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100)) ;
    }, 0);
  }

  const quitarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter(function(producto) {
      return producto.id !== id;
    });

    setCarrito(nuevoCarrito);
  }

  console.log(carrito);

  return (
    //Lo paso con doble llave porque lo paso cómo un objeto.
    <CartContext.Provider value={{
      agregarAlCarrito,
      obtenerCantidadTotal,
      obtenerPrecioTotal,
      quitarDelCarrito,
      carrito
    }}>
      <header>
        <Router>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartScreen />} />
            { /*<Route path='/error' element={<Error />} /> */ }
            { /* <Route path='*' element={<Navigate to='/error' />} /> */ }
          </Routes>
        </Router>
      </header>
    </CartContext.Provider>
  );
}

export default App;
