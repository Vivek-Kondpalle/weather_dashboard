import { ADD_PRESSURE, ADD_TEMPERATURE } from '../constants/types';

export const valueReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRESSURE:
      return {
        ...state,
        pressure: action.payload,
      };

    case ADD_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
      };

    default:
      return state;
  }
};
