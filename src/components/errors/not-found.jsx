import React from 'react';
import {Link} from 'react-router-dom';
import {Paths} from '../../constants';

const NotFoundScreen = () => {
  const errorStyle = {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    flexDirection: `column`,
    fontSize: 36,
  };
  const linkStyle = {
    color: `#4481c3`
  };
  return (
    <>
      <div style={errorStyle} className="error">
        <h1 className="error__title">404 Not Found</h1>
        <Link style={linkStyle} className="error__link" to={Paths.MAIN}>Go Home</Link>
      </div>
    </>
  );
};

export default NotFoundScreen;
