import React, {useState, useEffect} from 'react';
import {RatingStar} from '../../constants';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {isSubmitDisabled} from '../../util';
import {commentsPost} from '../../store/api-actions';
import ReviewsProp from "../reviews/review.prop";

const initState = {
  rating: ``,
  review: ``
};

const ReviewForm = ({comments, offerId}) => {
  const dispatch = useDispatch();
  const [fieldDisabled, setFieldDisabled] = useState(false);
  const [data, changeData] = useState(initState);

  useEffect(() => {
    setFieldDisabled(false);
    changeData(initState);
  }, [comments]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {target: form} = evt;
    setFieldDisabled(true);
    dispatch(
        commentsPost(
            offerId,
            {
              comment: data.review,
              rating: data.rating
            }
        )
    );
    form.reset();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    changeData({...data, [name]: value});
  };

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStar.map(({stars, title}) =>
          <React.Fragment key={stars}>
            <input onClick={handleFieldChange} className="form__rating-input visually-hidden" name="rating" id={`${stars}-stars`}
              defaultValue={`${stars}`} type="radio" disabled={fieldDisabled}/>
            <label htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={`${title}`}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        )}
      </div>
      <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={``} disabled={fieldDisabled}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span>
            and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled(data, fieldDisabled)}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(ReviewsProp).isRequired
};

export default ReviewForm;
