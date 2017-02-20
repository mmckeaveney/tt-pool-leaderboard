import React, { PropTypes } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import LoadingSpinner from "./Minor/LoadingSpinner";
import { isNotEmptyOrNil } from "utils/utilityFunctions";
import Either from "data.either";
import { map, identity } from "ramda";
import { eitherDefinedOrEmpty } from "utils/monads";

const playersExist = eitherDefinedOrEmpty(
  <TableRow> No Players Exist </TableRow>
);

const LeaderboardTable = ({ title, players, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner message="Players are loading" />;
  }

  console.log(playersExist(players));

  return (
    <Table>
      <TableHeader adjustForCheckbox={false}>
        {title}
        <TableRow>
          <TableHeaderColumn>Rank</TableHeaderColumn>
          <TableHeaderColumn>Firstname</TableHeaderColumn>
          <TableHeaderColumn>Lastname</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {playersExist(players)
          .map((data) => console.log(data))          
          .orElse(identity)}
      </TableBody>
    </Table>
  );
};

LeaderboardTable.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array,
  isLoading: PropTypes.bool
};

export default LeaderboardTable;

// (player, idx) => (
//             <TableRow key={player.id}>
//               <TableRowColumn>{idx + 1}</TableRowColumn>
//               <TableRowColumn>{player.firstName}</TableRowColumn>
//               <TableRowColumn> {player.lastName} </TableRowColumn>
//             </TableRow>
//           ))
