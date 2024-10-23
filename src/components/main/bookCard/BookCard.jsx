import React from "react";
import "./BookCard.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BookCard = ({ book, cartElements, setCartElements }) => {
  return (
    <div className="card-book">
      <div className="image">
        <img src={book.coverImage} />
      </div>
      <div className="details-book">
        <h2>{book.title}</h2>
        <p>€ {book.price}</p>
        <div className="book-info">
          <Link to={"/dettagli"} state={{ book: book }} className="link">
            Dettagli
          </Link>
          <button
            className="link"
            onClick={() => {
              const bookOnCart = {
                title: book.title,
                price: book.price,
                id: book.id,
              };
              const newCartElements = [...cartElements, bookOnCart];
              setCartElements(newCartElements);
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
