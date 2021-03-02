export const offerAdapter = (offer) => {

  const {is_favorite: isFavorite,
    is_premium: isPremium,
    max_adults: maxAdults,
    preview_image: previewImage,
    host: {is_pro: isPro, avatar_url: avatarUrl, ...restHost},
    ...restOffer
  } = offer;

  return {
    isFavorite,
    isPremium,
    maxAdults,
    previewImage,
    host: {isPro, avatarUrl, ...restHost},
    ...restOffer
  };
};

export const offersAdapter = (offers) => (
  offers.map((offer) => offerAdapter(offer))
);
