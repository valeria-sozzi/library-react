import React from "react";
import "./BookCard.scss";

const BookCard = ({ book }) => {
  return (
    <div className="card-book">
      <div className="image">
        <img src={book.coverImage} />
      </div>
      <div className="details-book">
        <h2>{book.title}</h2>
        <p>€ {book.price}</p>
      </div>
    </div>
  );
};

export default BookCard;
