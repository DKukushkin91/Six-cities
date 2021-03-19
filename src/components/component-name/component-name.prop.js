import PropTypes from 'prop-types';
import {ComponentName} from '../../constants';

export const componentNameProp = PropTypes.oneOf(Object.values(ComponentName));
