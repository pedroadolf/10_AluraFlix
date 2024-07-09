import React from "react";
import "./myLibrary.css";
import GameCard from "../components/GameCard";

function Library({ games, reference }) {
  return (
    <section className="library" id="library" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>Mi biblioteca</h1>
        </div>
        <div className="row">
          {games.length === 0 ? (
            <h2>No hay juegos en tu biblioteca</h2>
          ) : (
            games.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default Library;
