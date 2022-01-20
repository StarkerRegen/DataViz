const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
  <>
    <circle
      cx={- eyeOffsetX}
      cy={- eyeOffsetY}
      r={eyeRadius}
      fill="black"
    />
    <circle
      cx={+ eyeOffsetX}
      cy={- eyeOffsetY}
      r={eyeRadius}
      fill="black"
    />
  </>
);

export default Eyes;