import React from 'react';

const matches = [{name: 'dave'}, {name: 'Wang'}];

type MatchboardProps = {
  sport: String
};

const MatchBoard = (props: MatchboardProps, { sport }) => {
  return (
    <div>
    <h1>{sport} MatchBoard</h1>
    { matches.map((match, index) => <li key={index}> {match.name} </li>) }
    </div>
  );
};

export default MatchBoard;
