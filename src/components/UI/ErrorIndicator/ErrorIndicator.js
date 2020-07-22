import React from 'react';
import './ErrorIndicator.scss';
const ErrorIndicator = () => {
  return (
    <div className="error">
      <h3>BOOM!</h3>
      <div>Something go wrong !</div>
    </div>
  );
};

export default ErrorIndicator;
