import React from 'react';
import './header.css';
import { AppContext } from 'contexts';
import { Icon } from 'semantic-ui-react';

function parseErrors(error) {
  switch (error.message) {
    case 'Failed to fetch':
      return 'We are having trouble getting to the servers.';
    default:
      return 'Something is wrong. Try again later, if the problem persists contact support.';
  }
}

const Notification = () => (
  <AppContext.Consumer>
    {({ state: { error }, actions }) =>
      error ? (
        <div className="notification-header">
          <span className="content-divider">
            <div className="notification-icon-container">
              <Icon name="warning sign" />
            </div>
            {parseErrors(error)}
          </span>
          <span className="content-divider">
            <button onClick={actions.setError.bind(null, null)}>
              <Icon name="close" size="small" />
            </button>
          </span>
        </div>
      ) : null
    }
  </AppContext.Consumer>
);

export default Notification;
