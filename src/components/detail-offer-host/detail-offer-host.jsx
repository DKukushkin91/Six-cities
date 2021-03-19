import React, {memo} from 'react';
import OfferProp from '../offer/offer.prop';

const DetailOfferHost = ({offer}) => {
  const {description, host: {name, avatarUrl, isPro}} = offer;
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
  offer: OfferProp.isRequired
};

export default memo(DetailOfferHost, (prevProps, nextProps) =>
  prevProps.offer === nextProps.offer
);
