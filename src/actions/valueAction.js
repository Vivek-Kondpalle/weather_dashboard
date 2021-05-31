import { ADD_PRESSURE, ADD_TEMPERATURE } from '../constants/types';

export const valuePressure = (pressure) => (dispatch) => {
  dispatch({
    type: ADD_PRESSURE,
    payload: pressure,
  });
};

export const valueTemperature = (temp) => (dispatch) => {
  dispatch({
    type: ADD_TEMPERATURE,
    payload: temp,
  });
};
