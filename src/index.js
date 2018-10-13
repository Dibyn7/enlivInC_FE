import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/Unauthenticated/App';
import setGlobalStyles from 'styles/globals';
import { Provider } from 'react-redux';
import configureStore from 'store';
import * as serviceWorker from './serviceWorker';
const renderApp = () => {
    const initialState = {};
    const store = configureStore(initialState);
    store.dispatch({ type: '@enlivEcommerce/@@INITIAL' });
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));};
setGlobalStyles();
renderApp();
serviceWorker.unregister();
