import logo from './logo.svg';
import './App.css';
import Ejemplo from './ejemplo'; // ejemplo del profe de los componentes
import Navbar from './navbar'; // primer componente
import Footer from './footer'; // tercer componente 
import './footer.css'; // estilo del footer importado
import './navbar.css'; // estilo del navbar importado
import List from './list'; // componente de lista
import './Lista.css';  // estilo para el archivo lista


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Ejemplo />
      <Footer />
      <List />
    </div>
  );
}
export default App;
