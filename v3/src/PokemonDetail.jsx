"use client";

import { useEffect, useRef } from "react";

export default function PokemonDetail({ pokemon, isOpen, onClose }) {
  // Get a better image if available
  const pokemonId = pokemon.id;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  // Format Pokémon ID with leading zeros
  const formattedId = String(pokemonId).padStart(3, "0");

  // Get all stats
  const stats = {
    hp: pokemon.stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0,
    attack:
      pokemon.stats.find((stat) => stat.stat.name === "attack")?.base_stat || 0,
    defense:
      pokemon.stats.find((stat) => stat.stat.name === "defense")?.base_stat ||
      0,
    specialAttack:
      pokemon.stats.find((stat) => stat.stat.name === "special-attack")
        ?.base_stat || 0,
    specialDefense:
      pokemon.stats.find((stat) => stat.stat.name === "special-defense")
        ?.base_stat || 0,
    speed:
      pokemon.stats.find((stat) => stat.stat.name === "speed")?.base_stat || 0,
  };

  // Get type color based on Pokémon type
  const getTypeColor = (type) => {
    return type;
  };

  // Calculate stat percentages (max stat is 255)
  const calculatePercentage = (value) => (value / 255) * 100;

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("pokemon-detail-backdrop")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="pokemon-detail-backdrop" onClick={handleBackdropClick}>
      <div className="pokemon-detail-modal">
        <button className="pokemon-detail-close" onClick={onClose}>
          &times;
        </button>

        <div className="pokemon-detail-header">
          <div className="pokemon-detail-id">#{formattedId}</div>
          <h2 className="pokemon-detail-name">{pokemon.name}</h2>
          <div className="pokemon-detail-types">
            {pokemon.types.map((t) => (
              <span
                key={t.slot}
                className="pokemon-detail-type"
                data-type={getTypeColor(t.type.name)}
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="pokemon-detail-content">
          <div className="pokemon-detail-image-container">
            <img
              src={imageUrl || "/placeholder.svg"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = pokemon.sprites.front_default;
              }}
              className="pokemon-detail-image"
              alt={pokemon.name}
            />
          </div>

          <div className="pokemon-detail-info">
            <div className="pokemon-detail-stats">
              <h3>Statistiche</h3>
              <div className="pokemon-detail-stats-visual">
                {/* Custom stats visualization instead of Chart.js */}
                <div className="stat-visual-container">
                  <div className="stat-visual-item">
                    <div className="stat-visual-label">HP</div>
                    <div className="stat-visual-bar">
                      <div
                        className="stat-visual-fill hp"
                        style={{ width: `${calculatePercentage(stats.hp)}%` }}
                      ></div>
                    </div>
                    <div className="stat-visual-value">{stats.hp}</div>
                  </div>

                  <div className="stat-visual-item">
                    <div className="stat-visual-label">Attacco</div>
                    <div className="stat-visual-bar">
                      <div
                        className="stat-visual-fill attack"
                        style={{
                          width: `${calculatePercentage(stats.attack)}%`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-visual-value">{stats.attack}</div>
                  </div>

                  <div className="stat-visual-item">
                    <div className="stat-visual-label">Difesa</div>
                    <div className="stat-visual-bar">
                      <div
                        className="stat-visual-fill defense"
                        style={{
                          width: `${calculatePercentage(stats.defense)}%`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-visual-value">{stats.defense}</div>
                  </div>

                  <div className="stat-visual-item">
                    <div className="stat-visual-label">Att. Sp.</div>
                    <div className="stat-visual-bar">
                      <div
                        className="stat-visual-fill special-attack"
                        style={{
                          width: `${calculatePercentage(stats.specialAttack)}%`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-visual-value">
                      {stats.specialAttack}
                    </div>
                  </div>

                  <div className="stat-visual-item">
                    <div className="stat-visual-label">Dif. Sp.</div>
                    <div className="stat-visual-bar">
                      <div
                        className="stat-visual-fill special-defense"
                        style={{
                          width: `${calculatePercentage(
                            stats.specialDefense
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-visual-value">
                      {stats.specialDefense}
                    </div>
                  </div>

                  <div className="stat-visual-item">
                    <div className="stat-visual-label">Velocità</div>
                    <div className="stat-visual-bar">
                      <div
                        className="stat-visual-fill speed"
                        style={{
                          width: `${calculatePercentage(stats.speed)}%`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-visual-value">{stats.speed}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pokemon-detail-data">
              <div className="pokemon-detail-data-group">
                <h3>Informazioni di base</h3>
                <div className="pokemon-detail-data-item">
                  <span>Altezza:</span>
                  <span>{pokemon.height / 10} m</span>
                </div>
                <div className="pokemon-detail-data-item">
                  <span>Peso:</span>
                  <span>{pokemon.weight / 10} kg</span>
                </div>
                <div className="pokemon-detail-data-item">
                  <span>Abilità:</span>
                  <span>
                    {pokemon.abilities.map((a) => a.ability.name).join(", ")}
                  </span>
                </div>
              </div>

              <div className="pokemon-detail-data-group">
                <h3>Statistiche totali</h3>
                <div className="pokemon-detail-data-item total-stats">
                  <span>Totale:</span>
                  <span>
                    {stats.hp +
                      stats.attack +
                      stats.defense +
                      stats.specialAttack +
                      stats.specialDefense +
                      stats.speed}
                  </span>
                </div>
                <div className="stat-total-bar">
                  <div
                    className="stat-total-fill"
                    style={{
                      width: `${Math.min(
                        100,
                        (stats.hp +
                          stats.attack +
                          stats.defense +
                          stats.specialAttack +
                          stats.specialDefense +
                          stats.speed) /
                          7.2
                      )}%`,
                    }}
                  ></div>
                </div>
                <div className="stat-total-scale">
                  <span>0</span>
                  <span>300</span>
                  <span>600</span>
                  <span>720</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
