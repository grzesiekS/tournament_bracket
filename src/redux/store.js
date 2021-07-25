import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import teamsData from '../data/teams.json';
import playersData from '../data/players.json';

import globalReducer from './globalRedux';
import teamsReducer from './teamsRedux';

const initialState = {
  teams: teamsData,
  players: playersData,
};

// define reducers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducers = {
  teams: teamsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default store;