import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
/* import { Error } from './Error'; */

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
