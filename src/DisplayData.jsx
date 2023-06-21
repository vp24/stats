import React from 'react';

function DisplayData({ champion }) {
  return (
    <div className="champion-card">
      <h3>{champion.name}</h3>
      <p>HP: {champion.stats.hp}</p>
      <p>HP per level: {champion.stats.hpperlevel}</p>
      <p>MP: {champion.stats.mp}</p>
      <p>MP per level: {champion.stats.mpperlevel}</p>
      <p>Movespeed: {champion.stats.movespeed}</p>
      <p>Armor: {champion.stats.armor}</p>
      <p>Armor per level: {champion.stats.armorperlevel}</p>
      <p>Spellblock: {champion.stats.spellblock}</p>
      <p>Spellblock per level: {champion.stats.spellblockperlevel}</p>
      <p>Attack Range: {champion.stats.attackrange}</p>
      <p>HP Regen: {champion.stats.hpregen}</p>
      <p>HP Regen per level: {champion.stats.hpregenperlevel}</p>
      <p>MP Regen: {champion.stats.mpregen}</p>
      <p>MP Regen per level: {champion.stats.mpregenperlevel}</p>
      <p>Crit: {champion.stats.crit}</p>
      <p>Crit per level: {champion.stats.critperlevel}</p>
      <p>Attack Damage: {champion.stats.attackdamage}</p>
      <p>Attack Damage per level: {champion.stats.attackdamageperlevel}</p>
      <p>Attack Speed: {champion.stats.attackspeed}</p>
    </div>
  );
}

export default DisplayData;
