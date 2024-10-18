import React, { useState } from 'react';
import PrizeWheel from './components/PrizeWheel';
import DogMascot from './components/DogMascot';

const prizes = ['Bone', 'Toy', 'Treat', 'Walk', 'Belly Rub', 'New Collar'];
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];

function App() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [resultColor, setResultColor] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleSpin = () => {
    setSpinning(true);
    setResult('');
    setDiscount(0);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      const randomPrize = prizes[randomIndex];
      const prizeColor = colors[randomIndex];
      const randomDiscount = Math.floor(Math.random() * 20) + 5; // Random discount between 5% and 25%
      setSpinning(false);
      setResult(randomPrize);
      setResultColor(prizeColor);
      setDiscount(randomDiscount);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Spin the Wheel Game</h1>
      <div className="flex items-center mb-8">
        <DogMascot spinning={spinning} result={result} discount={discount} />
        <div className="relative">
          <PrizeWheel spinning={spinning} />
        </div>
      </div>
      <button
        onClick={handleSpin}
        disabled={spinning}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel!'}
      </button>
      {result && (
        <div className="mt-4 text-center">
          <p className="text-2xl font-semibold" style={{ color: resultColor }}>
            You won: {result}!
          </p>
          <p className="text-xl font-semibold text-green-600">
            With a {discount}% discount!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;