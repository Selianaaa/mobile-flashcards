import { appConstants } from '../constants';

/**
 * Setting deck chaning condition
 * @param {boolean} inRequest - request condition
 */
const setDeckChanging = (inRequest) => ({
  type: appConstants.SET_DECK_CHANGING,
  payload: inRequest,
});

/**
 * Setting decks
 * @param {Object} decks
 */
const setDecks = (decks) => {
  return (dispatch) => {
    dispatch({
      type: appConstants.CHANGE_DECKS,
      payload: decks,
    });
  };
};

/**
 * Add new deck
 * @param {string} title
 * @param {Object} navigation
 */
const addNewDeck = (title, navigation) => {
  return (dispatch, getState) => {
    const { decks } = getState().app;
    const newDeck = {
      title,
      questions: [],
    };

    const deckId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    dispatch(
      setDecks({
        ...decks,
        [deckId]: newDeck,
      })
    );

    navigation.navigate('Deck', { deckId: deckId });
  };
};

/**
 * Remove deck
 * @param {string} title
 * @param {Object} navigation
 */
const removeDeck = (id) => {
  return (dispatch, getState) => {
    const { decks } = getState().app;

    const newDecks = Object.assign({}, decks);
    delete newDecks[id];

    dispatch(setDecks(newDecks));
  };
};

/**
 * Add card to the deck
 * @param {string} deckId
 * @param {Object} card
 * @param {Object} navigation
 */
const addNewCard = (deckId, card, navigation) => {
  return (dispatch, getState) => {
    const { decks } = getState().app;

    dispatch(
      setDecks({
        ...decks,
        [deckId]: {
          ...decks[deckId],
          questions: decks[deckId].questions.concat(card),
        },
      })
    );

    navigation.navigate('Deck', { deckId: deckId });
  };
};

export default {
  setDeckChanging,
  setDecks,
  addNewDeck,
  removeDeck,
  addNewCard,
};
