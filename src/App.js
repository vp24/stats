import React, { useState } from 'react';
import './App.css';
import DisplayData from './DisplayData';
// eslint-disable-next-line no-unused-vars
import { champions } from './ChampionData';
// eslint-disable-next-line no-unused-vars
import { items } from './ItemData';

function App() {
  const [selectedChampion, setSelectedChampion] = useState('Aatrox');

  const handleChange = (event) => {
    setSelectedChampion(event.target.value);
  };

  return (
    <div className="App">
      <div className="card">
        <h2>Select a Champion</h2>
        <select value={selectedChampion} onChange={handleChange}>
          {Object.keys(champions.data).map((championKey) => (
            <option key={championKey} value={championKey}>
              {champions.data[championKey].name}
            </option>
          ))}
        </select>
        <DisplayData champion={champions.data[selectedChampion]} />
      </div>
    </div>
  );
}

export default App;
