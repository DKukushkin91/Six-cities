import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ReviewList from '../reviews-list/review-list';
import ReviewsForm from '../reviews-form/review-form';
import ReviewsProp from '../reviews/review.prop';
import {getReviews} from "../../util";

const DetailOfferReview = ({comments, offerId}) => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const reviews = getReviews(comments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      {<ReviewList comments={reviews}/>}
      {authorizationStatus && <ReviewsForm comments={comments} offerId={offerId}/>}
    </section>
  );
};

DetailOfferReview.propTypes = {
  offerId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(ReviewsProp).isRequired,
};

export default memo(DetailOfferReview, (prevProps, nextProps) =>
  prevProps.comments === nextProps.comments
);
