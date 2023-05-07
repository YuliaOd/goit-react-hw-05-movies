import PropTypes from "prop-types";
import css from "./ReviewsItem.module.css";

export const ReviewsItem = ({ author, content }) => {

    return (
            <li className={css.reviewsItem}>
                <h3 className={css.title}>Author: {author}</h3>
                <p className={css.text}>{content}</p>
            </li>
    )
}


ReviewsItem.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string
}