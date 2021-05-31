import './App.css';
import PSlider from './components/PSlider.js';
import TSlider from './components/TSlider.js';
import LChart from './components/LChart.js';
import BChart from './components/BChart.js';

export default function App() {
  return (
    <div className='container flex-col'>
      <div className='flex-row'>
        <TSlider />
        <BChart />
      </div>
      <div className='flex-row'>
        <PSlider />
        {/* <LChart /> */}
      </div>
    </div>
  );
}
