import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from 'routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppContainer extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const {history, store} = this.props;

        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <Router history={history}>
                        {routes}
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default AppContainer;
