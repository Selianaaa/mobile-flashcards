import { initialDesks, appConstants } from '../constants';

const initialState = {
  desks: initialDesks,
  desk_changing: false,
};

export default function (state = initialState, { type, payload = null }) {
  switch (type) {
    case appConstants.CHANGE_DESKS:
      return {
        ...state,
        desks: payload,
        desk_changing: false,
      };

    case appConstants.SET_DESK_CHANGING:
      return {
        ...state,
        desk_changing: payload,
      };

    default:
      return state;
  }
}
