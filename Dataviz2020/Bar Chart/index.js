import React from 'react';
import ReactDOM from 'react-dom';
import { scaleBand, scaleLinear, max, format } from 'd3';
import { getData } from './getData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Bars } from './Bars';

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const width = 960;
const height = 500;
const margin = {
  top: 20,
  right: 20,
  bottom: 60,
  left: 100,
};

const App = () => {
  const data = getData(csvUrl);
  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.2);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  const sFormat = format('.2s');
  const xAxisTickFormat = (tickValue) => sFormat(tickValue).replace('G', 'B');
  
  return (
    <svg width={width} height={height}>
      <g
        transform={`translate(${margin.left},${margin.top})`}
      >
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft width={margin.left} yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + 50}
          textAnchor="middle"
        >
          Population
        </text>
        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipsFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
