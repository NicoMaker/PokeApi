"use client";

import { useState } from "react";
import PokemonList from "./PokemonList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search, X } from "@mui/icons-material";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Funzione per gestire la ricerca
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Funzione per cancellare la ricerca
  const clearSearch = () => {
    setSearchTerm("");
    setIsSearching(false);
  };

  return (
    <>
      {/* Header fisso */}
      <header className="app-header">
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              alt="Pokémon API Logo"
              className="logo-small"
            />
          </div>

          {/* Barra di ricerca nell'header */}
          <div className="header-search">
            {isSearching ? (
              <div className="search-bar header-search-bar">
                <input
                  type="text"
                  placeholder="Cerca per nome, ID o tipo..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button
                  type="button"
                  className="close-search"
                  onClick={clearSearch}
                >
                  <X />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="search-toggle"
                onClick={() => setIsSearching(true)}
              >
                <Search />
                Cerca Pokémon
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="container-fluid main-content">
        {/* Logo grande (solo nella home) */}
        <div className="logo-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="Pokémon API Logo"
            className="logo"
          />
        </div>

        {/* Passiamo il termine di ricerca al componente PokemonList */}
        <PokemonList searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
