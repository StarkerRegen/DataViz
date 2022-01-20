export const AxisLeft = ({ width, yScale }) =>
  yScale.domain().map((tickValue) => (
    <g className="tick">
      <foreignObject
        x={-width}
        y={yScale(tickValue) - yScale.bandwidth() / 4}
        width={width}
        height={yScale.bandwidth() * 2}
      >
        <p key={tickValue} align="right" >{tickValue}</p>
      </foreignObject>
    </g>
  ));
