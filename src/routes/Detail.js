import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id: movieId } = useParams();
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
    );
    const {
      data: { movie },
    } = await response.json();
    setMovie(movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            key={movie.id}
            isHome={false}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            summary={movie.description_intro}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
