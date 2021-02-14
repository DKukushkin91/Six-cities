import {getRandomItem, getBoolian, getRandomNumbers} from '../util';
import {AVATAR_URL} from '../constants';

const Price = {
  MIN: 1,
  MAX: 500
};

const Raiting = {
  MIN: 1,
  MAX: 5
};

const Images = {
  MIN: 1,
  MAX: 3,
  MINI: 3,
  MAXI: 4
};

export default [
  {
    bedrooms: `${getRandomItem([1, 2, 3, 4])}`,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: getRandomItem([`Amsterdam`, `Cologne`, `Hamburg`, `Dusseldorf`, `Brussels`, `Paris`])
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: 1,
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: `${getRandomItem([1, 2, 3, 4])}`,
    previewImage: `${getRandomNumbers(Images.MIN, Images.MAX)}`,
    price: getRandomNumbers(Price.MIN, Price.MAX),
    rating: getRandomNumbers(Raiting.MIN, Raiting.MAX),
    title: `${getRandomItem([`Beautiful & luxurious studio at great location`, `Nice, cozy, warm big bed apartment`])}`,
    type: `Apartment`
  },

  {
    bedrooms: `${getRandomItem([1, 2, 3, 4])}`,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: getRandomItem([`Amsterdam`, `Cologne`, `Hamburg`, `Dusseldorf`, `Brussels`, `Paris`])
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: 2,
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: `${getRandomItem([1, 2, 3, 4])}`,
    previewImage: `${getRandomNumbers(Images.MIN, Images.MAX)}`,
    price: getRandomNumbers(Price.MIN, Price.MAX),
    rating: getRandomNumbers(Raiting.MIN, Raiting.MAX),
    title: `${getRandomItem([`Beautiful & luxurious studio at great location`, `Nice, cozy, warm big bed apartment`])}`,
    type: `Apartment`
  },

  {
    bedrooms: `${getRandomItem([1, 2, 3, 4])}`,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: getRandomItem([`Amsterdam`, `Cologne`, `Hamburg`, `Dusseldorf`, `Brussels`, `Paris`])
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: 3,
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: `${getRandomItem([1, 2, 3, 4])}`,
    previewImage: `${getRandomNumbers(Images.MIN, Images.MAX)}`,
    price: getRandomNumbers(Price.MIN, Price.MAX),
    rating: getRandomNumbers(Raiting.MIN, Raiting.MAX),
    title: `${getRandomItem([`Beautiful & luxurious studio at great location`, `Nice, cozy, warm big bed apartment`])}`,
    type: `Apartment`
  },

  {
    bedrooms: `${getRandomItem([1, 2, 3, 4])}`,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: getRandomItem([`Amsterdam`, `Cologne`, `Hamburg`, `Dusseldorf`, `Brussels`, `Paris`])
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: 4,
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: `${getRandomItem([1, 2, 3, 4])}`,
    previewImage: `${getRandomNumbers(Images.MIN, Images.MAX)}`,
    price: getRandomNumbers(Price.MIN, Price.MAX),
    rating: getRandomNumbers(Raiting.MIN, Raiting.MAX),
    title: `${getRandomItem([`Beautiful & luxurious studio at great location`, `Nice, cozy, warm big bed apartment`])}`,
    type: `Apartment`
  },
];
