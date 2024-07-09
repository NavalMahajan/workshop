import React from "react";
import "./Listing.css";

const Listing = () => {
  const movies = [
    {
      title: "Inception",
      poster: "https://m.media-amazon.com/images/I/51x5TBSrxQL._AC_.jpg",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
      title: "The Dark Knight",
      poster: "https://m.media-amazon.com/images/I/81SjzEvRfHL._AC_SL1500_.jpg",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    },
    {
      title: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/71fjD1VX0LL._AC_SL1500_.jpg",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    },
    {
      title: "The Matrix",
      poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
      trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    },
    {
      title: "Pulp Fiction",
      poster: "https://m.media-amazon.com/images/I/81vto0C9ZWL._AC_SL1500_.jpg",
      trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    },
    {
      title: "Fight Club",
      poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
      trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
    },
  ];
  return (
    <div className="App">
      <header>
        <h1>Movie Trailers</h1>
      </header>
      <div className="movies-container">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie"
            onClick={() => window.open(movie.trailer, "_blank")}
          >
            <img src={movie.poster} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
