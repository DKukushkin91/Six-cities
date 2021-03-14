import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {changeOption} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';

const OfferSorting = ({options}) => {
  const {currentOption} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  const [isOpenedSorting, setIsOpenedSorting] = useState(false);

  const changeSorting = (evt, option) => {
    evt.preventDefault();
    if (option !== currentOption) {
      dispatch(changeOption(option));
    }
  };
  const active = (option) => option === currentOption ? `places__option--active` : ``;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onMouseEnter={() => setIsOpenedSorting(!isOpenedSorting)} className="places__sorting-type" tabIndex={0}>
        {currentOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul onMouseLeave={()=>setIsOpenedSorting(!isOpenedSorting)} className={`places__options places__options--custom ${isOpenedSorting ? `places__options--opened` : ``}`}>
        {options.map((option) => (
          <li onClick={(evt)=> changeSorting(evt, option)} className={`places__option ${active(option)}`} key={option} tabIndex={0}>
            {option}
          </li>)
        )}
      </ul>
    </form>
  );
};

OfferSorting.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default OfferSorting;
