import { Link, useLocation } from "react-router-dom";
import foto from '../../images/poster-not-found-main.jpg';
import PropTypes from "prop-types";
import css from './MovieGalleryItem.module.css';

export const MovieGalleryItem = ({ poster_path, original_title, id }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    let URI = `${baseUrl}${fileSize}${poster_path}`;

    if (poster_path === null || poster_path === undefined) {
        URI = foto;
    }

    const location = useLocation();
    const currentPage = location.pathname === "/" ? "/movies" : location.pathname;

    return <li className={css.movieGalleryItem}>
            <Link to={`${currentPage}/${id}`} state={{from: location}}>
                <img src={URI} alt={original_title} className={css.movieGalleryItem__image}/>
            </Link>
        </li>
}


MovieGalleryItem.propTypes = {
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}