import React from "react";
import "./BookDetails.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BookDetails = () => {
  let { state } = useLocation();
  console.log(state);
  return (
    <div className="book-details-container">
      <div className="col-left-details">
        <img src={state.book.coverImage} />
      </div>
      <div className="col-right-details">
        <h2>{state.book.title}</h2>
        <p>{state.book.description}</p>
        <p>
          <strong>€ {state.book.price}</strong>
        </p>
        <p>{state.book.details}</p>
        <div className="book-info">
          <Link to={"/"} className="link">
            Torna alla Home
          </Link>
          <button className="link">
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
