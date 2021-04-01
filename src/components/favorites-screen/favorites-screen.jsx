import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import FavoritesList from '../favorites-list/favorites-list';
import {Path} from '../../constants';
import Header from '../header/header';
import LoadingScreen from "../loading-screen/loading-screen";
import {favoriteList} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const FavoritesScreen = () => {
  const isFavoritesLoaded = useSelector((state) => state.DATA.isFavoritesLoaded);
  const favorites = useSelector((state) => state.DATA.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(favoriteList());
    }
  }, [isFavoritesLoaded, favorites]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <div className="page">
        <Header/>
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
          <Link className="footer__logo-link" to={Path.MAIN}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </Link>
        </footer>
      </div>
    </>
  );
};

export default FavoritesScreen;
