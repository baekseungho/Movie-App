import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css";

function Detail() {
  const id = useParams();
  const [title, setTitle] = useState("");
  const [large_cover_image, setLarge_cover_image] = useState();
  const [runtime, setRuntime] = useState("");
  const [rating, setRating] = useState(0.0);
  const [date_uploaded, setDate_uploaded] = useState("");

  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating&movie_id=${id}`
      )
    ).json();
    setLoading(false);
    console.log(id);
    const movies = json.data.movies;
    movies.map((movie) => {
      if (id.id == movie.id) {
        setTitle(movie.title);
        setLarge_cover_image(movie.large_cover_image);
        setRuntime(movie.runtime);
        setRating(movie.rating);
      }
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div className="infobox">
      <h1>{title}</h1>
      <div>
        <img src={large_cover_image} alt="" />
      </div>
      <h1>
        {runtime}시간,{rating}점
      </h1>
    </div>
  );
}

export default Detail;
