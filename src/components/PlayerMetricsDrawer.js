import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Match from 'components/Match';
import { propOr, equals } from 'ramda';
import Maybe from 'data.maybe';

const PlayerBreakdownTable = ({ metrics }) => (
  <Table>
    <TableBody displayRowCheckbox={false}>
      {Maybe.fromNullable(metrics).cata({
        Just: (
          {
            currentRanking,
            highestRanking,
            currentWinStreak,
            highestWinStreak,
            biggestVictory,
            biggestDefeat
          }
        ) => (
          <div>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Metric</TableHeaderColumn>
                <TableHeaderColumn>Value</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableRow>
              <TableRowColumn>Current Ranking</TableRowColumn>
              <TableRowColumn>{currentRanking}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Highest Ranking</TableRowColumn>
              <TableRowColumn>{highestRanking}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Current Win Streak</TableRowColumn>
              <TableRowColumn>{currentWinStreak}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Highest Win Streak</TableRowColumn>
              <TableRowColumn>{highestWinStreak}</TableRowColumn>
            </TableRow>
            <h4> BIGGEST DEFEAT{' '} </h4>
            {Maybe.fromNullable(biggestDefeat).cata({
              Just: () => <Match {...biggestDefeat} />,
              Nothing: () => <h5> This player has not lost any matches </h5>
            })}
            <br />
            <h4> BIGGEST VICTORY{' '} </h4>
            {Maybe.fromNullable(biggestVictory).cata({
              Just: () => <Match {...biggestVictory} />,
              Nothing: () => <h5> 'This player has not won any matches </h5>
            })}
          </div>
        ),
        Nothing: () => 'No Metrics Available For Player.'
      })}
    </TableBody>
  </Table>
);

PlayerBreakdownTable.propTypes = {
  metrics: PropTypes.object,
  sport: PropTypes.string,
  currentRanking: PropTypes.number,
  highestRanking: PropTypes.number,
  currentWinStreak: PropTypes.number,
  highestWinStreak: PropTypes.number,
  biggestVictory: PropTypes.object,
  biggestDefeat: PropTypes.object
};

const getDirection = equals('right');

const PlayerMetricsDrawer = ({ open, onClose, direction = 'left', metrics }) => {
  return (
    <div>
      <Drawer
        width={800}
        openSecondary={getDirection(direction)}
        open={open}
        docked={false}
        onRequestChange={onClose}
      >
        <AppBar
          title={
            `Player Metrics: ${propOr('', 'playerName', metrics)} - ${propOr('', 'sport', metrics)}`
          }
        />
        <PlayerBreakdownTable metrics={metrics} />
      </Drawer>
    </div>
  );
};

PlayerMetricsDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  metrics: PropTypes.object,
  open: PropTypes.bool,
  direction: PropTypes.string
};

export default PlayerMetricsDrawer;
