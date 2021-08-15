import { initialDesks, appConstants } from '../constants';

const initialState = {
  desks: initialDesks,
  desk_changing: false,
};

export default function (state = initialState, { type, payload = null }) {
  switch (type) {
    case appConstants.SET_DESK_CHANGING:
      return {
        ...state,
        desk_changing: payload,
      };

    case appConstants.CHANGE_DESKS:
      return {
        ...state,
        desks: payload,
        desk_changing: false,
      };

    // case questionsConstants.ADD_DESK:
    //   return {
    //     ...state,
    //     desks: payload,
    //     desk_changing: false
    //   };

    // case questionsConstants.REMOVE_DESK:
    //   return {
    //     ...state,
    //     desks: payload,
    //     desk_changing: false
    //   };
    // case questionsConstants.ADD_CARD:
    //   return {
    //     ...state,
    //     desks: payload,
    //     desk_changing: false
    //   };

    // case questionsConstants.REMOVE_CARD:
    //   return {
    //     ...state,
    //     desks: payload,
    //     desk_changing: false
    //   };

    default:
      return state;
  }
}
