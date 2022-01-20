import OuterCircle from './OuterCircle'
import Eyes from './Eyes'
import Mouth from './Mouth'
import FaceContainer from './FaceContainer'

const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
  circleX,
  circleY
}) => (
  <FaceContainer
    width={width} 
    height={height}
    centerX={centerX}
    centerY={centerX}>
    <OuterCircle 
      radius={centerY - strokeWidth / 2} 
      strokeWidth={strokeWidth}
    />
    <Eyes 
      eyeOffsetX={eyeOffsetX} 
      eyeOffsetY={eyeOffsetY} 
      eyeRadius={eyeRadius} 
    />
    <Mouth 
      mouthRadius={mouthRadius} 
      mouthWidth={mouthWidth}
    />
	</FaceContainer>
);

export default Face;