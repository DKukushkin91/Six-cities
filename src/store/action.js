export const ActionType = {
  CHANGE_CURRENT_CITY: `city/currentCity`,
  CHANGE_OPTION: `option/changeOption`,
  HOVER_OFFER: `offer/hoverOffer`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_OFFERS: `data/loadOffers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: city
  }),
  changeOption: (option) => ({
    type: ActionType.CHANGE_OPTION,
    payload: option
  }),
  hoverOffer: (id) => ({
    type: ActionType.HOVER_OFFER,
    payload: id
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};

