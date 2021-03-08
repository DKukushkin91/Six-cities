import React, {useState} from 'react';
import {RatingStar, Condition} from '../../constants';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentsPost} from '../../store/api-actions';

const ReviewForm = ({onAddComment, offerId}) => {
  const [data, changeData] = useState({
    rating: ``,
    review: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {target: form} = evt;
    onAddComment(
        offerId,
        {
          comment: data.review,
          rating: data.rating
        }
    );
    form.reset();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    changeData({...data, [name]: value});
  };

  const disabled = !(data.rating > Condition.MIN_RATING && data.review.length > Condition.MIN_DESCRIPTION && data.review.length < Condition.MAX_DESCRIPTION);

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStar.map((item) =>
          <React.Fragment key={item.stars}>
            <input onClick={handleFieldChange} className="form__rating-input visually-hidden" name="rating" id={`${item.stars}-stars`}
              defaultValue={`${item.stars}`} type="radio"/>
            <label htmlFor={`${item.stars}-stars`} className="reviews__rating-label form__rating-label" title={`${item.title}`}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        )}
      </div>
      <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={``}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span>
            and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAddComment(data, {comment, rating}) {
    dispatch(commentsPost(data, {comment, rating}));
  },
});

export {ReviewForm};
export default connect(``, mapDispatchToProps)(ReviewForm);
