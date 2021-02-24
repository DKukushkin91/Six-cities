import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from '../reviews-list/review-list';
import ReviewsForm from '../reviews-form/review-form';
import ReviewsProp from '../reviews/review.prop';

const DetailOfferReview = ({comments}) => {
  const renderReviewsList = (<ReviewList comments={comments}/>);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{ReviewList.length}</span></h2>
      {renderReviewsList}
      <ReviewsForm/>
    </section>
  );
};

DetailOfferReview.propTypes = {
  comments: PropTypes.arrayOf(ReviewsProp).isRequired
};

export default DetailOfferReview;
