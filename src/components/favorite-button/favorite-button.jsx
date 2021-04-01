import React from 'react';
import PropTypes from 'prop-types';
import {favoriteStatus} from '../../store/api-actions';
import {useDispatch, useSelector} from "react-redux";
import {favoriteNameProp} from './favorite-button.prop';
import {redirectToRoute} from '../../store/action';
import {Path} from '../../constants';

const FavoriteButton = ({isFavorite, id, componentName, buttonSize}) => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!authorizationStatus) {
      dispatch(redirectToRoute(Path.LOGIN));
    } else {
      dispatch(favoriteStatus({
        id,
        favorite: Number(!isFavorite)
      }));
    }
  };

  return (
    <button
      className={`${componentName}__bookmark-button ${isFavorite ? `${componentName}__bookmark-button--active` : ``} button`}
      onClick={handleClick}
      type="button"
      data-testid="favorite-button"
    >
      <svg className={`${componentName}__bookmark-icon`} width={buttonSize.WIDTH} height={buttonSize.HEIGHT}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  componentName: PropTypes.string.isRequired,
  buttonSize: favoriteNameProp
};

export default FavoriteButton;
