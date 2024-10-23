import React, { useEffect, useState } from "react";
import "./Cart.scss";

const Cart = ({ cartElements }) => {
  const [cartBooks, setCartBooks] = useState([]);
  console.log("🚀 ~ Cart ~ cartBooks:", cartBooks);
  let sum = cartBooks.reduce((total, el) => total + el?.totalPrice, 0);

  useEffect(() => {
    cartElements.map((cartElement) => {
      if (cartBooks.some((book) => cartElement.id === book.id)) {
        // se c'è già un libro con stesso id nel carrello

        const newCartBooks = cartBooks.map((cartBook) => {
          // cerco quel libro
          if (cartBook.id === cartElement.id) {
            // trovato quel libro
            return {
              // lo ritorno con prezzo totale aggiornato
              ...cartBook,
              totalPrice: cartBook.totalPrice + cartBook.price,
              quantity: cartBook.quantity + 1,
            };
          } else {
            // se non è quel libro non lo aggiorno e lo ritorno così come già è
            return cartBook;
          }
        });
        setCartBooks(newCartBooks);
      } else {
        // se non c'è già un libro con stesso id nel carrello
        setCartBooks((prev) => [
          // aggiungo il nuovo libro
          ...prev,
          { ...cartElement, totalPrice: cartElement.price, quantity: 1 },
        ]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartElements]);

  return (
    <div className="cart-container">
      {}
      <h2>Carrello</h2>
      <div className="cart-body">
        <div className="cart-contents">
          {cartBooks.map((cartBook) => (
            <div key={cartBook.id} className="cart-element-container">
              <h3>{cartBook.title}</h3>
              <div className="cart-quantity">{cartBook.quantity}</div>
              <p>€ {cartBook.totalPrice.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="end-cart">
          <div className="hr" />
          <div className="tot">
            <span>Totale</span>
            <span>€ {sum?.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
