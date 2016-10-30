import React from 'react';
import 'styles/core.scss';

export const CoreLayout = ({children}) => (
        <div className="container-fluid">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
        </nav>

            {children}
        </div>
);

CoreLayout.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default CoreLayout;
