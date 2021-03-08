export const offerAdapter = (offer) => {

  const {
    is_favorite: isFavorite,
    is_premium: isPremium,
    max_adults: maxAdults,
    preview_image: previewImage,
    host: {
      is_pro: isPro,
      avatar_url: avatarUrl,
      ...restHost
    },
    ...restOffer
  } = offer;

  return {
    isFavorite,
    isPremium,
    maxAdults,
    previewImage,
    host: {
      isPro,
      avatarUrl,
      ...restHost
    },
    ...restOffer
  };
};

export const adaptOffers = (offers) => (
  offers.map((offer) => offerAdapter(offer))
);

export const commentAdapter = (comment) => {
  const {
    user: {
      avatar_url: avatarUrl,
      is_pro: isPro,
      ...restUser
    },
    ...restComment
  } = comment;

  return {
    user: {
      isPro,
      avatarUrl,
      ...restUser
    },
    ...restComment
  };
};

export const adaptComments = (comments) => (
  comments.map((comment) => commentAdapter(comment))
);
