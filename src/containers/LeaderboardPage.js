/* @flow */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import R from 'ramda';

// Components
import Leaderboard from 'components/Leaderboard';
import Matchboard from 'components/Matchboard';

// Actions
import {getMostRecentMatches} from 'modules/MatchDucks';
import {getPlayerListBySport} from 'modules/PlayerDucks';

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMostRecentMatches,
    getPlayerListBySport
}, dispatch);

type LeaderboardPageProps = {
    getPlayerListBySport: Function,
    getMostRecentMatches: Function,
    location: Object
};

class LeaderboardPage extends Component {

    props : LeaderboardPageProps;

    getChildContext = () => ({ location: this.props.location });

    componentDidMount() {
        // this.props.getPlayerListBySport();
        // this.props.getMostRecentMatches();
    }

    render() {
        // const landingPageProps = R.pick(['champions', 'toggleRecordMatchDialog'], this.props);

        return (
            <div>
                <Leaderboard sport={this.props.location.pathname}/>
                <Matchboard sport={this.props.location.pathname}/>
            </div>
        );
    }
}

LeaderboardPage.childContextTypes = {
    location: React.PropTypes.object
};

export default connect(null, mapDispatchToProps)(LeaderboardPage);
