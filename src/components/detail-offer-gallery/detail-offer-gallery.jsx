import React from "react";
import PropTypes from 'prop-types';
import {MAX_GALLERY_IMG} from "../../constants";

const DetailOfferGallery = ({images}) => {
  return (

    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, MAX_GALLERY_IMG).map((item)=> (
          <div key={item} className="property__image-wrapper">
            <img className="property__image" src={`${item}`} alt="Photo studio" />
          </div>)
        )}
      </div>
    </div>
  );
};


DetailOfferGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default DetailOfferGallery;
