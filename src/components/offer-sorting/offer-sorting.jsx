import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const OfferSorting = ({options, currentOption, onChangeOption}) => {
  const [isOpenedSorting, setIsOpenedSorting] = useState(false);
  const changeSorting = (evt, option) => {
    evt.preventDefault();
    if (option !== currentOption) {
      onChangeOption(option);
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
  onChangeOption: PropTypes.func.isRequired,
  currentOption: PropTypes.string.isRequired
};

const mapStateToProps = ({currentOption}) => ({currentOption});

const mapDispatchToProps = (dispatch) => ({
  onChangeOption(option) {
    dispatch(ActionCreator.changeOption(option));
  }
});

export {OfferSorting};
export default connect(mapStateToProps, mapDispatchToProps)(OfferSorting);
