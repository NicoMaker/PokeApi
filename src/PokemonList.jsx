import { useState, useEffect } from "react";
import { Card } from "./Card";
import { get } from "./request";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Importa le icone

export default function PokemonList() {
  const [result, setResult] = useState(undefined);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [currentPage, setCurrentPage] = useState(1); // Per tracciare la pagina corrente

  const totalPokemons = 1279; // Totale Pokémon (aggiorna se necessario)
  const pokemonsPerPage = 21; // Pokémon per pagina (costante)
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage); // Numero totale di pagine

  // Funzione per caricare i dati dei Pokémon
  const request = async () => {
    const body = await get(url);
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
      // Torna alla prima pagina
      goToPage(1);
    }
  };

  // Funzione per andare alla pagina precedente
  const previous = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    } else {
      // Torna all'ultima pagina
      goToPage(totalPages);
    }
  };

  // Effettua la richiesta iniziale al caricamento della pagina
  useEffect(() => {
    // Chiama goToPage subito per caricare la prima pagina
    goToPage(1);
  }, []); // Esegui solo una volta al primo caricamento

  useEffect(() => {
    if (url) {
      request();
    }
  }, [url]); // Esegui la richiesta ogni volta che cambia l'URL

  return (
    !!result && (
      <div>
        <h2>
          Pagina {currentPage} di {totalPages}
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
