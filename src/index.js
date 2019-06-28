import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

const store = createStore(Reducers);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);




