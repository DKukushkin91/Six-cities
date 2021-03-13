import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from '../reviews-list/review-list';
import ReviewsForm from '../reviews-form/review-form';
import ReviewsProp from '../reviews/review.prop';
import {connect} from 'react-redux';

const DetailOfferReview = ({comments, offerId, authorizationStatus}) => {
  const renderReviewsList = (<ReviewList comments={comments}/>);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      {renderReviewsList}
      {authorizationStatus && <ReviewsForm offerId={offerId}/>}
    </section>
  );
};

const mapStateToProps = ({authorizationStatus}) => ({authorizationStatus});

DetailOfferReview.propTypes = {
  offerId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(ReviewsProp).isRequired,
  authorizationStatus: PropTypes.bool.isRequired
};

export {DetailOfferReview};
export default connect(mapStateToProps, ``)(DetailOfferReview);
