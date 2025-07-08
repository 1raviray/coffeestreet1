import React from 'react' 
// import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const UserChart = () => {

  const data = [
    { name: 'Coffee', value: 8 },
    { name: 'Sandwich', value: 9 },
    { name: 'Waffles', value: 10 },
  ];
  
  const COLORS = ['#2F2105', '#E3613B', '#FCDAA7'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className=' container' style={{height:'50vh'}}>
        <ResponsiveContainer width="100%" height="100%">
        <h5 className=" fw-bold text-center">Products</h5>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className=' row'>
        <div className=' col-4'>
              <div className=' d-flex'>
                <p className=' me-2' style={{padding:'10px',backgroundColor:'#2F2105'}}></p>
                <p>Coffee</p>
              </div>
        </div>
        <div className=' col-4'>
              <div className=' d-flex'>
                <p className=' me-2' style={{padding:'10px',backgroundColor:'#E3613B'}}></p>
                <p>Sandwich</p>
              </div>
        </div>
        <div className=' col-4'>
              <div className=' d-flex'>
                <p className=' me-2' style={{padding:'10px',backgroundColor:'#FCDAA7'}}></p>
                <p>Waffles</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default UserChart