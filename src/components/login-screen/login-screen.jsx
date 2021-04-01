import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-actions';
import {Path} from '../../constants';
import Header from '../header/header';
import {changeValue} from '../../store/action';

const LoginScreen = () => {
  const currentCity = useSelector((state) => state.DATA.currentCity);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
    dispatch(changeValue(emailRef.current.value));
  };

  return (
    <>
      <div className="page page--gray page--login">
        <Header/>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form"
                action=""
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={emailRef}
                    data-testid="email"
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password" name="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                    data-testid="password"
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                  data-testid="submit-button"
                >
                    Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={Path.MAIN}>
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

export default LoginScreen;
