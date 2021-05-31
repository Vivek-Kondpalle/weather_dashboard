import { ADD_AMOUNT } from '../constants/types';

export const chartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      return {
        ...state,
        amount: action.payload.amount,
        day: action.payload.day,
      };

    default:
      return state;
  }
};
