import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

export const Button = ({ onLoadMoreButton, children }) => {
    return <button type="submit" onClick={onLoadMoreButton} className={css.button}>{children}</button>
}



Button.propTypes = {
    children: PropTypes.string,
    onLoadMoreButton: PropTypes.func.isRequired,
}