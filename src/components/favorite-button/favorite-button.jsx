import React, {useEffect, useRef} from 'react';
import OfferProp from "../offer/offer.prop";
import PropTypes from "prop-types";
import {favoriteStatus} from "../../store/api-actions";
import {connect} from "react-redux";

const FavoriteButton = ({offers, onChangeStatus}) => {
  const {isFavorite, id} = offers;
  const favoriteRef = useRef();

  useEffect(() => {
    favoriteRef.current.className = isFavorite
      ? `place-card__bookmark-button--active button`
      : `place-card__bookmark-button button`;

  }, [isFavorite]);

  const handleClick = (evt) => {
    evt.preventDefault();
    onChangeStatus({
      id,
      favorite: Number(!isFavorite)
    });
  };

  return (
    <>
      <button ref={favoriteRef} onClick={handleClick} type="button">
        <svg className="place-card__bookmark-icon" width={18} height={19}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </>
  );
};

FavoriteButton.propTypes = {
  offers: OfferProp.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeStatus(data) {
    dispatch(favoriteStatus(data));
  }
});

export {FavoriteButton};
export default connect(``, mapDispatchToProps)(FavoriteButton);
