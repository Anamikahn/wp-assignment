import React, {useEffect, useState} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Analytics(){
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch('http://127.0.0.1:5000/api/analytics')
      .then(res=>res.json())
      .then(j=>{
        setData({
          labels: j.labels,
          datasets: [{ label: 'Seats booked', data: j.values }]
        });
      });
  },[]);

  if(!data) return <div>Loading chart...</div>;

  return (
    <div>
      <h2>Analytics</h2>
      <Bar data={data} />
    </div>
  );
}
