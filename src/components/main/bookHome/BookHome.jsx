import React from "react";
import "./BookHome.scss";
import BookCard from "../bookCard/BookCard";

const BookHome = ({ books, bookValue }) => {
  return (
    <div className="books-container">
      {books.map(
        (book) =>
          book.title.toLowerCase().includes(bookValue) && (
            <div key={book.id}>
              <BookCard book={book} />
            </div>
          )
      )}
    </div>
  );
};

export default BookHome;
