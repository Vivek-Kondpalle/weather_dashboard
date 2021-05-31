import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { chartAmount } from '../actions/chartAction';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const dispatch = useDispatch();

  const chart = async () => {
    const { data } = await axios.get(
      'http://private-4945e-weather34.apiary-proxy.com/weather34/rain'
    );

    const day = data[0].days.map((item) => item.day);
    const amount = data[0].days.map((item) => item.amount);

    dispatch(chartAmount(amount, day));
    setChartData({
      labels: day,
      datasets: [
        {
          label: 'Amount of Rainfall',
          data: amount,
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <div className='w-chart'>
        <Bar
          data={chartData}
          options={{
            responsive: true,
          }}
        />
      </div>
    </>
  );
};

export default Chart;
