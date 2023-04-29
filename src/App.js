import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartScreen } from './components/CartScreen/CartScreen';
import { Checkout } from './components/Checkout/Checkout';
/* import { Error } from './Error'; */

import { CartProvider } from './components/context/CartContext';

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'

function App() {
  return (
    //Lo paso con doble llave porque lo paso cómo un objeto.
    <CartProvider>
      <header>
        <Router>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path='/checkout' element={<Checkout/>}/>
            { /*<Route path='/error' element={<Error />} /> */ }
            { /* <Route path='*' element={<Navigate to='/error' />} /> */ }
          </Routes>
        </Router>
      </header>
    </CartProvider>
  );
}

export default App;
