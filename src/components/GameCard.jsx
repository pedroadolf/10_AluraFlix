import React, { useContext } from "react";
import "./gameCard.css";
import GameRating from "./GameRating";
import { AppContext } from "../App";

function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  const handleAddToLibrary = (game) => {
    setLibrary([...library, game]);
  };

  const handleRemoveFromLibrary = (game) => {
    setLibrary(library.filter((item) => item._id !== game._id));
  };

  const handleAddToBag = (game) => {
    if (bag.includes(game)) {
      return;
    }
    setBag([...bag, game]);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <button
          className={`like ${library.includes(game) ? `active` : ""}`}
          onClick={
            library.includes(game)
              ? () => handleRemoveFromLibrary(game)
              : () => handleAddToLibrary(game)
          }
        >
          <i className="bi bi-heart-fill"></i>
        </button>
        <div className="gameFeature">
          <span className="gameType">{game.category}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount}% </i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currPrice">
            ${((1 - game.discount / 100) * game.price).toFixed(2)}
          </span>
        </div>
        <button className="addBag" onClick={() => handleAddToBag(game)}>
          <i className="bi bi-bag-plus-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default GameCard;
