import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { AppContext } from 'contexts';
import './animate.css';

const style = {
  height: '100vh',
  width: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: '1000',
  background: 'rgba(15, 15, 15, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Loading = () => (
  <ReactCSSTransitionGroup
    transitionName="fadeIn"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
  >
    <AppContext.Consumer>
      {({ state: { loading } }) =>
        loading ? (
          <div style={style}>
            <Loader active={loading} />
          </div>
        ) : null
      }
    </AppContext.Consumer>
  </ReactCSSTransitionGroup>
);

Loading.contextTypes = {
  state: PropTypes.object
};;

export default Loading;
