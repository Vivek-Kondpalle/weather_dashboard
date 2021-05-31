import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { valueTemperature } from '../actions/valueAction';

const PSlider = () => {
  const [temp, setTemp] = useState(10);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTemp(e.target.value);
  };

  useEffect(() => {
    dispatch(valueTemperature(temp));
  }, [dispatch, temp]);

  return (
    <div className='slidercontainer'>
      <input
        type='range'
        min='10'
        max='35'
        value={temp}
        className='slider'
        id='myRange'
        onChange={handleChange}
      />
      <p>
        Temperature(C): <span id='demo'>{temp}</span>
      </p>
    </div>
  );
};

export default PSlider;
