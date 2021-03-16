import React, {useEffect, useRef, useCallback} from 'react';
import OfferProp from "../offer/offer.prop";
import {favoriteStatus} from "../../store/api-actions";
import {useDispatch} from "react-redux";
import {componentNameProp} from "../component-name/component-name.prop";
import {favoriteNameProp} from './favorite-button.prop';

const FavoriteButton = ({offers, componentName, buttonSize}) => {
  const {isFavorite, id} = offers;
  const favoriteRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    favoriteRef.current.className = isFavorite ?
      `${componentName}__bookmark-button--active button`
      :
      `${componentName}__bookmark-button button`;
  }, [isFavorite]);

  const handleClick = useCallback(() => {
    dispatch(favoriteStatus({
      id,
      favorite: Number(!isFavorite)
    }));
  }, [isFavorite]);

  return (
    <>
      <button ref={favoriteRef} onClick={handleClick} type="button">
        <svg className={`${componentName}__bookmark-icon`} width={buttonSize.WIDTH} height={buttonSize.HEIGHT}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </>
  );
};

FavoriteButton.propTypes = {
  offers: OfferProp.isRequired,
  componentName: componentNameProp,
  buttonSize: favoriteNameProp
};

export default FavoriteButton;
