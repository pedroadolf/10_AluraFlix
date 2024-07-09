import React, { useState } from "react";
import "./sideMenu.css";
import navListData from "../data/navListData";
import NavListItem from "./NavListItem.jsx";

function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = (navData.map = (nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${active ? `active` : ""}`}>
      <button className="logo">
        <img src="/logo.png" alt="Tu Logo" />
        <span className="brand"></span>
      </button>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick} />
        ))}
      </ul>
      <ul className="social">
        <li>
          <a href="https://twitter.com/Pash26s">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/pedroadolf">
            <i className="bi bi-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
