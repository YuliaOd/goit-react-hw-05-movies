import PropTypes from 'prop-types';
import foto from '../../images/not-found.png';
import css from "./CastItem.module.css";

export const CastItem = ({ character, name, profile_path }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    let URI = `${baseUrl}${fileSize}${profile_path}`;

    if (profile_path === null || profile_path === undefined) {
        URI = foto;
    }

    return (
            <li className={css.castItem}>
                <img src={URI} alt={name} className={css.castItem__image}/>
                <div className={css.castItem__wrapper}>
                    <p className={css.title}>{name}</p>
                    <p className={css.text}>Character: {character}</p>
                </div>
            </li>
    )
}


CastItem.propTypes = {
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string
}
