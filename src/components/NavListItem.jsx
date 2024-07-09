import React from "react";

function navListItem({ item, navOnClick }) {
  return (
    <li>
      <button
        className={`${item.active ? "active" : ""}`}
        onClick={() => navOnClick(item._id, item.target)}
      >
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </button>
    </li>
  );
}

export default navListItem;
