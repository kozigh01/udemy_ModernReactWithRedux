import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: { text: 'Lets hit the beach', iconName: 'sun' },
  winter: { text: 'Burr, it is chilly', iconName: 'snowflake' }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter' ;
  } 
  
  return latitude > 0 ? 'winder' : 'summer';
};

 const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={iconName + ' icon massive icon-left'}></i>
      <h1 className="">{text}</h1>
      <i className={iconName + ' icon massive icon-right'}></i>
    </div>
  );
}

export default SeasonDisplay;