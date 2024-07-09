import ShopBagItem from "../components/ShopBagItem";
import "./bag.css";
import React, { useState, useEffect } from "react";

function Bag({ games, reference }) {
  const [total, setTotal] = useState(0);

  const handleTotalPayment = () => {
    return games
      .map((game) => game.price * (1 - game.discount / 100))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2);
  };

  useEffect(() => {
    setTotal(handleTotalPayment());
  }, [games]);

  return (
    <section id="bag" className="bag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>Mi carrito</h1>
        </div>
      </div>
      {games.length === 0 ? (
        <h2>No hay juegos en tu carrito</h2>
      ) : (
        <>
          <div className="row">
            <div className="table-responsive">
              <table className="shopBagTable table table-borderless align-middle">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Previo</th>
                    <th scope="col">Juego</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {games.map((game, index) => (
                    <ShopBagItem index={index} key={game._id} game={game} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-5">
            <div className="col-lg-2 d-flex align-items-center">
              <p className="itemCount">Cantidad:  {games.length}</p>
            </div>
            <div className="col-lg-10 d-flex justify-content-end">
              <div className="payment">
                Monto total:  ${total}
                <button>
                  Pagar <i className="bi bi-cash-coin"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Bag;
