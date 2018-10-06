import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import {budda} from './BuddaWorld/Budda';
import BuddaList from './BuddaWorld/BuddaList'
import App from './App' ; 
import {createLogger } from 'redux-logger'
import {searchBuddha} from './reducer'
const logger = createLogger();
const store = createStore(searchBuddha , applyMiddleware(logger))
ReactDOM.render(	
				<Provider store={store}>
					<App store1={store} />
				</Provider>
				,
	document.getElementById('root'));
registerServiceWorker();
