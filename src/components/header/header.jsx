import React from 'react';
import {Link} from 'react-router-dom';
import {Paths} from '../../constants';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions';

const styles = {
  border: `none`,
  backgroundColor: `transparent`,
  outline: `none`,
  cursor: `pointer`
};

const Header = ({authorizationStatus, onLogout, userValue}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={Paths.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={`${authorizationStatus && Paths.FAVORITES || Paths.LOGIN}`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus &&
                    <span className="header__user-name user__name">{userValue}</span>
                    ||
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
              {authorizationStatus ?
                <li className="header__nav-item user">
                  <button className="header__nav-link header__nav-link--profile" style={styles} onClick={() => onLogout()}>
                    <span className="header__login">Logout</span>
                  </button>
                </li>
                : ``}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  userValue: PropTypes.string.isRequired
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout(data) {
    dispatch(logout(data));
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
