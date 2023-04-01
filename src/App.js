import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { Pika } from './components/Pika/Pika';

function App() {
  const title = "Merchandising";
  
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  }

  const restar = () => {
    if(counter <= 0) return;
    
    setCounter(counter - 1);
  }

  const resetear = () => {
    setCounter(0);
  }

  return (
    <>
      <header>
        <NavBar counter={counter}/>
      </header>
      
      <main>
        <ItemListContainer greeting={title} sumar={sumar} restar={restar} resetear={resetear}/>
        <Pika />
      </main>
    </>
  );
}

export default App;
