import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "services/moviesApi";
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { GoBackBtn } from "components/GoBackBtn/GoBackBtn";

const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  const location = useLocation();



  useEffect(() => {
      const getMovie = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieDetails(movieId);

        setMovie(data);
          
      } catch (error) {
      setError(error.message);
      
      }
      finally {
          setIsLoading(false)
      }
      }
  
      getMovie();
  }, [movieId, setError])

    return (
          <>
            {isLoading && <Loader />}
        
            <GoBackBtn path={location?.state?.from ?? "/"}/>
      
            {movie && <MovieInfo {...movie} />}
      
            <Outlet />
          </>
    )
}

export default MovieDetails;