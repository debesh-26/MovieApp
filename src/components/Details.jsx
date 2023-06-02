import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Details = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    movieName: "",
    runtime: "",
    premiered: "",
    time: "",
    day: "",
  });
  console.log(formData);
  useEffect(() => {
    fetchShowDetails();
  }, [showId]);

  const fetchShowDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${showId}`
      );
      setShow(response.data);
      setFormData((prevState) => ({
        ...prevState,
        movieName: response.data.name,
        runtime: response.data.runtime,
        premiered: response.data.premiered,
        time: response.data.schedule.time,
        day: response.data.schedule.days[0],
        // Set other relevant form field values here
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // You can save the form data to local/session storage if needed
    // Reset form fields
    setFormData({
      movieName: "",
      runtime: "",
      premiered: "",
      time: "",
      day: "",
      // Reset other form field values
    });
  };

  return (
    <div className="container">
      {show ? (
        <div className="show-detail">
          <h1 className="show-title" style={{fontSize:"30px"}}>{show.name}</h1>
          <div>
            <img
              className="show-image-detail"
              src={show.image.original}
              alt={show.name}
            />
          </div>
          <p className="show-summary">{show.summary}</p>
          <p className="show-rating">Rating: {show.rating.average}</p>
          <p className="show-rating">Language: {show.language}</p>
          <p className="show-rating">
            Genre:{" "}
            {show.genres.map((e) => {
              return e + " ";
            })}
          </p>
          {!showForm ? (
            <button className="book-ticket" onClick={() => setShowForm(true)}>
              Book Ticket
            </button>
          ) : (
            <form className="booking-form" onSubmit={handleFormSubmit}>
              <h2>Booking Details</h2>
              <div className="form-field">
                <label htmlFor="movieName">Movie Name:</label>
                <input
                  type="text"
                  id="movieName"
                  name="movieName"
                  value={formData.movieName}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      movieName: e.target.value,
                    }))
                  }
                  disabled
                />
                <label htmlFor="movieName">Run Time:</label>
                <input
                  type="text"
                  id="runtime"
                  name="runtime"
                  value={formData.runtime}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      runtime: e.target.value,
                    }))
                  }
                  disabled
                />
                <label htmlFor="movieName">Premiered Date:</label>
                <input
                  type="text"
                  id="premiered"
                  name="premiered"
                  value={formData.premiered}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      premiered: e.target.value,
                    }))
                  }
                  disabled
                />
                <label htmlFor="movieName">Show Time:</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      time: e.target.value,
                    }))
                  }
                  disabled
                />
                <label htmlFor="movieName">Show Day:</label>
                <input
                  type="text"
                  id="day"
                  name="day"
                  value={formData.day}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      day: e.target.value,
                    }))
                  }
                  disabled
                />
              </div>
              {/* Add other relevant form fields */}
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      ) : (
        <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Loading...</p>
      )}
    </div>
  );
};

export default Details;
