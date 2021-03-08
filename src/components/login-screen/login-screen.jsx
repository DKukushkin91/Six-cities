import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import {Paths} from '../../constants';
import Header from '../header/header';
import {ActionCreator} from '../../store/action';

const LoginScreen = ({onSend, currentCity, onChangeValue, userValue}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const renderHeader = (<Header userValue={userValue}/>);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSend({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    onChangeValue(emailRef.current.value);
  };

  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page page--gray page--login">
        {renderHeader}
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="" method="post" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={emailRef} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={Paths.MAIN}>
                  <span>{currentCity}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

LoginScreen.propTypes = {
  onSend: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  userValue: PropTypes.string.isRequired
};

const mapStateToProps = ({currentCity, userValue}) => ({
  currentCity,
  userValue
});

const mapDispatchToProps = (dispatch) => ({
  onSend(data) {
    dispatch(login(data));
  },
  onChangeValue(value) {
    dispatch(ActionCreator.changeValue(value));
  }
});

export {LoginScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
