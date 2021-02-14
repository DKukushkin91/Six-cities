import React from 'react';
import Reviews from '../reviews/reviews';
import PropType from 'prop-types';

const ReviewsList = ({comments}) => {
  const renderReviews = comments.map((item) => <Reviews comments={item} key={item.id}/>);
  return (
    <ul className="reviews__list">
      {renderReviews}
    </ul>
  );
};

ReviewsList.propTypes = {
  comments: PropType.array.isRequired
};

export default ReviewsList;
