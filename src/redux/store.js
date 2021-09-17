import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import teamsReducer from './teamsRedux';
import playersReducer from './playersRedux';

// define reducers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducers = {
  teams: teamsReducer,
  players: playersReducer,
};

// combine reducers
const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default store;