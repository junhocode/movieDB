import Button from './Button';

interface Movie {
  id : number;
  title : string;
  review : string;
  rating : number;
}

interface MovieLogProps {
  movieLog : Movie[];
  setMovieLog : React.Dispatch<React.SetStateAction<Movie[]>>;
};

const MovieLog = ({ movieLog, setMovieLog }: MovieLogProps) => {

    const deleteMovie = ( id: number ) => {
        const newMovieLog = movieLog.filter((movie) => movie.id !== id);
        setMovieLog(newMovieLog)
    };

  return (
    <div>
      <h3>My Movie Log</h3>
      {movieLog.length === 0 ? (
        <p>No movies logged yet!</p>
      ) : (
      <ul>
        {movieLog.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title} - {movie.review} - {movie.rating} Stars</span>
            <Button onClick={() => deleteMovie(movie.id)}>Delete</Button>
          </li>
        ))}
      </ul>
      )}  
    </div>
  );
};

export default MovieLog;