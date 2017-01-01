// React.
import React from 'react';
import ReactDOM from 'react-dom';

// Redux.
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Container containing website UI elements.
import WebsiteUI from 'containers/WebsiteUI'

// Redux reducers and store..
import reducers from 'reducers/index.js'
let store = createStore(reducers);

ReactDOM.render(<Provider store={store}><WebsiteUI/></Provider>, document.getElementById('react-target'));
