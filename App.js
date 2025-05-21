import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Mouse Click Tracker</h1>
      <div className="click-box" onClick={handleClick}>
        <p>Click inside this box</p>
        <p>Total Clicks: {clickCount}</p>
      </div>
    </div>
  );
}

export default App;
