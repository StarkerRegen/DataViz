import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';
import Face from './Face';

const width = 160;
const height = 160;

const array = range(20);

const App = () => {
  return array.map(() => (
  	<Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={7}
      eyeOffsetX={30}
      eyeOffsetY={30}
      eyeRadius={10 + Math.random() * 8}
      mouthWidth={10 + Math.random() * 10}
      mouthRadius={20 + Math.random() * 20}
    />
  ));
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
