import React from "react";
import "./BookHome.scss";
import BookCard from "../bookCard/BookCard";

const BookHome = ({ books, bookValue, cartElements, setCartElements }) => {
  return (
    <div className="books-container">
      {books.map(
        (book) =>
          book.title.toLowerCase().includes(bookValue) && (
            <div key={book.id}>
              <BookCard
                book={book}
                cartElements={cartElements}
                setCartElements={setCartElements}
              />
            </div>
          )
      )}
    </div>
  );
};

export default BookHome;
