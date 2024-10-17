import BookCard from "./bookCard/BookCard";
import "./Main.scss";

const Main = ({ books }) => {
  return (
    <main className="card-container">
      <div className="col-left"></div>
      <div className="col-right">
        <div className="books-container">
          {books.map((book) => (
            <div key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
