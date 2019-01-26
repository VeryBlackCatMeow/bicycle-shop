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
const extraProps = '/database/bikesdatabase.json';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App extraProps={extraProps} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);


