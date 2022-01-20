import { useState, useCallback } from 'react'

const FaceContainer = ({children, width, height, centerX, centerY}) => {
  const initialMousePosition = {
    x: width,
    y: height,
  };
  const [mousePosition, setMousePosition] = useState(
    initialMousePosition
  );
  const handleMouseMove = useCallback(event => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  }, []);

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <g transform={`translate(${centerX},${centerY})`}>
        {children}
      </g>
      <circle
          cx={mousePosition.x / 6}
          cy={mousePosition.y / 3}
          r={5}
        />
    </svg>);
};

export default FaceContainer;