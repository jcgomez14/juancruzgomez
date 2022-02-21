import './App.css';
import Navegador from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navegador />
      <ItemListContainer />
      <ItemDetailContainer />    
    </div>
  );
}

export default App;
