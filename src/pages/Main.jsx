import React, { useState, useEffect, useRef, useContext } from "react";
import "./main.css";
import SideMenu from "../components/SideMenu.jsx";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Categories from "./Categories.jsx";
import Library from "./Library.jsx";
import Bag from "./Bag.jsx";
import { AppContext } from "../App";

function Main() {
  const { library, bag } = useContext(AppContext);

  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const libraryRef = useRef(null);
  const bagRef = useRef(null);

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "bag",
      ref: bagRef,
      active: false,
    },
  ];

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  };

  const fetchData = () => {
    fetch("http://localhost:3001/Api/gamesData.json")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <Library games={library} reference={libraryRef} />
              <Bag games={bag} reference={bagRef} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
export default Main;
