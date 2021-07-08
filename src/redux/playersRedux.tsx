import { ActionInt, PlayerInt } from '../common/interface';

/* SELECTORS */

/* ACTIONS */

// action name creator
// const reducerName = 'players';
// const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types

// reducer
export default function reducer(state = [], action:ActionInt = { type: '' }):PlayerInt[] {
  switch(action.type) {
    default:
      return state;
  }
}