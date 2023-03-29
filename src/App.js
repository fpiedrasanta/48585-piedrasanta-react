import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const title = "Merchandising";
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <main>
        <ItemListContainer greeting={title} />
      </main>
    </>
  );
}

export default App;
