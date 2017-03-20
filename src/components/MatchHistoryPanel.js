import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Match from './Match';
import LoadingSpinner from './Minor/LoadingSpinner';
import { map, identity } from 'ramda';
import Subheader from 'material-ui/Subheader';
import { eitherDefinedOrEmpty } from 'utils/monads';

const matchesExist = eitherDefinedOrEmpty(
  <ListItem> No Matches Have Been Played for this sport. </ListItem>
);

const MatchHistoryPanel = ({ matches, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner message="Matches are loading" />;
  }

  return (
    <List>
      <Subheader>Recent matches</Subheader>
      {matchesExist(matches).cata({
        Left: identity,
        Right: map((match) => <Match {...match} />)
      })}
    </List>
  );
};

MatchHistoryPanel.propTypes = {
  title: PropTypes.string,
  matches: PropTypes.array,
  isLoading: PropTypes.bool
};

export default MatchHistoryPanel;
