import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import SearchIcon from 'material-ui/svg-icons/action/search';
import LoadingSpinner from './Minor/LoadingSpinner';
import { mapIndexed } from 'utils/utilityFunctions';
import { identity, curry } from 'ramda';
import { eitherDefinedOrEmpty } from 'utils/monads';

const playersExist = eitherDefinedOrEmpty(
  <TableRow> No Players Exist </TableRow>
);

const renderPlayerRow = curry((drilldown, { id, name }, rank) => {
  return (
    <TableRow key={id}>
      <TableRowColumn>{`${rank === 0 ? '👑' : rank + 1}`}</TableRowColumn>
      <TableRowColumn>{name}</TableRowColumn>
      <TableRowColumn>
        <SearchIcon onClick={() => drilldown(id)} />
      </TableRowColumn>
    </TableRow>
  );
});

renderPlayerRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const LeaderboardTable = (
  { title, players, isLoading, drilldown: playerDrilldown }
) => {
  if (isLoading) {
    return <LoadingSpinner message="Players are loading" />;
  }

  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        {title}
        <TableRow>
          <TableHeaderColumn>Rank</TableHeaderColumn>
          <TableHeaderColumn>Player Name</TableHeaderColumn>
          <TableHeaderColumn>Details</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {playersExist(players).cata({
          Left: identity,
          Right: mapIndexed(renderPlayerRow(playerDrilldown))
        })}
      </TableBody>
    </Table>
  );
};

LeaderboardTable.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array,
  isLoading: PropTypes.bool,
  drilldown: PropTypes.func.isRequired
};

export default LeaderboardTable;
