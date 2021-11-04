import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ isHome, id, coverImg, title, summary, genres }) {
  return (
    <div>
      <Link to={isHome ? `/movies/${id}` : "/"}>
        <img alt={title} src={coverImg} />
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  isHome: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
