import PropTypes from "prop-types";
import { ReviewsItem } from "components/ReviewsItem/ReviewsItem";
import css from "./ReviewsInfo.module.css";


export const ReviewsInfo = ({ reviews }) => {

    return (
            <ul className={css.reviewInfoList}>
                {reviews.length > 0 ? reviews.map(review => (
                    <ReviewsItem key={review.id} {...review}/>
                )) : <div>We don't have any reviews for this movie.</div>}
            </ul> 
    )
}


ReviewsInfo.propTypes = {
    cast: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        review: PropTypes.string,
    }))
}