import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const LChart = () => {
  const [chartData, setChartData] = useState({});
  const chartReducer = useSelector((state) => state.chartReducer);
  const day = chartReducer.day;
  // console.log(day);
  const valueReducer = useSelector((state) => state.valueReducer);
  // console.log(valueReducer);
  const pressure = valueReducer.pressure;
  // console.log(pressure);

  const temperature = valueReducer.temperature;
  var amount = chartReducer[0];

  const chanceOfRain = (pressure, temperature, amount) => {
    const score = amount.map(
      (item) =>
        Math.log(item + 1) *
        Math.log(pressure - 929) *
        Math.log(temperature - 9)
    );
    const mean = score.map((item) => Math.min(Math.max(item, 0), 100));

    const upper_bound = mean.map((item) => Math.min(1.5 * item, 100));
    const lower_bound = mean.map((item) => Math.max(0.5 * item, 0));

    setChartData({
      labels: amount,
      datasets: [
        {
          label: 'upper_bound',
          data: upper_bound,
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
          borderWidth: 4,
        },
        {
          label: 'mean',
          data: mean,
          backgroundColor: 'red',
          borderWidth: 4,
        },
        {
          label: 'lower_bound',
          data: lower_bound,
          backgroundColor: 'black',
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chanceOfRain(pressure, temperature, amount);
  }, [pressure, temperature, amount]);

  return (
    <>
      <div className='w-chart'>
        <Line
          data={chartData}
          options={{
            responsive: true,
          }}
        />
      </div>
    </>
  );
};

export default LChart;
