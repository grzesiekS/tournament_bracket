import playersData from '../data/players.json';

const newPlayersData = playersData.map(player => ({
  ...player,
  timeStamp: new Date(),
}));

const initialState: PlayerState = {
  players: newPlayersData,
};

/* SELECTORS */
export const getPlayers = (state: state): IPlayer[] => state.players.players;
export const getNewPlayer = (state: state): IPlayer[] => state.players.players
  .sort((a: IPlayer, b: IPlayer): number => b.timeStamp.getTime() - a.timeStamp.getTime());

/* ACTIONS */

// action name creator
const reducerName = 'players';
const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types
const ADD_PLAYER = createActionName('ADD_PLAYER');
const REMOVE_PLAYER = createActionName('REMOVE_PLAYER');

// Action creators
const createNewPlayerTemplate = (
  _id: string,
  name: string,
  draw: number,
  lose: number,
  win: number,
):IPlayer => ({
  _id: _id,
  name: name,
  draw: draw,
  lose: lose,
  win: win,
  timeStamp: new Date(),
});

export const addNewPlayer = (playerName: string): PlayerAction => (
  {player: [createNewPlayerTemplate('1234', playerName, 0, 0, 0)], type: ADD_PLAYER});

export const removePlayer = (playerId: string): PlayerAction => (
  {player: [createNewPlayerTemplate(playerId, '', 0, 0, 0)], type: REMOVE_PLAYER});
// reducer
export default function reducer(state: PlayerState = initialState, action:PlayerAction): PlayerState {
  switch(action.type) {
    case ADD_PLAYER: {
      return {
        players: [
          ...state.players,
          ...action.player,
        ],
      };
    }
    case REMOVE_PLAYER: {
      return {
        players: [
          ...state.players.filter(player => player._id !== action.player[0]._id),
        ],
      };
    }
    default:
      return state;
  }
}