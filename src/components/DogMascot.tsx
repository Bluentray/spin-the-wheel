import React from 'react';
import { Dog } from 'lucide-react';

interface DogMascotProps {
  spinning: boolean;
  result: string;
  discount: number;
}

const DogMascot: React.FC<DogMascotProps> = ({ spinning, result, discount }) => {
  return (
    <div className="mr-8 relative">
      <div className={`transition-transform duration-300 ${spinning ? 'animate-bounce' : ''}`}>
        <Dog size={100} className="text-yellow-700" />
      </div>
      <div className="absolute -top-12 -right-4 bg-white rounded-lg p-2 shadow-md w-48">
        <p className="text-sm font-semibold text-center">
          {spinning
            ? "Woof! Let's spin!"
            : result
            ? `Yay! You won ${result} with a ${discount}% discount!`
            : "Spin the wheel!"}
        </p>
      </div>
    </div>
  );
};

export default DogMascot;