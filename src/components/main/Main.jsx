import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import InputForm from "./inputForm/InputForm";
import "./Main.scss";
import BookHome from "./bookHome/BookHome";
import BookDetails from "./bookDetails/BookDetails";

const Main = ({ books }) => {
  const [bookValue, setBookValue] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="card-container">
                <div className="col-left">
                  <InputForm
                    bookValue={bookValue}
                    setBookValue={setBookValue}
                  />
                </div>
                <div className="col-right">
                  <BookHome books={books} bookValue={bookValue} />
                </div>
              </main>
            </>
          }
        />
        <Route
          path="/dettagli"
          element={
            <>
              <main className="card-container">
                <div className="col-left">
                  <InputForm
                    bookValue={bookValue}
                    setBookValue={setBookValue}
                  />
                </div>
                <div className="col-right">
                  <BookDetails />
                </div>
              </main>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
