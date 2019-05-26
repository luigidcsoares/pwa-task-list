import React from 'react';
import { Navigator } from 'react-onsenui';

import Home from './Home';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return ( 
      <Navigator
        initialRoute={{ component: Home }}
        renderPage={this.renderPage}
      />
    );
  }
}

export default App;
