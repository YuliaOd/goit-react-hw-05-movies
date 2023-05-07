import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { SearchForm } from "components/SearchForm/SearchForm";
import { getSearchMovies } from "services/moviesApi";
import { Loader } from "components/Loader/Loader";
import { MovieGallery } from "components/MovieGallery/MovieGallery";
import { Button } from "components/Button/Button";
import css from "./Movies.module.css";

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isVissible, setIsVissible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);
  
  const query = searchParams.get("query") ?? '';

  useEffect(() => {
      if (!query) return;
    
      const getMoviesBySearch = async () => {
      setIsLoading(true);

      try {
        const { results, total_results } = await getSearchMovies(query, page);
        
        if (total_results === 0) {
            setIsVissible(false)
            return Notiflix.Notify.failure("Sorry, there are no movies matching your search query. Please try again.");
        };

        if (page > Math.ceil(total_results / 20)) {
            setIsVissible(false)
            return Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
        };
        
        setSearchMovies(prevState => [...prevState, ...results]);
        setIsVissible(page < Math.ceil(total_results / 20))
          
      } catch (error) {
      setError(error.message);
      
      }
      finally {
          setIsLoading(false)
      }
      }
  
      getMoviesBySearch();
  }, [query, page])
  

  const handleFormSubmit = value => {
      const nextParams = value !== "" ? { query: value } : {};
      setSearchParams(nextParams);  
      setSearchMovies([]);
      setPage(1);
      setError(false);
  }

  const loadMoreButton = () => {
        setPage(prevState => (prevState + 1))
    };
    
  return (
         <div className={css.container}>
            <SearchForm onSubmit={handleFormSubmit} />
            
            {isLoading && <Loader />}
            
            {searchMovies.length > 0 && <MovieGallery movies={searchMovies} />}
            
            {isVissible && (<Button disabled={isLoading} onLoadMoreButton={loadMoreButton}>
                {isLoading ? 'Loading...' : 'Load more'}
                </Button>)}
      
          </div>
    )
}

export default Movies;