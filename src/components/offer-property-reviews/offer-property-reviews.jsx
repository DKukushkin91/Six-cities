import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';

const OfferPropertyReviews = ({comments}) => {
  const renderReviewsList = (<ReviewsList comments={comments}/>);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{ReviewsList.length}</span></h2>
      {renderReviewsList}
      <ReviewsForm/>
    </section>
  );
};

OfferPropertyReviews.propTypes = {
  comments: PropTypes.array.isRequired
};

export default OfferPropertyReviews;
