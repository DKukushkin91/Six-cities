import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ReviewList from '../reviews-list/review-list';
import ReviewsForm from '../reviews-form/review-form';
import ReviewsProp from '../reviews/review.prop';
import {sortReviews} from "../../util";
import {MAX_REVIEWS} from "../../constants";

const DetailOfferReview = ({comments, offerId}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const currentReviews = [...comments].sort(sortReviews)
    .slice(0, MAX_REVIEWS.LENGTH);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{currentReviews.length}</span></h2>
      {<ReviewList comments={currentReviews}/>}
      {authorizationStatus && <ReviewsForm offerId={offerId}/>}
    </section>
  );
};

DetailOfferReview.propTypes = {
  offerId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(ReviewsProp).isRequired,
};

export default DetailOfferReview;
