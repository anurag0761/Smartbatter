import React from 'react';
import {G, Line} from 'react-native-svg';
import {polarToCartesian} from './utils';

const ClockTicks = props => {
  const {radius, center, divisons, scale = 4, size = 10} = props;
  const divisonsArray = new Array(divisons).fill(1);

  const divisonSticks = divisonsArray.map((_, index) => {
    const start = polarToCartesian(
      center,
      center,
      radius - size * 0.036,
      index * scale,
    );
    const end = polarToCartesian(center, center, radius, index * scale);
    return (
      <Line
        stroke="#28ABD8"
        strokeWidth={2}
        strokeLinecap="round"
        key={index}
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
      />
    );
  });

  return <G>{divisonSticks}</G>;
};

export default ClockTicks;
