import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsDetails } from "services/moviesApi";
import { Loader } from 'components/Loader/Loader';
import { ReviewsInfo } from "components/ReviewsInfo/ReviewsInfo";

const Reviews = () => {
    
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);


  useEffect(() => {
      const getReviews = async () => {
      setIsLoading(true);

      try {
          const { results } = await getReviewsDetails(movieId);
        setReviews(results);
          
      } catch (error) {
      setError(error.message);
      
      }
      finally {
          setIsLoading(false)
      }
      }
  
      getReviews();
  }, [movieId, setError])

    return (
          <>
              {isLoading && <Loader />}
              {reviews && <ReviewsInfo reviews={reviews} />}
          </>
    )
}

export default Reviews;