import React from 'react';
import PropTypes from 'prop-types';

const DetailOfferHost = ({description, host}) => {
  const {name, avatarUrl, isPro} = host;
  const onProHost = isPro ? `--pro` : ``;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper property__avatar-wrapper${onProHost} user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

DetailOfferHost.propTypes = {
  description: PropTypes.string.isRequired,
  host: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

export default DetailOfferHost;
