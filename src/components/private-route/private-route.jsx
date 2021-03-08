import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Paths, AuthorizationStatus} from '../../constants';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PrivateRoute = ({exact, path, render, authorizationStatus}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={Paths.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps, ``)(PrivateRoute);
