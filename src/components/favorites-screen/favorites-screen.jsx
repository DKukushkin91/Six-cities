import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import FavoritesList from '../favorites-list/favorites-list';
import {Paths} from '../../constants';
import Header from '../header/header';
import LoadingScreen from "../loading-screen/loading-screen";
import PropTypes from "prop-types";
import OfferProp from "../offer/offer.prop";
import {favoriteList} from "../../store/api-actions";
import {connect} from "react-redux";
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const FavoritesScreen = ({favorites, onLoadFavorites, isFavoritesLoad}) => {

  useEffect(() => {
    if (!isFavoritesLoad) {
      onLoadFavorites({favorites});
    }
  }, [isFavoritesLoad]);

  if (!isFavoritesLoad) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <div className="page">
        {<Header/>}
        <main className={`page__main page__main--favorites${favorites.length > 0 ? `` : `-empty`}`}>
          <div className="page__favorites-container container">
            {favorites.length > 0 ?
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                {<FavoritesList favorites={favorites}/>}
              </section>
              :
              <FavoritesEmpty/>
            }
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={Paths.MAIN}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </Link>
        </footer>
      </div>
    </>
  );
};

FavoritesScreen.propTypes = {
  favorites: PropTypes.arrayOf(OfferProp.isRequired).isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
  isFavoritesLoad: PropTypes.bool.isRequired
};

const mapStateToProps = ({favorites, isFavoritesLoad}) => ({
  favorites,
  isFavoritesLoad
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites(data) {
    dispatch(favoriteList(data));
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
