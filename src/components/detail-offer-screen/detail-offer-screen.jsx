import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../header/header';
import {fetchCommentList, fetchNearbyList, fetchDetailOffer} from '../../store/api-actions';
import DetailOffer from '../detail-offer/detail-offer';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const DetailOfferScreen = ({match}) => {
  const offerDetails = useSelector((state) => state.DATA.offerDetails);
  const offerId = Number(match.params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentList(offerId));
    dispatch(fetchNearbyList(offerId));
    dispatch(fetchDetailOffer(offerId));
  }, [offerId]);

  if (!offerId) {
    return (
      <NotFoundScreen/>
    );
  }

  if (!offerDetails) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <>
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <DetailOffer offerDetails={offerDetails}/>
        </main>
      </div>
    </>
  );
};

DetailOfferScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
};

export {DetailOfferScreen};
export default withRouter(DetailOfferScreen);
