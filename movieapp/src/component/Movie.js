import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, coverimage, title, summary, genres }) {
  return (
    <div className="box">
      <img src={coverimage} alt={title} />
      <h2>
        <Link className="noto-sans _900" to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <textarea className="summary" value={summary} disabled></textarea>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
