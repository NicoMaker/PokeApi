import { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Icone di navigazione
import { Card } from "./Card";
import { get } from "./request";

export default function PokemonList() {
  const [result, setResult] = useState(undefined); // Dati dei Pokémon
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/"); // URL iniziale
  const [currentPage, setCurrentPage] = useState(1); // Pagina corrente
  const [totalPokemons, setTotalPokemons] = useState(0); // Totale Pokémon dinamico
  const [loading, setLoading] = useState(false); // Stato di caricamento

  const pokemonsPerPage = 12; // Pokémon per pagina (costante)
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage); // Numero totale di pagine

  const request = async () => {
    setLoading(true); // Attiva lo stato di caricamento
    const body = await get(url);

    if (!totalPokemons && body.count) {
      setTotalPokemons(body.count);
    }

    const newResult = {
      ...body,
      results: await Promise.all(body.results.map((p) => get(p.url))),
    };
    setResult(newResult);
    setLoading(false); // Disattiva lo stato di caricamento
  };

  const goToPage = (page) => {
    const offset = (page - 1) * pokemonsPerPage;
    setUrl(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pokemonsPerPage}`
    );
    setCurrentPage(page);
  };

  const next = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    } else {
      goToPage(1);
    }
  };

  const previous = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    } else {
      alert("Sei già alla prima pagina!");
    }
  };

  useEffect(() => {
    goToPage(1);
  }, []);

  useEffect(() => {
    if (url) {
      request();
    }
  }, [url]);

  return (
    <div className="pokemon-list">
      <h2>
        Pagina {currentPage} di {totalPages || "?"}
      </h2>
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
          <img
            src="https://cdn.dribbble.com/users/722246/screenshots/6139167/pokeball.gif"
            alt="Caricamento in corso..."
            className="loading-image"
          />
          <div className="spinner"></div>
          <p>Caricamento in corso...</p>
        </div>
      ) : (
        <div className="card-grid">
          {result &&
            result.results.map((p) => <Card key={p.name} pokemon={p} />)}
        </div>
      )}
    </div>
  );
}
