import { initialDecks, appConstants } from '../constants';

const initialState = {
  decks: initialDecks,
  deck_changing: false,
};

export default function (state = initialState, { type, payload = null }) {
  switch (type) {
    case appConstants.CHANGE_DECKS:
      return {
        ...state,
        decks: payload,
        deck_changing: false,
      };

    case appConstants.SET_DECK_CHANGING:
      return {
        ...state,
        deck_changing: payload,
      };

    default:
      return state;
  }
}
