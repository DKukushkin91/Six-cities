import {AVATAR_URL} from '../constants';
import uniqueid from 'uniqid';
import dayjs from 'dayjs';

export default [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `${dayjs().format(`MMMM YYYY`)}`,
    id: uniqueid(),
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: uniqueid(),
      isPro: false,
      name: `Max`
    }
  }
];

