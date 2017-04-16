import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { getInitials } from 'utils/utilityFunctions';

const Match = ({ winner, loser, winnerScore, loserScore, challenge }) => (
  <ListItem
    key={winner.id}
    leftAvatar={<Avatar>{getInitials(winner.name)}</Avatar>}
    rightAvatar={<Avatar>{getInitials(loser.name)} </Avatar>}
    primaryText={
      `${winner.name} defeated ${loser.name} in a ${challenge ? 'Challenge' : 'Friendly'} match`
    }
    secondaryText={`${winnerScore} - ${loserScore} to ${winner.name}`}
  />
);

Match.propTypes = {
  winnerScore: PropTypes.number,
  loserScore: PropTypes.number,
  winner: PropTypes.object,
  loser: PropTypes.object,
  challenge: PropTypes.bool
};

export default Match;
