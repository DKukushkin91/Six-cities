import PropTypes from 'prop-types';
import {FavoriteButtonSize} from '../../constants';

export const favoriteNameProp = PropTypes.oneOf(Object.values(FavoriteButtonSize)).isRequired;
