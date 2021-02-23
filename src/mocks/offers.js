import {getRandomItem, getBoolian, getRandomNumbers} from '../util';
import {AVATAR_URL} from '../constants';
import uniqid from 'uniqid';

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
        latitude: 48.856220,
        longitude: 2.352478,
        zoom: 10
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 48.856720,
      longitude: 2.354015,
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
        latitude: 48.856220,
        longitude: 2.352478,
        zoom: 10
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 48.857487,
      longitude: 2.352350,
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
        latitude: 48.856220,
        longitude: 2.352478,
        zoom: 10
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 48.857355,
      longitude: 2.351070,
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
        latitude: 48.856220,
        longitude: 2.352478,
        zoom: 10
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 48.856109,
      longitude: 2.351087,
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
        latitude: 50.937440,
        longitude: 6.960227,
        zoom: 10
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.937130,
      longitude: 6.959844,
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
        latitude: 50.937440,
        longitude: 6.960227,
        zoom: 10
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.937536,
      longitude: 6.960329,
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
        latitude: 50.937440,
        longitude: 6.960227,
        zoom: 10
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.937673,
      longitude: 6.958677,
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
        latitude: 50.937440,
        longitude: 6.960227,
        zoom: 10
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.937693,
      longitude: 6.960705,
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
        latitude: 53.550178,
        longitude: 9.992169,
        zoom: 10
      },
      name: `Hamburg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 53.549085,
      longitude: 9.991634,
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
        latitude: 53.550178,
        longitude: 9.992169,
        zoom: 10
      },
      name: `Hamburg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 53.548382,
      longitude: 9.990083,
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
        latitude: 53.550178,
        longitude: 9.992169,
        zoom: 10
      },
      name: `Hamburg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 53.549849,
      longitude: 9.990702,
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
        latitude: 53.550178,
        longitude: 9.992169,
        zoom: 10
      },
      name: `Hamburg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 53.549565,
      longitude: 9.992728,
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
        latitude: 51.227591,
        longitude: 6.772256,
        zoom: 10
      },
      name: `Dusseldorf`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 51.228854,
      longitude: 6.772621,
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
        latitude: 51.227591,
        longitude: 6.772256,
        zoom: 10
      },
      name: `Dusseldorf`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 51.227967,
      longitude: 6.773479,
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
        latitude: 51.227591,
        longitude: 6.772256,
        zoom: 10
      },
      name: `Dusseldorf`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 51.228653,
      longitude: 6.771784,
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
        latitude: 51.227591,
        longitude: 6.772256,
        zoom: 10
      },
      name: `Dusseldorf`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 51.227806,
      longitude: 6.771870,
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
        latitude: 50.849673,
        longitude: 4.352750,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.849003,
      longitude: 4.352514,
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
        latitude: 50.849673,
        longitude: 4.352750,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.849134,
      longitude: 4.353803,
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
        latitude: 50.849673,
        longitude: 4.352750,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.849771,
      longitude: 4.350988,
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
        latitude: 50.849673,
        longitude: 4.352750,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 50.850711,
      longitude: 4.350900,
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
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
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
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatarUrl: ${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqid(),
      isPro: true,
      name: `${getRandomItem([`Angelina`, `Max`, `Sam`, `Daniel`])}`
    },
    id: uniqid(),
    images: [`img/apartment-0${getRandomNumbers(Images.MIN, Images.MAX)}.jpg`, `img/apartment-small-0${getRandomNumbers(Images.MINI, Images.MAXI)}.jpg`],
    isFavorite: getBoolian(true),
    isPremium: getBoolian(true),
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
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
