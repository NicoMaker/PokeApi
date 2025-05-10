"use client";

export function Card({ pokemon }) {
  // Get type color based on Pokémon type
  const getTypeColor = (type) => {
    // This is just for the data-type attribute, actual colors are in CSS
    return type;
  };

  // Get a better image if available
  const pokemonId = pokemon.id;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  // Format Pokémon ID with leading zeros
  const formattedId = String(pokemonId).padStart(3, "0");

  // Get base stats
  const hp =
    pokemon.stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0;
  const attack =
    pokemon.stats.find((stat) => stat.stat.name === "attack")?.base_stat || 0;
  const defense =
    pokemon.stats.find((stat) => stat.stat.name === "defense")?.base_stat || 0;
  const speed =
    pokemon.stats.find((stat) => stat.stat.name === "speed")?.base_stat || 0;
  const specialAttack =
    pokemon.stats.find((stat) => stat.stat.name === "special-attack")
      ?.base_stat || 0;
  const specialDefense =
    pokemon.stats.find((stat) => stat.stat.name === "special-defense")
      ?.base_stat || 0;

  // Calculate stat percentages (max stat is 255)
  const hpPercent = (hp / 255) * 100;
  const attackPercent = (attack / 255) * 100;
  const defensePercent = (defense / 255) * 100;
  const speedPercent = (speed / 255) * 100;
  const specialAttackPercent = (specialAttack / 255) * 100;
  const specialDefensePercent = (specialDefense / 255) * 100;

  // Calculate total stats
  const totalStats =
    hp + attack + defense + specialAttack + specialDefense + speed;
  const totalStatsPercent = Math.min(100, (totalStats / 720) * 100);

  return (
    <div className="card">
      {/* Pokemon ID badge */}
      <div className="pokemon-id">#{formattedId}</div>

      {/* Pokemon image */}
      <img
        src={imageUrl || "/placeholder.svg"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = pokemon.sprites.front_default;
        }}
        className="card-img-top"
        alt={pokemon.name}
      />

      {/* Card content */}
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>

        {/* Stats bars */}
        <div className="pokemon-stats">
          <div className="stat-bar stat-hp">
            <div className="stat-label">
              <span>HP</span>
              <span>{hp}</span>
            </div>
            <div className="stat-progress">
              <div
                className="stat-fill"
                style={{ width: `${hpPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="stat-bar stat-attack">
            <div className="stat-label">
              <span>Attack</span>
              <span>{attack}</span>
            </div>
            <div className="stat-progress">
              <div
                className="stat-fill"
                style={{ width: `${attackPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="stat-bar stat-defense">
            <div className="stat-label">
              <span>Defense</span>
              <span>{defense}</span>
            </div>
            <div className="stat-progress">
              <div
                className="stat-fill"
                style={{ width: `${defensePercent}%` }}
              ></div>
            </div>
          </div>

          <div className="stat-bar stat-special-attack">
            <div className="stat-label">
              <span>Sp. Attack</span>
              <span>{specialAttack}</span>
            </div>
            <div className="stat-progress">
              <div
                className="stat-fill"
                style={{ width: `${specialAttackPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="stat-bar stat-special-defense">
            <div className="stat-label">
              <span>Sp. Defense</span>
              <span>{specialDefense}</span>
            </div>
            <div className="stat-progress">
              <div
                className="stat-fill"
                style={{ width: `${specialDefensePercent}%` }}
              ></div>
            </div>
          </div>

          <div className="stat-bar stat-speed">
            <div className="stat-label">
              <span>Speed</span>
              <span>{speed}</span>
            </div>
            <div className="stat-progress">
              <div
                className="stat-fill"
                style={{ width: `${speedPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="stat-bar stat-total">
            <div className="stat-label">
              <span>Total</span>
              <span>{totalStats}</span>
            </div>
            <div className="stat-progress">
              <div
                className="stat-fill stat-total-fill"
                style={{ width: `${totalStatsPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Type badges */}
        <div className="card-text">
          {pokemon.types.map((t) => (
            <button
              key={t.slot}
              type="button"
              className="button"
              data-type={getTypeColor(t.type.name)}
            >
              {t.type.name}
            </button>
          ))}
        </div>

        {/* Basic info */}
        <div className="pokemon-basic-info">
          <div className="basic-info-item">
            <span className="basic-info">Altezza:</span>
            <span>{pokemon.height / 10} m</span>
          </div>
          <div className="basic-info-item">
            <span>Peso:</span>
            <span>{pokemon.weight / 10} kg</span>
          </div>
          <div className="basic-info-item">
            <span>Abilità:</span>
            <span>
              {pokemon.abilities.map((a) => a.ability.name).join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
