import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import teamsData from '../data/teams.json';
import playersData from '../data/players.json';


const initialState = {
  teams: teamsData,
  players: playersData,
};

// define reducers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducers: any = {
  
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);


// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default store;