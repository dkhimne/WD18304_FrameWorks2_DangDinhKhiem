import React from 'react';
import './Spinner.css';

const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
      <div>{message}</div>
    </div>
  );
};

export default Spinner;
