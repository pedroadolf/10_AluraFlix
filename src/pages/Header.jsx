import React, { useContext } from "react";
import "./header.css";
import userImg from "../images/Logo.png";
import { AppContext } from "../App";

function Header({ toggleActive }) {
const { library, bag } = useContext(AppContext);

  return (
    <header>
      <button className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </button>
      <div className="userItems">
        <button className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </button>
        <button className="icon">
          <i className="bi bi-bag-check-fill"></i>
          <span className="bag">{bag.length}</span>
        </button>
        <div className="avatar">
          <button>
            <img src={userImg} alt="Imagen de usuario" />
          </button>
          <div className="user">
            <span>Nombre de usuario</span>
            <button> Ver perfil</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
