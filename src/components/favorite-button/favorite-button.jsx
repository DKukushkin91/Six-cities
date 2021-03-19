import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {favoriteStatus} from '../../store/api-actions';
import {useDispatch, useSelector} from "react-redux";
import {componentNameProp} from '../component-name/component-name.prop';
import {favoriteNameProp} from './favorite-button.prop';
import {redirectToRoute} from '../../store/action';
import {ComponentName, Paths} from "../../constants";

const FavoriteButton = ({isFavorite, id, componentName, buttonSize}) => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const dispatch = useDispatch();
  const activeStyle = {
    position: `absolute`,
    top: 41,
    right: 93,
    width: 31,
    height: 33,
    marginTop: 2
  };
  const changeStyle = componentName === ComponentName.PROPERTY ? activeStyle : null;

  const handleClick = useCallback(() => {
    if (!authorizationStatus) {
      dispatch(redirectToRoute(Paths.LOGIN));
    } else {
      dispatch(favoriteStatus({
        id,
        favorite: Number(!isFavorite)
      }));
    }
  }, [isFavorite]);

  return (
    <button
      style={changeStyle}
      className={`${componentName}__bookmark-button${isFavorite ? `--active` : ``} button`}
      onClick={handleClick}
      type="button">
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
  componentName: componentNameProp,
  buttonSize: favoriteNameProp
};

export default FavoriteButton;
