
import React from 'react';

interface PercentageCircleProps {
  percentage: number;
  color: string;
}

const PercentageCircle: React.FC<PercentageCircleProps> = ({ percentage, color }) => {
  return (
    <div className="circular-progress" style={{ background: `conic-gradient(${color} ${percentage}%, #f3f3f3 0%)` }}>
      <span className="percentage-value">{percentage}</span>
    </div>
  );
};

export default PercentageCircle;
