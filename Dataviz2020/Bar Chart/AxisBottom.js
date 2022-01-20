export const AxisBottom = ({xScale, innerHeight, tickFormat}) =>
  xScale.ticks().map((tickValue) => (
    <g className="tick" transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} stroke="gray" />
      <text
        key={tickValue}
        style={{ textAnchor: 'middle' }}
        dy=".71em"
        y={innerHeight + 5}
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ));