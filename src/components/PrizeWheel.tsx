import React from 'react';

interface PrizeWheelProps {
  spinning: boolean;
}

const prizes = ['Bone', 'Toy', 'Treat', 'Walk', 'Belly Rub', 'New Collar'];
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];

const PrizeWheel: React.FC<PrizeWheelProps> = ({ spinning }) => {
  const wheelSize = 300;
  const centerX = wheelSize / 2;
  const centerY = wheelSize / 2;
  const radius = wheelSize / 2 - 10;

  return (
    <div className="relative">
      <div className={`${spinning ? 'animate-spin' : ''}`}>
        <svg width={wheelSize} height={wheelSize} viewBox={`0 0 ${wheelSize} ${wheelSize}`}>
          {prizes.map((prize, index) => {
            const angle = (index * 360) / prizes.length;
            const endAngle = ((index + 1) * 360) / prizes.length;
            const startAngle = angle * (Math.PI / 180);
            const endAngleRad = endAngle * (Math.PI / 180);

            const x1 = centerX + radius * Math.cos(startAngle);
            const y1 = centerY + radius * Math.sin(startAngle);
            const x2 = centerX + radius * Math.cos(endAngleRad);
            const y2 = centerY + radius * Math.sin(endAngleRad);

            const largeArcFlag = endAngle - angle <= 180 ? "0" : "1";

            const textAngle = (angle + endAngle) / 2;
            const textRadius = radius * 0.75; // Move text closer to the edge
            const textX = centerX + textRadius * Math.cos(textAngle * (Math.PI / 180));
            const textY = centerY + textRadius * Math.sin(textAngle * (Math.PI / 180));

            return (
              <g key={prize}>
                <path
                  d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={colors[index]}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontWeight="bold"
                  fontSize="12"
                  transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                >
                  {prize}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="absolute top-0 left-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[30px] border-l-transparent border-r-transparent border-t-red-500 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default PrizeWheel;