import React, { useState } from 'react';
import './App.css';
import DisplayData from './DisplayData';
import { champions } from './ChampionData';

function App() {
  const [selectedChampion1, setSelectedChampion1] = useState('Aatrox');
  const [selectedChampion2, setSelectedChampion2] = useState('Aatrox');

  const handleChange1 = (event) => {
    setSelectedChampion1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedChampion2(event.target.value);
  };

  return (
    <div className="App">
      <div className="card">
        <h2 className='champ-select-text' >Select a Champion</h2>
        <select value={selectedChampion1} onChange={handleChange1}>
          {Object.keys(champions.data).map((championKey) => (
            <option key={championKey} value={championKey}>
              {champions.data[championKey].name}
            </option>
          ))}
        </select>
        <DisplayData champion={champions.data[selectedChampion1]} />
      </div>
      <div className="card">
        <h2 className='champ-select-text'>Select a Champion</h2>
        <select value={selectedChampion2} onChange={handleChange2}>
          {Object.keys(champions.data).map((championKey) => (
            <option key={championKey} value={championKey}>
              {champions.data[championKey].name}
            </option>
          ))}
        </select>
        <DisplayData champion={champions.data[selectedChampion2]} />
      </div>
    </div>
  );
}

export default App;
