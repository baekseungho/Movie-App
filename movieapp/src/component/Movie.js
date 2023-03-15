import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, coverimage, title, rating, date, genres }) {
  return (
    <div className="box">
      <div className="op">
        <img src={coverimage} alt={title} />
        <h2>
          <Link className="noto-sans _900" to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        {/* <textarea className="summary" value={summary} disabled></textarea> */}
        <div className="DnR">
          {date.slice(0, 11)} / {rating}
          <span> </span>
          <i className="fa-solid fa-star"></i>
        </div>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  // coverimg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
