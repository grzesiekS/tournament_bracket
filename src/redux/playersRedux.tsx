interface ActionInt {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any,
}

interface PlayerInt {
  _id: string,
  name: string,
  win: number,
  draw: number,
  lose: number,
}

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