import { ADD_AMOUNT } from '../constants/types';

export const chartAmount = (amount, day) => async (dispatch) => {
  dispatch({
    type: ADD_AMOUNT,
    payload: {
      amount: amount,
      day: day,
    },
  });
};
