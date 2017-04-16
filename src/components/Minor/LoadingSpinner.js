import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingSpinner = ({ message }) => (
  <div>
    {message || ''}
    <CircularProgress size={80} thickness={5} />
  </div>
);

LoadingSpinner.propTypes = {
  message: PropTypes.string
};

export default LoadingSpinner;
