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

/**
 * Add new desk
 * @param {string} title
 * @param {Object} navigation
 */
const addNewDesk = (title, navigation) => {
  return (dispatch, getState) => {
    const { desks } = getState().app;
    const newDesk = {
      title,
      questions: [],
    };

    const deskId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    dispatch(
      setDesks({
        ...desks,
        [deskId]: newDesk,
      })
    );

    navigation.navigate('Deck', { deskId: deskId });
  };
};

/**
 * Remove desk
 * @param {string} title
 * @param {Object} navigation
 */
const removeDesk = (id) => {
  return (dispatch, getState) => {
    const { desks } = getState().app;

    const newDesks = Object.assign({}, desks);
    delete newDesks[id];

    dispatch(setDesks(newDesks));
  };
};

/**
 * Add card to the desk
 * @param {string} deskId
 * @param {Object} card
 * @param {Object} navigation
 */
const addNewCard = (deskId, card, navigation) => {
  return (dispatch, getState) => {
    const { desks } = getState().app;

    dispatch(
      setDesks({
        ...desks,
        [deskId]: {
          ...desks[deskId],
          questions: desks[deskId].questions.concat(card),
        },
      })
    );

    navigation.navigate('Deck', { deskId: deskId });
  };
};

export default {
  setDeskChanging,
  setDesks,
  addNewDesk,
  removeDesk,
  addNewCard,
};
