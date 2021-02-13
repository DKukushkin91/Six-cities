import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({comments}) => {
  const {comment, date, user: {avatarUrl, name}} = comments;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `80%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};

Reviews.propTypes = {
  comments: PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Reviews;
