import React from 'react';
import 'styles/core.scss';
import AppBar from 'material-ui/AppBar';

export const CoreLayout = ({ children }) => (
    <div className="mainContainer">
        <AppBar title="Rapid7 Belfast Office Sports" iconClassNameRight="muidocs-icon-navigation-expand-more"/> 
        { children }
    </div>
);

CoreLayout.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default CoreLayout;
