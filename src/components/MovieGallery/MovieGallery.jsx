import PropTypes from 'prop-types';
import { MovieGalleryItem } from '../MovieGalleryItem/MovieGalleryItem';
import css from './MovieGallery.module.css';

export const MovieGallery = ({ movies }) => {
    return <ul className={css.movieGallery}>
                {movies.length > 0 && movies.map(movie => (
                    <MovieGalleryItem key={movie.id} {...movie} />
                ))}
            </ul>
}



MovieGallery.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            movie: PropTypes.string,
        })
    )
}