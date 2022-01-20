export const Bars = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipsFormat
}) =>
  data.map((d) => (
    <rect
      className="mark"
      key={yValue(d)}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipsFormat(xValue(d))}</title>
    </rect>
  ));
