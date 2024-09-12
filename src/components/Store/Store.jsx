import React from 'react';
import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';
import structure from './structure.js';

let _store;
const _create = (reducersArray = [], middleware) => {
	const appliedMiddleware = applyMiddleware(thunk, typeof middleware === 'function' ?
		middleware :
		(store) => (next) => (action) => next(action));
	return createStore(_combineReducers(reducersArray), undefined, appliedMiddleware);
};
const _combineReducers = (reducersArray = []) => {
	let i = 0,
		reducers = {};

	while (i < reducersArray.length) {
		reducers[reducersArray[i].name] = reducersArray[i];
		i++;
	}
	return combineReducers(reducers);
};

// Assign the arrow function to a variable before exporting it
const getStore = () => _store;
export default getStore;

export const Provider = ({ children }) => {
	return <StoreProvider store={(_store = _create(structure))}>
		{children}
	</StoreProvider>;
};
