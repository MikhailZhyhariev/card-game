import { CARDS_STATE } from '../constants/Table.js';

export function setCardsState(cardsState) {
  return {
    type: CARDS_STATE,
    payload: cardsState
  }
}