export const ActionType = {
  CHANGE_CURRENT_CITY: `city/currentCity`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: city
  })
};

