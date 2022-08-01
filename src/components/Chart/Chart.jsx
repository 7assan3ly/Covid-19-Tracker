import React, { useEffect, useState } from 'react'
import styles from './Chart.module.css'
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js';


export default function Chart({data:{confirmed, recovered, deaths}, country}) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [dailyData, setDailyData] = useState({})

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);
  
   const options = {
    responsive: true,
  };
  
   const lineChart = (
     dailyData.length ? 
     (
      <Line
          options={options}
          data = {{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
              data: dailyData.map(({confirmed}) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
            },{
              data: dailyData.map(({deaths}) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true
            }]
          }}
       />
     ) : null
   );

   const barChart = (
     confirmed ? 
     (
      <Bar 
       data = {{
         labels : ['infected', 'recovered', 'deaths'],
         datasets : [{
           label : 'people',
           backgroundColor : ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
           data : [
             confirmed.value, recovered.value, deaths.value
           ]
         }]
       }}
       options={{
         legend : {display:false},
         title : {display:true, text:`Current state in ${country}`}
       }}/>
     ) : null
   )

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}
