import React from 'react';
import { useSelector } from 'react-redux';

const StatsCollector = () => {
  const renderData = useSelector(state => state.renderData);

  const calculateStats = () => {
    const stats = {
      InlineStyleComponent: { totalDuration: 0, count: 0 },
      StyledComponent: { totalDuration: 0, count: 0 }
    };
    
    renderData.forEach(data => {
      if (data.id === 'InlineStyleComponent' || data.id === 'StyledComponent') {
        stats[data.id].totalDuration += data.actualDuration;
        stats[data.id].count += 1;
      } else {
        console.log("Wrong data", data);
      }
    });

    return stats;
  };

  const stats = calculateStats();

  const getAverage = (id) => {
    const data = stats[id];
    const count = data?.count || 0;
    const totalDuration = data?.totalDuration || 0;

    return count > 0 ? (totalDuration / count).toFixed(2) : "0.00";
  };

  return (
    <div>
      <p>Inline Style Avg. Render Time: {getAverage('InlineStyleComponent')} ms</p>
      <p>Styled Component Avg. Render Time: {getAverage('StyledComponent')} ms</p>
    </div>
  );
};

export default StatsCollector;
