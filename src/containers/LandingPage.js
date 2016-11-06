/* @flow */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import R from 'ramda';

// Components
import LandingPage from 'components/LandingPage';

// Actions
import {getCurrentChampions} from './PlayerDucks';

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentChampions
}, dispatch);

type LandingPageContainerProps = {
    getCurrentChampions: Function
};

class LandingPageContainer extends Component {

    props : LandingPageContainerProps;

    componentDidMount() {
        this.props.getCurrentChampions();
    }

    render() {
        const landingPageProps = R.pick(['champions'], this.props);

        return (<LandingPage {...landingPageProps}/>);
    }
}

export default connect(null, mapDispatchToProps)(LandingPageContainer);
