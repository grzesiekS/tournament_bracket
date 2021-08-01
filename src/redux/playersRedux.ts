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
export const getNewPlayer = (state: state): IPlayer => state.players.players
  .sort((a: IPlayer, b: IPlayer): number => a.timeStamp.getTime() - b.timeStamp.getTime())[0];

/* ACTIONS */

// action name creator
const reducerName = 'players';
const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types
const ADD_PLAYER = createActionName('ADD_PLAYER');

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

export const addNewPlayer = (playerId: string, playerName: string): PlayerAction => (
  {player: createNewPlayerTemplate(playerId, playerName, 0, 0, 0), type: ADD_PLAYER});

// reducer
export default function reducer(state: PlayerState = initialState, action:PlayerAction): PlayerState {
  switch(action.type) {
    case ADD_PLAYER: {
      return {
        players: [
          ...state.players,
          action.player,
        ],
      };
    }
    default:
      return state;
  }
}