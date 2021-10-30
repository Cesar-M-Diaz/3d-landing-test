import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Geometry from './Geometry';
import Overlay from './layout/Overlay';
import { Suspense } from 'react';
import { FadeIn, Slider } from './layout/styles';
import { useState } from 'react';

function App() {
  const [speed, setSpeed] = useState(1);
  const [target, setTarget] = useState(20);
  const [count, setCount] = useState(10);
  return (
    <>
      <Suspense fallback={null}>
        <Geometry speed={speed} target={target} count={count} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <Slider>
        <label htmlFor="speed">speed</label>
        <input
          name="speed"
          type="range"
          min="0"
          max="10"
          value={speed}
          step="0.1"
          onChange={(e) => setSpeed(e.target.value)}
        />
        <label htmlFor="depth of field">depth of field</label>
        <input
          name="depth of field"
          type="range"
          min="0"
          max="200"
          value={target}
          step="1"
          onChange={(e) => setTarget(e.target.value)}
        />
        <label htmlFor="amount">amount</label>
        <input
          name="amount"
          type="range"
          min="1"
          max="200"
          value={count}
          step="1"
          onChange={(e) => setCount(e.target.value)}
        />
      </Slider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
