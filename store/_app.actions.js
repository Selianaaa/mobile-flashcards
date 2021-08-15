import { appConstants } from '../constants';

/**
 * Setting qesk chaning condition
 * @param {boolean} inRequest - request condition
 */
const setDeskChanging = (inRequest) => ({
  type: appConstants.SET_DESK_CHANGING,
  payload: inRequest,
});

/**
 * Setting desks
 * @param {Object} desks
 */
const setDesks = (desks) => {
  return (dispatch) => {
    dispatch({
      type: appConstants.CHANGE_DESKS,
      payload: desks,
    });
  };
};

export default {
  setDeskChanging,
  setDesks,
};

// function generateUID() {
//   return (
//     Math.random().toString(36).substring(2, 15) +
//     Math.random().toString(36).substring(2, 15)
//   );
// }
