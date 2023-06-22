import React from 'react';

function DisplayData({ champion }) {
  return (
    <div className="champion-card">
      <h3>{champion.name}</h3>
      <div className="stat-container">
        <p>
          <span className="stat-label">HP:</span> {champion.stats.hp}
        </p>
        <p>
          <span className="stat-label">HP per level:</span>{' '}
          {champion.stats.hpperlevel}
        </p>
        <p>
          <span className="stat-label">MP:</span> {champion.stats.mp}
        </p>
        <p>
          <span className="stat-label">MP per level:</span>{' '}
          {champion.stats.mpperlevel}
        </p>
        <p>
          <span className="stat-label">Movespeed:</span>{' '}
          {champion.stats.movespeed}
        </p>
        <p>
          <span className="stat-label">Armor:</span> {champion.stats.armor}
        </p>
        <p>
          <span className="stat-label">Armor per level:</span>{' '}
          {champion.stats.armorperlevel}
        </p>
        <p>
          <span className="stat-label">Spellblock:</span>{' '}
          {champion.stats.spellblock}
        </p>
        <p>
          <span className="stat-label">Spellblock per level:</span>{' '}
          {champion.stats.spellblockperlevel}
        </p>
        <p>
          <span className="stat-label">Attack Range:</span>{' '}
          {champion.stats.attackrange}
        </p>
        <p>
          <span className="stat-label">HP Regen:</span>{' '}
          {champion.stats.hpregen}
        </p>
        <p>
          <span className="stat-label">HP Regen per level:</span>{' '}
          {champion.stats.hpregenperlevel}
        </p>
        <p>
          <span className="stat-label">MP Regen:</span>{' '}
          {champion.stats.mpregen}
        </p>
        <p>
          <span className="stat-label">MP Regen per level:</span>{' '}
          {champion.stats.mpregenperlevel}
        </p>
        <p>
          <span className="stat-label">Crit:</span> {champion.stats.crit}
        </p>
        <p>
          <span className="stat-label">Crit per level:</span>{' '}
          {champion.stats.critperlevel}
        </p>
        <p>
          <span className="stat-label">Attack Damage:</span>{' '}
          {champion.stats.attackdamage}
        </p>
        <p>
          <span className="stat-label">Attack Damage per level:</span>{' '}
          {champion.stats.attackdamageperlevel}
        </p>
        <p>
          <span className="stat-label">Attack Speed:</span>{' '}
          {champion.stats.attackspeed}
        </p>
      </div>
    </div>
  );
}

export default DisplayData;
