import React from 'react';
import Review from '../reviews/review';
import PropTypes from 'prop-types';
import ReviewProp from '../reviews/review.prop';

const ReviewList = ({comments}) => {
  const renderReviews = comments.map((item) => <Review comments={item} key={item.id}/>);
  return (
    <ul className="reviews__list">
      {renderReviews}
    </ul>
  );
};

ReviewList.propTypes = {
  comments: PropTypes.arrayOf(ReviewProp).isRequired
};

export default ReviewList;
