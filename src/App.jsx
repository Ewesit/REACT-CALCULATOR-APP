
import './App.css';

import React, { useState } from 'react';

function App() {
  // State for the calculator display
  const [display, setDisplay] = useState('');

  // Function to handle button clicks and update the display
  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  // Function to calculate the result and update the display
  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  // Function to clear the display
  const clear = () => {
    setDisplay('');
  };

  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="calculator bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4 text-right text-2xl font-bold calculator__output">{display}</div>
        <div className="calculator__keys">
          
          {['/', '*', '-', '+'].map((operator) => (
            <button
              key={operator}
              className="bg-gray-200 p-4 rounded-lg"
              onClick={() => handleClick(operator)}
            >
              {operator}
            </button>
          ))}
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((number) => (
            <button
              key={number}
              className="bg-gray-200 p-4 rounded-lg"
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          ))}

          <button className="bg-gray-200 p-4 rounded-lg" onClick={clear}>
            AC
          </button>
          <button className="bg-gray-200 p-4 rounded-lg calculator__key--enter" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;