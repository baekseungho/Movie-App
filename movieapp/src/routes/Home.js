import { useEffect, useState } from "react";
import Movie from "../component/Movie";
import Detail from "../routes/Detail";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=rating&limit=50`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>
          <div className="loder"></div>
          <h1 className="load">loading...</h1>
        </div>
      ) : (
        <div className="wrapper">
          <nav>
            <h1 className="logo">SH Movie SAP</h1>
          </nav>
          <div className="bodyWrapper">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverimage={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                date={movie.date_uploaded}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
