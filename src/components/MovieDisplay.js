export default function MovieDisplay({ movie }) {
    const loaded = () => (
      <>
        <h1>{movie.Title} ({movie.Year})</h1>
        <h2>{movie.Genre}</h2>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <img src={movie.Poster} alt={movie.Title} />
      </>
    );
  
    const loading = () => <h1>No Movie to Display</h1>;
  
    return movie ? loaded() : loading();
  }
  