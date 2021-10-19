import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Geometry from './Geometry';
import Overlay from './layout/Overlay';
import { Suspense } from 'react';
import { FadeIn, LeftMiddle } from './layout/styles';
import { useState } from 'react';

function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Suspense fallback={null}>
        <Geometry speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type="range" min="0" max="20" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
