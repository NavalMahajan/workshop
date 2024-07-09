import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Onboarding.css";
import axios from "axios";

const Onboarding = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [rating, setRating] = useState({ 28: 0, 35: 0, 27: 0, 53: 0, 9648: 0 });
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  // const [hasNotSeen, setHasNotSeen] = useState(false);
  const [progress, setProgress] = useState(0); // New state for progress

  const fetchMovies = async (userId) => {
    let uri = `https://api.themoviedb.org/3/discover/movie?api_key=e9ff354e6115c3d33431413ce35eba3c&with_genres=28`;

    await axios
      .get(uri)
      .then((response) => {
        console.log(response.data.results, "hiii");
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Couldnot fetch", error);
      });
  };
  const handleRating = (genre, rate) => {
    setRating((prevRating) => {
      let updatedRating = { ...prevRating }; // Create a copy of current rating state
      genre.forEach((item) => {
        if (updatedRating[item]) {
          updatedRating[item] += rate; // Update existing genre rating
        } else {
          updatedRating[item] = rate; // Initialize if genre does not exist
        }
      });
      return updatedRating; // Return the updated rating object
    });

    setProgress((prevProgress) => Math.min(prevProgress + 20, 100));
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleNotSeen = () => {
    // setRating({ ...rating, [movies[3].title]: "Have Not Seen" });
    // setHasNotSeen(true);
    console.log("hlooooo");
    setIndex((prevIndex) => prevIndex + 1);
    // Increase progress by 20% for "Have Not Seen"
    // setProgress((prevProgress) => Math.min(prevProgress + 20, 100));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    if (progress == 100) {
      console.log(
        `http://localhost:8080/preference?name=${location.state.formData.name}&gender=${location.state.formData.gender}&age=${location.state.formData.age}&email=${location.state.formData.email}&thriller=${rating[53]}&action=${rating[28]}&horror=${rating[27]}&comedy=${rating[35]}&suspense=${rating[9648]}`
      );
      navigate("/listing");
    }
  }, [progress]);

  console.log(location.state.formData);

  return (
    <div className="onboarding-page">
      {console.log(movies[0]?.original_title)}
      <div className="card-Wrapper">
        <div className="movies-container">
          <div className="movie">
            <div className="loading-bar-container">
              <div
                className="loading-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <h2>{movies[index]?.original_title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movies[index]?.poster_path}`}

              //   alt={`${movies[index].original_title} poster`}
            />
            <div className="rating-options">
              <button onClick={() => handleRating(movies[index]?.genre_ids, 4)}>
                Good
              </button>
              <button onClick={() => handleRating(movies[index]?.genre_ids, 3)}>
                Excellent
              </button>
              <button onClick={() => handleRating(movies[index]?.genre_ids, 2)}>
                1-time watch
              </button>
              <button onClick={() => handleRating(movies[index]?.genre_ids, 1)}>
                Nah
              </button>
            </div>
            {rating[movies[index]?.original_title] && (
              <p className="rating-result">
                You rated this movie: {rating[movies[index]?.original_title]}
              </p>
            )}
          </div>
        </div>
        <div className="not-seen-container">
          {!rating[movies[index]?.original_title] && (
            <button className="not-seen-button" onClick={() => handleNotSeen()}>
              Have Not Seen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
