export const Paths = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  OFFER: `/offer/:id`,
  NOT_FOUND: `/not-found`
};

export const Sorting = {
  LOW_PRICE: `Price: low to high`,
  HIGH_PRICE: `Price: high to low`,
  TOP_RATE: `Top rated first`
};

export const RatingStar = [
  {
    stars: 5,
    title: `perfect`
  },
  {
    stars: 4,
    title: `good`
  },
  {
    stars: 3,
    title: `not bad`
  },
  {
    stars: 2,
    title: `badly`
  },
  {
    stars: 1,
    title: `terribly`
  }
];

export const AuthorizationStatus = {
  AUTH: true,
  NO_AUTH: false,
};

export const Inquiry = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  NEARBY: `/nearby`,
  COMMENTS: `/comments`
};

export const Rating = {
  MAX: 5,
  PERCENT: 100
};

export const Condition = {
  MIN_RATING: 1,
  MIN_DESCRIPTION: 50,
  MAX_DESCRIPTION: 300
};

export const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const DEFAULT_CITY = `Paris`;
export const DEFAULT_LOCATION = {
  latitude: 48.856220,
  longitude: 2.352478,
  zoom: 10
};

export const MAX_GALLERY_IMG = 6;
export const CURRENT_SORTING = `Popular`;
export const SORTING_LIST = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];
