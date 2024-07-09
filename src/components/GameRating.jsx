import React, { useState, useEffect, useCallback } from "react";
import "./gameRating.css";

function GameRating({ rating }) {
  const [stars, setStars] = useState([]);

  // useCallback para que no se renderice 
  
  const generateStars = useCallback(() => {
    let stars = [];
    if (rating > 5 || rating < 1) {
      return;
    }

    for (let i = 1; i < rating; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  }, [rating]);
  // agregué rating a la lista de estrellas
  
  useEffect(() => {
    setStars(generateStars());
  }, [generateStars]);
// agregué renderizado de estrellas generateStars

  return <div className="gameRating">{stars}</div>;
}

export default GameRating;
