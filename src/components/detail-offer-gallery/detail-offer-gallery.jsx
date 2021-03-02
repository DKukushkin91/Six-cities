import React from "react";
import PropTypes from 'prop-types';
import {MAX_GALLERY_IMG} from "../../constants";

const DetailOfferGallery = ({offer}) => {
  const {images} = offer;
  return (
    <>
      {images.slice(0, MAX_GALLERY_IMG).map((item)=> (
        <div key={item} className="property__image-wrapper">
          <img className="property__image" src={`${item}`} alt="Photo studio" />
        </div>)
      )}
    </>
  );
};


DetailOfferGallery.propTypes = {
  offer: PropTypes.object.isRequired
};

export default DetailOfferGallery;
