import './App.css';
import { HomeView } from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <div className='App'>
        <NavBar/>
        <h1>Hola mundo!</h1>
        <HomeView/>
      </div>
    </>
  );
}

export default App;
