import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "6d5d355a"; // Your OMDB API key

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movie data from OMDB API
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error("Error fetching movie data", e);
    }
  };

  // Array of movie titles to pick from
  const movieTitles = [
    "The Godfather", 
    "Forrest Gump", 
    "The Dark Knight", 
    "Inception", 
    "Titanic", 
    "The Shawshank Redemption", 
    "Clueless",
    "Pulp Fiction",
    "The Matrix",
    "Gladiator"
  ];

  // UseEffect to load a random movie on page load
  useEffect(() => {
    const randomMovie = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    getMovie(randomMovie); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
