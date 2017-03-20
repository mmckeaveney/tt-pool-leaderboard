import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

class AppNotifications extends React.Component {
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={3000}
          onRequestClose={this.props.onClose}
        />
      </div>
    );
  }
}

AppNotifications.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default AppNotifications;
