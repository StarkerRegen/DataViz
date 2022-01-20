import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const getData = (csvUrl) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      // 将字符串转换为数字
      d.Population = +d['2020'] * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);
