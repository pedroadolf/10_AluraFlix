import React, { useContext } from "react";
import "./shopBagItem.css";
import { AppContext } from "../App";

function ShopBagItem({ index, game }) {

  const { bag, setBag } = useContext(AppContext);

  const handleRemoveFromBag = (game) => {
    setBag(bag.filter((item) => item._id !== game._id));
  };

  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={game.img} alt="" className="img-fluid" />
      </td>
      <td>{game.title}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{game.discount}%</td>
      <td>${(game.price * (1 - game.discount / 100)).toFixed(2)}</td>
      <td>
        <button
          className="removeBtn"
          onClick={() => handleRemoveFromBag(game)}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default ShopBagItem;
