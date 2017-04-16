import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const OnFire = ({ streaks = [] }) => {
  return (
    <Card>
      <CardHeader
        title={'ON FIRE 🔥'}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>PLAYER</TableHeaderColumn>
              <TableHeaderColumn>SPORT</TableHeaderColumn>
              <TableHeaderColumn>RANKING</TableHeaderColumn>
              <TableHeaderColumn>WIN STREAK</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {streaks.length > 0
              ? streaks.map((streak, idx) => (
                  <TableRow key={idx}>
                    <TableRowColumn>{streak.playerName}</TableRowColumn>
                    <TableRowColumn>{streak.sport}</TableRowColumn>
                    <TableRowColumn>{streak.currentRanking}</TableRowColumn>
                    <TableRowColumn>{streak.highestWinStreak}</TableRowColumn>
                  </TableRow>
                ))
              : <div> Nobody is on a hot streak at the moment. </div>}
          </TableBody>
        </Table>
      </CardText>
    </Card>
  );
};

OnFire.propTypes = {
  streaks: PropTypes.array
};

export default OnFire;
