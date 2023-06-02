import "./styles.css";
import React, { useState } from "react";

let pokemons = [
  {
    nombre: "Pikachu",
    poderAtaque: 55,
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    nombre: "Charizard",
    poderAtaque: 84,
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  },
  {
    nombre: "Bulbasaur",
    poderAtaque: 49,
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    nombre: "Squirtle",
    poderAtaque: 48,
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    nombre: "Jigglypuff",
    poderAtaque: 45,
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
  }
];

const PokemonTable = ({ pokemons }) => {
  const [orderBy, setOrderBy] = useState("alfabeticamente");

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  let sortedPokemons = [];
  if (orderBy === "alfabeticamente") {
    sortedPokemons = pokemons.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (orderBy === "poderAtaque") {
    /**
     * Ejercicio: Modifica únicamente el cuerpo del else para aplicar el sort al array pokemons y ordenarlos según su poder de ataque de forma creciente
     */
    sortedPokemons = pokemons.sort(function (a, b) {
      return a.poderAtaque - b.poderAtaque;
    });
  }

  return (
    <div>
      <h2>Pokémon Table</h2>
      <label htmlFor="order-select">Ordenar por:</label>
      <select id="order-select" value={orderBy} onChange={handleOrderChange}>
        <option value="poderAtaque">Poder de Ataque</option>
        <option value="alfabeticamente">Alfabeticamente</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Poder de Ataque</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {sortedPokemons.map((pokemon) => (
            <tr key={pokemon.nombre}>
              <td>{pokemon.nombre}</td>
              <td>{pokemon.poderAtaque}</td>
              <td>
                <img src={pokemon.imagen} alt={pokemon.nombre} width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <PokemonTable pokemons={pokemons} />
    </div>
  );
}
