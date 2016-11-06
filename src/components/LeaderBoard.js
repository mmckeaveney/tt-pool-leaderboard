import React from 'react';
// import type Player from 'flow/types';

const players = [
    {
        name: 'dave'
    }, {
        name: 'Wang'
    }
];

type LeaderboardProps = {
    sport: String
    // players: Array<Player>
};

const LeaderBoard = (props : LeaderboardProps) => {
    const { sport } = props;

    return (
        <div>
            <h1>{sport}
                Leaderboard
            </h1>
            {players.map((player, index) => <li key={index}>
                {player.name}
            </li>)}
        </div>
    );
};

export default LeaderBoard;
