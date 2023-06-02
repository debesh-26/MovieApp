import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const ShowCard = ({ show }) => {
  console.log(show);
  return (
    <div className="show-card">
      <img className="show-image" src={show.show.image.medium} alt={show.name} />
      <div className="show-details">
        <h2 className="show-title">{show.show.name}</h2>
        <p className="show-summary">{show.show.summary}</p>
        <p className="show-rating">Rating: {show.show.rating.average}</p>
        <p className="show-rating">Language: {show.show.language}</p>
        <Link to={`/shows/${show.show.id}`} className="view-details">View Details</Link>
      </div>
    </div>
  );
};

export default ShowCard;
