import React from "react";
import "./home.css";
import GameSwiper from "../components/GameSwiper";
import GameCard from "../components/GameCard";

function Home({ games, reference }) {
  return (
    <section id="home" className="home active" ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games} />
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Juegos en promoción</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <button className="viewMore">
              Ver más juegos <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="row">
          {games.slice(0, 10).map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
