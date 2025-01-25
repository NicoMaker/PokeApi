import { useState, useEffect } from "react";
import { ArrowBack, ArrowForward, Search, Close } from "@mui/icons-material";
import { Card } from "./Card";
import { get } from "./request";

export default function PokemonList() {
  const [allPokemons, setAllPokemons] = useState([]); // Memorizza tutti i Pokémon
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const pokemonsPerPage = 12;

  // Funzione per caricare tutti i Pokémon
  const request = async () => {
    setLoading(true);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1500`; // Carica 1500 Pokémon
    const body = await get(url);

    const allPokemonData = await Promise.all(
      body.results.map((p) => get(p.url))
    );
    setAllPokemons(allPokemonData);
    setFilteredResults(allPokemonData); // Imposta i risultati filtrati iniziali
    setLoading(false);
  };

  const handleSearchChange = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setLoading(true); // Attiva l'animazione durante la ricerca

    if (value) {
      const filtered = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value)
      );
      setFilteredResults(filtered);
    } else setFilteredResults(allPokemons);

    setLoading(false); // Disattiva l'animazione una volta completata la ricerca
    setCurrentPage(1); // Reimposta la pagina alla 1 dopo una ricerca
  };

  const goToPage = (page) => setCurrentPage(page);

  const next = () => {
    const totalPages = Math.ceil(filteredResults.length / pokemonsPerPage);
    if (currentPage < totalPages) goToPage(currentPage + 1);
    else goToPage(1); // Torna alla prima pagina
  };

  const previous = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
    else goToPage(totalPages);
  };

  useEffect(() => {
    request();
  }, []);

  // Calcola il numero di pagine basato sui risultati filtrati
  const totalPages = Math.ceil(filteredResults.length / pokemonsPerPage);

  return (
    <div className="pokemon-list">
      <h2>
        Pagina {currentPage} di {totalPages || "?"}
      </h2>
      <div className="controls">
        {isSearching ? (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Cerca Pokémon..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              type="button"
              className="close-search"
              onClick={() => {
                setIsSearching(false);
                setSearchTerm("");
                setFilteredResults(allPokemons);
                goToPage(1); // Reset paginazione alla prima pagina
              }}
            >
              <Close />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="search-toggle"
            onClick={() => setIsSearching(true)}
          >
            <Search />
          </button>
        )}
      </div>
      <div className="arrows-container">
        <button type="button" className="arrowback" onClick={previous}>
          <ArrowBack className="icon" />
        </button>
        <button type="button" className="arrowforward" onClick={next}>
          <ArrowForward className="icon" />
        </button>
      </div>
      {loading ? (
        <div className="loading">
          <div className="spinner">
            <ArrowForward />
          </div>
          <p>Caricamento in corso...</p>
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="card-grid">
          {filteredResults
            .slice(
              (currentPage - 1) * pokemonsPerPage,
              currentPage * pokemonsPerPage
            )
            .map((p) => (
              <Card key={p.name} pokemon={p} />
            ))}
        </div>
      ) : (
        <p>Nessun Pokémon trovato.</p>
      )}
    </div>
  );
}
