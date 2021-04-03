import React from 'react';
import {css} from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`;

const LoadingScreen = () => {

  return (
    <div className="sweet-loading">
      <BarLoader color={`#4481c3`} loading={true} css={override}/>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingScreen;

