import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';
import ReviewProp from '../review/review.prop';

const ReviewList = ({comments}) => {

  return (
    <ul className="reviews__list">
      {comments.map((item) => <Review comments={item} key={item.id}/>)}
    </ul>
  );
};

ReviewList.propTypes = {
  comments: PropTypes.arrayOf(ReviewProp).isRequired
};

export default ReviewList;
