import React from 'react';
import './Table.css';
import { BarChart } from '@mui/x-charts/BarChart';
import {  blueberryTwilightPaletteLight } from '@mui/x-charts';
import { CSVLink, CSVDownload } from "react-csv";

const Table = ({ revenue, percentage }) => {
  let totalRevenue = 0; 
        const calculateProjectedRevenue = (revenue, percentage) => {
          const revenueNum = parseFloat(revenue);
          const percentageNum = parseFloat(percentage);
          const rows = [];
      
          if (!isNaN(revenueNum) && !isNaN(percentageNum)) {
            for (let year = 1; year <= 5; year++) {
              const projectedRevenue = revenueNum * Math.pow(1 + percentageNum / 100, year);
              totalRevenue += projectedRevenue; 
              rows.push({
                year: year,
                revenue: projectedRevenue.toFixed(2), // Round to 2 decimal places
                growthPercentage: percentageNum,
              });
            }
          }
          return rows;
        };
      
        const rows = calculateProjectedRevenue(revenue, percentage);

  return (
    <div>
      <table border="1" style={{ margin: '10px auto', width: '80%' }}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Revenue</th>
            <th>Percentage Growth</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.revenue}</td>
              <td>{row.growthPercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>

  <div className="output">

      <div className="info">
    <h4>Total Revenue : {totalRevenue.toFixed(2)}</h4>
      <h4>Average Growth Rate : {percentage}%</h4>
      <h4>Highest Growth in year : 5 </h4>
      <CSVLink data={rows} filename="revenue_data.csv" style={{background:'white', borderRadius:'2rem',textDecoration:'none',padding:'.5rem',marginTop:'1rem' }}>
        Download as CSV
      </CSVLink>
      </div>

      <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['1st year', '2nd year', '3rd year','4th year','5th year'],
          scaleType: 'band',
          tick: {
            fill: 'white',  
          },
          axis: {
            line: {
              stroke: 'white',  
            },
          },
        },
      ]}

    
      series={[
        {
          data: rows.map(row => parseFloat(row.revenue)),
        },
      ]}
      width={500}
      height={300}
      colors={blueberryTwilightPaletteLight}
    />


  </div>


    </div>


);


};

export default Table;


