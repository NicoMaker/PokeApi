import { useState, useEffect } from "react";
import { Card } from "./Card";
import { get } from "./request";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Importa le icone

export default function PokemonList() {
  const [result, setResult] = useState(undefined);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [currentPage, setCurrentPage] = useState(1); // Per tracciare la pagina corrente

  const request = async () => {
    const body = await get(url);
    const newResult = {
      ...body,
      results: await Promise.all(body.results.map((p) => get(p.url))),
    };
    setResult(newResult);
  };

  const next = () => {
    if (result.next) {
      setUrl(result.next);
      setCurrentPage((prev) => prev + 1); // Incrementa pagina
    }
  };

  const previous = () => {
    if (result.previous) {
      setUrl(result.previous);
      setCurrentPage((prev) => Math.max(prev - 1, 1)); // Decrementa pagina
    }
  };

  useEffect(() => {
    request();
  }, [url]);

  return (
    !!result && (
      <div>
        <h2>Pagina dei Pokémon: {currentPage}</h2>
        <div className="arrows-container">
          <button
            type="button"
            className="arrowback"
            onClick={previous}
            disabled={!result.previous}
          >
            <ArrowBack className="icon" />
          </button>
          <button
            type="button"
            className="arrowforward"
            onClick={next}
            disabled={!result.next}
          >
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
