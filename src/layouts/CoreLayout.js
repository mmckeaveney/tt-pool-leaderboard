import React from 'react';
import 'styles/core.scss';
import AppBar from 'material-ui/AppBar';
import ActionTabs from 'containers/ActionTabs';

export const CoreLayout = ({ children }) => (
  <div className="mainContainer">
    <AppBar
      title="Rapid7 Belfast Office Sports"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <ActionTabs />
    {children}
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default CoreLayout;
