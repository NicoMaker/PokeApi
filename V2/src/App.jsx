import PokemonList from "./PokemonList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        {/* Sostituzione del titolo con l'SVG del logo */}
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokémon API Logo"
          className="logo"
        />
        <PokemonList></PokemonList>
      </div>
    </>
  );
}

export default App;
