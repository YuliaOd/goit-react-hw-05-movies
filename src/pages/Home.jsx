import { useEffect, useState } from "react";
import Notiflix from 'notiflix';
import { getTrendingMovies } from "services/moviesApi";
import { Loader } from 'components/Loader/Loader';
import { Button } from "components/Button/Button";
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import css from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isVissible, setIsVissible] = useState(false);
    const [, setError] = useState(false);


    useEffect(() => {
        const getMovies = async () => {
        setIsLoading(true);

        try {
            const { results, total_results } = await getTrendingMovies(page);

            if (page > Math.ceil(total_results / 20)) {
                setIsVissible(false)
                return Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
            };
            
            setMovies(prevState => [...prevState, ...results]);
            setIsVissible(page < Math.ceil(total_results / 20))
            
        } catch (error) {
        setError(error.message);
        
        }
        finally {
            setIsLoading(false)
        }
        }
    
        getMovies();
    },[page])

    const loadMoreButton = () => {
        setPage(prevState => (prevState + 1))
    };

    return (
            <div className={css.container}>
                <h1 className={css.title}>Trending today</h1>
                {isLoading && <Loader />}
                <MovieGallery movies={movies} />
                {isVissible && (<Button disabled={isLoading} onLoadMoreButton={loadMoreButton}>
                {isLoading ? 'Loading...' : 'Load more'}
                </Button>)}
            </div>
    )
}

export default Home;