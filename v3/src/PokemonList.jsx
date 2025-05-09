"use client";

import { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Card } from "./Card";
import { get } from "./request";
import PokemonDetail from "./PokemonDetail";

export default function PokemonList({ searchTerm = "" }) {
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [totalPages] = useState(108); // Fixed number of pages
  const [pokemonsPerPage] = useState(12); // Fixed number of Pokémon per page
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Fetch all Pokémon data
  const fetchPokemon = async () => {
    try {
      setInitialLoading(true);
      // Load all available Pokémon (about 1008 in the API)
      const url = `https://pokeapi.co/api/v2/pokemon?limit=1008`;
      const body = await get(url);

      // Load the first 100 Pokémon for a faster initial experience
      const initialPokemonPromises = body.results
        .slice(0, 100)
        .map((p) => get(p.url));
      const initialPokemonData = await Promise.all(initialPokemonPromises);

      setAllPokemons(initialPokemonData);
      setFilteredResults(initialPokemonData);

      // Reduce initial loading
      setInitialLoading(false);

      // Load the rest of the Pokémon in the background in batches
      loadRemainingPokemonInBatches(body.results.slice(100));
    } catch (error) {
      console.error("Failed to load Pokémon data", error);
      setInitialLoading(false);
    }
  };

  // Load remaining Pokémon in batches to avoid overloading the API
  const loadRemainingPokemonInBatches = async (pokemonList) => {
    try {
      // Split Pokémon into batches of 50
      const batchSize = 50;

      for (let i = 0; i < pokemonList.length; i += batchSize) {
        const batch = pokemonList.slice(i, i + batchSize);
        const batchPromises = batch.map((p) => get(p.url));
        const batchData = await Promise.all(batchPromises);

        setAllPokemons((prev) => [...prev, ...batchData]);

        if (!searchTerm) {
          setFilteredResults((prev) => [...prev, ...batchData]);
        }

        // Small pause between batches to avoid overloading the API
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error("Error loading remaining Pokémon", error);
    }
  };

  // Handle search input changes from props
  useEffect(() => {
    if (allPokemons.length > 0) {
      setLoading(true);

      if (searchTerm) {
        const filtered = allPokemons.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(pokemon.id) === searchTerm ||
            pokemon.types.some((t) =>
              t.type.name.includes(searchTerm.toLowerCase())
            )
        );
        setFilteredResults(filtered);
      } else {
        setFilteredResults(allPokemons);
      }

      setLoading(false);
      setCurrentPage(1);
    }
  }, [searchTerm, allPokemons]);

  // Navigation functions
  const goToPage = (page) => setCurrentPage(page);

  const next = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
    else goToPage(1);
  };

  const previous = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
    else goToPage(totalPages);
  };

  // Open Pokemon detail modal
  const openPokemonDetail = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsDetailOpen(true);
  };

  // Close Pokemon detail modal
  const closePokemonDetail = () => {
    setIsDetailOpen(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Calculate pagination values
  const startIndex = (currentPage - 1) * pokemonsPerPage;
  const endIndex = Math.min(
    currentPage * pokemonsPerPage,
    filteredResults.length
  );
  const currentPokemons = filteredResults.slice(startIndex, endIndex);

  return (
    <div className="pokemon-list">
      {/* Header with pagination info */}
      <h2>
        {filteredResults.length > 0
          ? `Pokémon ${startIndex + 1}-${Math.min(
              endIndex,
              filteredResults.length
            )} di ${filteredResults.length}`
          : "Nessun Pokémon trovato"}
        {searchTerm && <span className="ml-2">(filtrati)</span>}
      </h2>

      {/* Pagination controls */}
      <div className="arrows-container">
        <button
          type="button"
          className="arrowback"
          onClick={previous}
          disabled={initialLoading}
        >
          <ArrowBack className="icon" />
        </button>

        <span className="page-info">
          Pagina {currentPage} di {totalPages}
        </span>

        <button
          type="button"
          className="arrowforward"
          onClick={next}
          disabled={initialLoading}
        >
          <ArrowForward className="icon" />
        </button>

        {/* Page selector for quick navigation */}
        <div className="page-selector">
          <span className="page-selector-label">Vai alla pagina:</span>
          <select
            className="page-selector-select"
            value={currentPage}
            onChange={(e) => goToPage(Number(e.target.value))}
            disabled={initialLoading}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading state */}
      {initialLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Caricamento Pokémon in corso...</p>
        </div>
      ) : currentPokemons.length > 0 ? (
        <div className="card-grid">
          {currentPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => openPokemonDetail(pokemon)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Nessun Pokémon trovato con "{searchTerm}"</p>
        </div>
      )}

      {/* Pokemon Detail Modal */}
      {selectedPokemon && (
        <PokemonDetail
          pokemon={selectedPokemon}
          isOpen={isDetailOpen}
          onClose={closePokemonDetail}
        />
      )}
    </div>
  );
}
