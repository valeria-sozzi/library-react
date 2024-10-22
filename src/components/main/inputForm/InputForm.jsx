import React from "react";
import "./InputForm.scss";

const InputForm = ({ bookValue, setBookValue }) => {
  return (
    <div className="input-container">
      <label htmlFor="bookTitle">Ricerca Libro per titolo</label>
      <input
        id="bookTitle"
        value={bookValue}
        placeholder="Cerca Libro..."
        onChange={(e) => setBookValue(e.target.value)}
      />
    </div>
  );
};

export default InputForm;
