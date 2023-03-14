import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Detail.css";

function Detail() {
  const id = useParams();
  let [title, setTitle] = useState("");
  let [largeCoverImage, setlargeCoverImage] = useState();
  let [runtime, setRuntime] = useState("");
  let [rating, setRating] = useState(0.0);
  let [date_uploaded, setDate_uploaded] = useState("");
  let [genres, setGenres] = useState("");
  let [descriptionFull, setDescriptionFull] = useState("");
  let [language, setLanguage] = useState("");

  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating&movie_id=${id}`
      )
    ).json();
    setLoading(false);

    const movies = json.data.movies;
    movies.map((movie) => {
      if (id.id == movie.id) {
        setTitle(movie.title);
        setlargeCoverImage(movie.large_cover_image);
        setRuntime(movie.runtime);
        setRating(movie.rating);
        setDate_uploaded(movie.date_uploaded);
        setGenres(movie.genres);
        setDescriptionFull(movie.description_full);
        setLanguage(movie.language);
      }
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return loading ? (
    <h1 className="load">loading...</h1>
  ) : (
    <div className="wrapper">
      <div className="infobox">
        <div>
          <img src={largeCoverImage} alt="이승호ㅗ" />
        </div>
        <div className="text">
          <div className="title">{title}</div>
          <p>러닝타임 : {runtime}분</p>
          <p>평점 : {rating}점</p>
          <p>개봉일 : {date_uploaded.slice(0, 11)}</p>
          <p>언어 : {language}</p>
          <p>장르 : {genres}</p>
          <p className="explane">{descriptionFull}</p>
        </div>

        <Link to="/Movie/">
          <div className="back">
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}X
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
