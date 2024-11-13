import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "6d5d355a"; 

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

  // UseEffect to load a default movie on page load
  useEffect(() => {
    getMovie("Clueless"); // Fetch "Clueless" movie by default
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
