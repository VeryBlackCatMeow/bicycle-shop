import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import Reducers from './reducers';
//import Gallery from './containers/Gallery.js';

const store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


