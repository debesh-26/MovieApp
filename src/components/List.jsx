import React, { useState, useEffect } from 'react';
import "../styles.css"
import axios from 'axios';
import ShowCard from './ShowCard';


const List = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setShows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">TV Shows</h1>
      <div className="show-list">
        {shows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default List;
