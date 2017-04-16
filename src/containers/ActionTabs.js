import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import playerActionCreators from 'actions/playerActions';
import matchActionCreators from 'actions/matchActions';
import modalActionCreators from 'actions/modalActions';
import { Tabs, Tab } from 'material-ui/Tabs';
import CreatePlayerModal from 'components/CreatePlayerModal';
import RecordMatchModal from 'components/RecordMatchModal';
import { hashHistory } from 'react-router';

class ActionTabs extends Component {
  render() {
    const {
      createPlayerModalOpen,
      recordMatchModalOpen,
      createNewPlayer,
      recordMatch,
      closeModal,
      openModal,
      playersBySport,
      getPlayersByRankingForSport,
      displayNotification
    } = this.props;

    return (
      <Tabs>
        <Tab label="Home" onActive={() => hashHistory.push('/')} />
        <Tab label="New Player?" onActive={() => openModal('createPlayer')}>
          <CreatePlayerModal
            open={createPlayerModalOpen}
            displayNotification={displayNotification}
            title={'Create a player'}
            submitFunc={createNewPlayer}
            closeModal={() => closeModal('createPlayer')}
          />
        </Tab>
        <Tab label="Record Match" onActive={() => openModal('recordMatch')}>
          <RecordMatchModal
            playersBySport={playersBySport}
            open={recordMatchModalOpen}
            title={'Record a Match'}
            submitFunc={recordMatch}
            closeModal={() => closeModal('recordMatch')}
            getPlayersByRankingForSport={getPlayersByRankingForSport}
            displayNotification={displayNotification}
          />
        </Tab>
      </Tabs>
    );
  }
}

ActionTabs.propTypes = {
  createNewPlayer: PropTypes.func.isRequired,
  recordMatch: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  createPlayerModalOpen: PropTypes.bool,
  recordMatchModalOpen: PropTypes.bool,
  playersBySport: PropTypes.object,
  getPlayersByRankingForSport: PropTypes.func.isRequired,
  displayNotification: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  createPlayerModalOpen: state.modalReducer.createPlayer,
  recordMatchModalOpen: state.modalReducer.recordMatch,
  playersBySport: state.playerReducer.playersBySport
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    ...playerActionCreators,
    ...matchActionCreators,
    ...modalActionCreators
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ActionTabs);
// TASKS
// TODO: General Styling across the app
// Complete code cleanup - Client and server

// DEFECTS
// Don't allow duplicate players to be added.

// NICE TO HAVES
// Head to Head metrics
// Add visuals for challenges - Show who has challenged who - Leave this for slack
