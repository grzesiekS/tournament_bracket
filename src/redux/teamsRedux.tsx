interface ActionInt {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any,
}

interface TeamInt {
  _id: string,
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}

/* SELECTORS */
export const getTeams = (state: { teams: TeamInt[]; }):TeamInt[] => state.teams;

/* ACTIONS */

// action name creator
// const reducerName = 'teams';
// const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types

// reducer
export default function reducer(state = [], action:ActionInt = { type: '' }):TeamInt[] {
  switch(action.type) {
    default:
      return state;
  }
}