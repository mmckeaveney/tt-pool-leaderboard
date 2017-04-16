import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import { keys, propOr, pick, indexOf, any, values, compose, all } from 'ramda';
import { eitherDefinedOrEmpty, eitherConditional } from 'utils/monads';
import { isNotEmptyOrNil } from 'utils/utilityFunctions';

// Constants
const playerDatasourceConfig = {
  text: 'name',
  value: 'id'
};

class RecordMatchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportErrorText: '',
      winnerErrorText: '',
      loserErrorText: '',
      winnerScoreErrorText: '',
      loserScoreErrorText: '',
      sport: '',
      value: 1,
      challenge: true
    };
  }

  validateScore = (score, winnerOrLoser) => eitherConditional(
    (scoreValue) => !isNaN(scoreValue),
    'You must enter a number',
    parseInt(score, 10)
  )
    .map((numberScore) => this.setState({
      [`${winnerOrLoser}Score`]: numberScore,
      [`${winnerOrLoser}ScoreErrorText`]: ''
    }))
    .orElse((err) => this.setState({ [`${winnerOrLoser}ScoreErrorText`]: err }));

  validatePlayerRanks = (match) => {
    const players = this.props.playersBySport[this.state.sport];
    const winnerRank = indexOf(match.winner, players);
    const loserRank = indexOf(match.loser, players);

    const isChampionshipMatch = all((rank) => rank === 0 || rank === 1, [
      winnerRank,
      loserRank
    ]);

    if (isChampionshipMatch) {
      this.setState({ isChampionshipMatch: true });
    }

    return Math.abs(winnerRank - loserRank > 1);
  };

  validateAndSubmit = () => {
    const matchFields = [
      'sport',
      'winner',
      'winnerScore',
      'loser',
      'loserScore',
      'challenge'
    ];

    eitherConditional(
      compose(any(isNotEmptyOrNil), values),
      'You must fill out all fields',
      pick(matchFields, this.state)
    )
      .map((match) => {
        if (this.validatePlayerRanks(match)) {
          this.setState({
            winnerErrorText: 'You can only record a match for players within one place of each other.',
            loserErrorText: 'You can only record a match for players within one place of each other.'
          });
          return;
        }

        if (match.winner === match.loser) {
          this.setState({
            winnerErrorText: "You can't play yourself!",
            loserErrorText: "You can't play yourself!"
          });
          return;
        }

        const {
          submitFunc,
          getPlayersByRankingForSport,
          closeModal,
          displayNotification
        } = this.props;

        submitFunc(match);
        closeModal('recordMatch');
        setTimeout(() => getPlayersByRankingForSport(this.state.sport), 1000);
        displayNotification('Match has been recorded');
        this.setState({
          challenge: false
        });
      })
      .orElse((err) => this.setState({
        sportErrorText: err,
        winnerErrorText: err,
        loserErrorText: err,
        winnerScoreErrorText: err,
        loserScoreErrorText: err
      }));
  };

  selectSport = (evt, idx, value) =>
    eitherDefinedOrEmpty('Sport cannot be empty', evt.target.innerText)
      .map(() => this.setState({ value, sport: evt.target.innerText }))
      .orElse((err) => this.setState({ sportErrorText: err }));

  render() {
    const {
      title,
      closeModal,
      playersBySport
    } = this.props;

    // TODO: replace line breaks with flex positioning
    return (
      <Dialog
        title={title}
        actions={[
          (
            <FlatButton
              key={1}
              label="Cancel"
              primary={true}
              onTouchTap={() => closeModal('recordMatch')}
            />
          ),
          (
            <FlatButton
              key={2}
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onTouchTap={() => this.validateAndSubmit()}
            />
          )
        ]}
        modal={true}
        open={this.props.open || false}
        onRequestClose={() => closeModal('recordMatch')}
      >
        <DropDownMenu
          value={this.state.value}
          onChange={this.selectSport}
          errorText={this.state.sportErrorText}
        >
          {keys(playersBySport).map((sport, idx) => (
            <MenuItem key={idx} value={sport} primaryText={sport} />
          ))}
        </DropDownMenu>
        <br />
        <AutoComplete
          onNewRequest={(winner) => this.setState({ winner, winnerErrorText: '' })}
          floatingLabelText="Choose Winning Player"
          openOnFocus={true}
          disabled={this.state.sport === ''}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSourceConfig={playerDatasourceConfig}
          dataSource={propOr([], this.state.sport, playersBySport)}
          errorText={this.state.winnerErrorText}
        />
        <br />
        <TextField
          floatingLabelText="Enter the winners score"
          errorText={this.state.winnerScoreErrorText}
          onChange={(evt) => this.validateScore(evt.target.value, 'winner')}
        />
        <br />
        <AutoComplete
          onNewRequest={(loser) => this.setState({ loser, loserErrorText: '' })}
          floatingLabelText="Choose Losing Player"
          openOnFocus={true}
          disabled={this.state.sport === ''}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSourceConfig={playerDatasourceConfig}
          dataSource={propOr([], this.state.sport, playersBySport)}
          errorText={this.state.loserErrorText}
        />
        <br />
        <TextField
          floatingLabelText="Enter the losers score"
          errorText={this.state.loserScoreErrorText}
          onChange={(evt) => this.validateScore(evt.target.value, 'loser')}
        />
        <br />
        <Toggle
          label="Challenge Match?"
          toggled={this.state.challenge}
          onToggle={(event, checked) => this.setState({ challenge: checked })}
        />
      </Dialog>
    );
  }
}

RecordMatchModal.propTypes = {
  title: PropTypes.string.isRequired,
  submitFunc: PropTypes.func.isRequired,
  open: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  getPlayersByRankingForSport: PropTypes.func.isRequired,
  playersBySport: PropTypes.object,
  displayNotification: PropTypes.func.isRequired
};

export default RecordMatchModal;
