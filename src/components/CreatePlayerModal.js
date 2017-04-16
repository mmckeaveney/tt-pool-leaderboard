import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { eitherDefinedOrEmpty } from 'utils/monads';

class CreatePlayerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: '',
      name: ''
    };
  }

  validateAndSubmit = (name) => eitherDefinedOrEmpty(
    'Name cannot be empty',
    name
  ).cata({
    Left: (err) => this.setState({ errorMessage: err }),
    Right: (name) => {
      this.props.submitFunc({ name });
      this.props.closeModal('createPlayer');
      this.props.displayNotification(`Player ${name} has been created`);
    }
  });

  render() {
    const {
      title,
      closeModal
    } = this.props;

    return (
      <Dialog
        title={title}
        actions={[
          (
            <FlatButton
              key={1}
              label="Cancel"
              primary={true}
              onTouchTap={() => closeModal('createPlayer')}
            />
          ),
          (
            <FlatButton
              key={2}
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onTouchTap={() => this.validateAndSubmit(this.state.name)}
            />
          )
        ]}
        modal={true}
        open={this.props.open || false}
        onRequestClose={() => closeModal('createPlayer')}
      >
        <TextField
          errorText={this.state.errorMessage}
          onChange={(evt) =>
            this.setState({ name: evt.target.value, errorText: '' })}
          hintText="Enter your full name"
        />
      </Dialog>
    );
  }
}

CreatePlayerModal.propTypes = {
  title: PropTypes.string.isRequired,
  submitFunc: PropTypes.func.isRequired,
  open: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  displayNotification: PropTypes.func.isRequired
};

export default CreatePlayerModal;
