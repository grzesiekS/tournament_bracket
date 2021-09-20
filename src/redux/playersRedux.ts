import Axios from 'axios';
import { Dispatch } from 'react';
import { addNewTeamPlayerDb } from './teamsRedux';

/* SELECTORS */
export const getPlayers = (state: state): IPlayer[] => state.players.players || [];
export const getNewPlayer = (state: state): IPlayer[] => state.players.players
  .sort((a: IPlayer, b: IPlayer): number => b.timeStamp.getTime() - a.timeStamp.getTime());

/* ACTIONS */

// action name creator
const reducerName = 'players';
const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types
const FETCH_SUCESS = createActionName('FETCH_SUCESS');
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

export const fetchSucess = (playersData: IPlayer[]): PlayerAction => ({
  player: playersData, type: FETCH_SUCESS,
});

export const addNewPlayer = (player: IPlayer): PlayerAction => (
  {player: [player], type: ADD_PLAYER});

export const removePlayer = (playerId: string): PlayerAction => (
  {player: [createNewPlayerTemplate(playerId, '', 0, 0, 0)], type: REMOVE_PLAYER});

/* Thunk Actions */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchAllPlayers = () => (dispatch: Dispatch<PlayerAction>) => {
  Axios
    .get('http://localhost:8000/api/players')
    .then(res => {
      dispatch(fetchSucess(res.data));
    })
    .catch(err => {
      console.warn(err);
    });
};

export const addNewPlayerDb = (
  playerName: string,
  teamId: string,) => 
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async (dispatch: Dispatch<unknown>) => {
    try {
      const res = await Axios.post('http://localhost:8000/api/player', {name: playerName});
      dispatch(addNewTeamPlayerDb(teamId, res.data.newPlayer._id));
      dispatch(addNewPlayer(res.data.newPlayer));
    } catch(err) {
      console.warn(err);
    }
  };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const removePlayerDb = (id: string) => async (dispatch: Dispatch<PlayerAction>) => {
  try {
    await Axios.delete(`http://localhost:8000/api/player/${id}`);
    dispatch(removePlayer(id));
  } catch(err) {
    console.warn(err);
  }
};

// reducer
export default function reducer(state: PlayerState, action:PlayerAction): PlayerState {
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
    case FETCH_SUCESS: {
      return {
        players: action.player,
      };
    }
    default:
      return state || [];
  }
}