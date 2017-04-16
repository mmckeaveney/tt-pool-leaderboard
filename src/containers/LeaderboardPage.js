import React, { Component, PropTypes } from 'react';
import LeaderboardTable from 'components/LeaderboardTable';
import MatchHistoryPanel from 'components/MatchHistoryPanel';
import PlayerMetricsDrawer from 'components/PlayerMetricsDrawer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import playerActionCreators from 'actions/playerActions';
import matchActionCreators from 'actions/matchActions';
import modalActionCreators from 'actions/modalActions';
import AppNotifications from 'components/Minor/AppNotifications';

class LeaderboardPage extends Component {
  componentDidMount() {
    const {
      params,
      getPlayersByRankingForSport,
      getAllMatchesForSport
    } = this.props;

    getPlayersByRankingForSport(params.sport);
    getAllMatchesForSport(params.sport);
  }

  render() {
    const {
      params,
      playersByRanking,
      playersLoading,
      playerDrilldown,
      closePlayerMetricsDrawer,
      matchesForSport,
      matchesLoading,
      drilldownModal: drilldownModalProps,
      notificationMessage,
      notificationOpen,
      closeNotification
    } = this.props;

    return (
      <div className="row">
        <PlayerMetricsDrawer
          onClose={closePlayerMetricsDrawer}
          {...drilldownModalProps}
        />
        Rapid7 Belfast {params.sport} Rankings
        <div className="col-xs-6 col-sm-6">
          <LeaderboardTable
            title={params.sport}
            players={playersByRanking}
            isLoading={playersLoading}
            drilldown={playerDrilldown(params.sport)}
          />
        </div>
        <div className="col-xs-6 col-sm-6">
          <MatchHistoryPanel
            title={params.sport}
            matches={matchesForSport}
            isLoading={matchesLoading}
          />
        </div>
        <AppNotifications
          message={notificationMessage}
          open={notificationOpen}
          onClose={closeNotification}
        />
      </div>
    );
  }
}

LeaderboardPage.propTypes = {
  params: PropTypes.object.isRequired,
  getPlayersByRankingForSport: PropTypes.func.isRequired,
  getAllMatchesForSport: PropTypes.func.isRequired,
  playersByRanking: PropTypes.array,
  playersLoading: PropTypes.bool.isRequired,
  playerDrilldown: PropTypes.func.isRequired,
  closePlayerMetricsDrawer: PropTypes.func.isRequired,
  matchesLoading: PropTypes.bool.isRequired,
  matchesForSport: PropTypes.array,
  drilldownModal: PropTypes.object,
  notificationMessage: PropTypes.string,
  notificationOpen: PropTypes.bool,
  closeNotification: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  playersByRanking: state.playerReducer.playersBySport[ownProps.params.sport],
  playersLoading: state.playerReducer.playersLoading,
  drilldownModal: state.playerReducer.drilldownModal,
  matchesForSport: state.matchReducer[ownProps.params.sport],
  matchesLoading: state.matchReducer.matchesLoading,
  notificationMessage: state.modalReducer.notificationMessage,
  notificationOpen: state.modalReducer.notificationOpen
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    ...playerActionCreators,
    ...matchActionCreators,
    ...modalActionCreators
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardPage);
