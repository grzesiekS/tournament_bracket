import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import teamsReducer from './teamsRedux';
import playersReducer from './playersRedux';

const initialState = {
  
};

// define reducers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducers = {
  teams: teamsReducer,
  players: playersReducer,
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