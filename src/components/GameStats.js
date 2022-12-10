import React from "react";

import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li>Level</li>
      <li className="value">{level}</li>
      <li>2level</li>
      <li className="value">{linesToLevel}</li>
      <li>Point</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
