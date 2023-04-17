import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { CarritoCompra, DetalleCarritoCompra } from './components/Classes/clases';

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'

function App() {
  const [carritoCompra, setCarritoCompra] = useState(new CarritoCompra(null, []));
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarProducto = (producto) => {
    //Obtengo del carrito de compras el detalle.
    let detalle = carritoCompra.obtenerDetalleCarritoCompraPorIdProducto(producto.id);

    //Si no exite lo creo.
    if(detalle == null) {
        //Obtengo el producto de mi lista de productos.
        //Creo el detalle con cantidad 0.
        detalle = new DetalleCarritoCompra(producto, 0);

        //Agrego el detalle al carrito de compras
        carritoCompra.detallesCarritoCompra.push(detalle);
    }

    //Ya sea que exista o que lo cree, le añado 1 cantidad al detalle.
    detalle.cantidad++;

    //Actualizo mi variable de estado.
    setCarritoCompra(carritoCompra);
    setCantidadTotal(carritoCompra.obtenerCantidadTotalProductos());

    return detalle.cantidad;
  }

  return (
    // <>
    //   <header>
    //     <NavBar cantidadTotal={cantidadTotal}/>
    //   </header>
      
    //   <main>
    //     <ItemListContainer agregarProducto={agregarProducto} carritoCompra={carritoCompra}/>
    //   </main>
    // </>
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={ItemListContainer} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
