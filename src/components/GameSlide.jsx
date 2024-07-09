import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./gameSwiper.css";

function GameSlide({ game, active, ToggleVideo }) {
  return (
    <div className="gameSlider">
      <img src={game.img} alt="Imagen" />
      <div className={`video ${active ? `active` : ""}`}>
        <iframe
          width="1280"
          height="720"
          src={game.trailer}
          title={game.title}
          allow="accelerometer; clipboard-write; encrypted-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <div className="buttons">
          <button className="orderBtn">Adquiéralo ahora</button>
          <button className={`playBtn ${active ? "active" : ""}`} onClick={ToggleVideo}>
            <span className="pause">
              <i className="bi bi-pause-fill"></i>
            </span>
            <span className="play">
              <i className="bi bi-play-fill"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameSlide;
