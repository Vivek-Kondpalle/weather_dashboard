import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { valuePressure } from '../actions/valueAction';

const PSlider = () => {
  const [pressure, setPressure] = useState(970);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPressure(e.target.value);
  };

  useEffect(() => {
    dispatch(valuePressure(pressure));
  }, [dispatch, pressure]);

  return (
    <div className='slidercontainer'>
      <input
        type='range'
        min='970'
        max='1030'
        value={pressure}
        className='slider'
        id='myRange'
        onChange={handleChange}
      />
      <p>
        Pressure(hPa): <span id='demo'>{pressure}</span>
      </p>
    </div>
  );
};

export default PSlider;
