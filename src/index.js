
import React from 'react';
import { render } from 'react-dom'
import FormApp from './components/FormApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import style from './bootstrap/bootstrap.min.css';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <FormApp />
    </Provider>,
    document.getElementById('root')
);
