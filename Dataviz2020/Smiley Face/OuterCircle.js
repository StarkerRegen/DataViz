const OuterCircle = ({radius, strokeWidth}) => (
  <circle
    r={radius}
    fill="yellow"
    stroke="black"
    stroke-width={strokeWidth}
  />
);

export default OuterCircle;