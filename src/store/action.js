export const ActionType = {
  CHANGE_CURRENT_CITY: `city/currentCity`,
  CHANGE_OPTION: `option/changeOption`,
  HOVER_OFFER: `offer/hoverOffer`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_OFFERS: `data/loadOffers`,
  USER_VALUE: `user/userValue`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  LOAD_NEARBY: `data/loadNearby`,
  LOAD_COMMENTS: `data/loadComments`,
  ADDED_COMMENT: `offerDetails/addedComment`,
  OPEN_PROPERTY: `offerDetails/openProperty`,
  LOAD_DETAILS: `data/loadDetails`,
  CHANGE_STATUS: `offer/changeStatus`,
  LOAD_FAVORITES: `data/loadFavorites`
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
  loadDetailOffer: (offer) => ({
    type: ActionType.LOAD_DETAILS,
    payload: offer
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  changeValue: (value) => ({
    type: ActionType.USER_VALUE,
    payload: value,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadNearby: (nearby) => ({
    type: ActionType.LOAD_NEARBY,
    payload: nearby
  }),
  addedComment: (comment) => ({
    type: ActionType.ADDED_COMMENT,
    payload: comment
  }),
  changeStatus: (favorite) => ({
    type: ActionType.CHANGE_STATUS,
    payload: favorite
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  })
};

