import './App.css';
import PokemonList from "./PokemonList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <h1>Pokèmon API</h1>
        <PokemonList></PokemonList>
      </div>
    </>
  )
}

export default App
