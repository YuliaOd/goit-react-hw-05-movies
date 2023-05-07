import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastDetails } from "services/moviesApi";
import { Loader } from 'components/Loader/Loader';
import { CastInfo } from "components/CastInfo/CastInfo";


const Cast = () => {

  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);


  useEffect(() => {
      const getCast = async () => {
      setIsLoading(true);

      try {
          const { cast } = await getCastDetails(movieId);
        setCast(cast);
          
      } catch (error) {
      setError(error.message);
      
      }
      finally {
          setIsLoading(false)
      }
      }
  
      getCast();
  }, [movieId, setError])

    return (
          <>
              {isLoading && <Loader />}
              {cast && <CastInfo cast={cast} />}
          </>
    )
}

export default Cast;