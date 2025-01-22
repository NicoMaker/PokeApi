import { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Icone di navigazione

// Componente Card per ogni Pokémon (modifica questo file secondo le tue esigenze)
import { Card } from "./Card";

// Funzione per effettuare richieste HTTP (esempio generico, puoi sostituirla con fetch)
import { get } from "./request";

export default function PokemonList() {
  const [result, setResult] = useState(undefined); // Dati dei Pokémon
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/"); // URL iniziale
  const [currentPage, setCurrentPage] = useState(1); // Pagina corrente
  const [totalPokemons, setTotalPokemons] = useState(0); // Totale Pokémon dinamico
  const pokemonsPerPage = 12; // Pokémon per pagina (costante)

  // Calcolo del numero totale di pagine
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  // Funzione per caricare i dati dei Pokémon
  const request = async () => {
    const body = await get(url);

    // Imposta il numero totale di Pokémon (solo al primo caricamento)
    if (!totalPokemons && body.count) {
      setTotalPokemons(body.count);
    }

    // Carica i dati dettagliati per ogni Pokémon
    const newResult = {
      ...body,
      results: await Promise.all(body.results.map((p) => get(p.url))),
    };
    setResult(newResult);
  };

  // Funzione per andare a una pagina specifica
  const goToPage = (page) => {
    const offset = (page - 1) * pokemonsPerPage;
    setUrl(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pokemonsPerPage}`
    );
    setCurrentPage(page);
  };

  // Funzione per andare alla pagina successiva
  const next = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    } else {
      goToPage(1); // Torna alla prima pagina
    }
  };

  // Funzione per andare alla pagina precedente
  const previous = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    } else {
      goToPage(totalPages); // Torna all'ultima pagina
    }
  };

  // Caricamento iniziale della prima pagina
  useEffect(() => {
    goToPage(1);
  }, []);

  // Aggiorna i dati ogni volta che cambia l'URL
  useEffect(() => {
    if (url) {
      request();
    }
  }, [url]);

  return (
    !!result && (
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
        <div className="card-grid">
          {result.results.map((p) => (
            <Card key={p.name} pokemon={p} />
          ))}
        </div>
      </div>
    )
  );
}
