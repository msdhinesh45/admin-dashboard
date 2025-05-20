import React from 'react'
import { BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsFillBellFill } from 'react-icons/bs';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Home = () => {


const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
        <div className="card-inner">
          <h3>PRODUCTS</h3>
          <BsFillArchiveFill className='card_icon'></BsFillArchiveFill>
        </div>
        <h1>300</h1>
        </div>
        <div className="card">
        <div className="card-inner">
          <h3>CATEGORIES</h3>
          <BsFillGrid3X3GapFill className='card_icon'></BsFillGrid3X3GapFill>
        </div>
        <h1>12</h1>
        </div>
        <div className="card">
        <div className="card-inner">
          <h3>CUSTOMERS</h3>
          <BsPeopleFill className='card_icon'></BsPeopleFill>
        </div>
        <h1>39</h1>
        </div>
        <div className="card">
        <div className="card-inner">
          <h3>ALERTS</h3>
          <BsFillBellFill className='card_icon'></BsFillBellFill>
        </div>
        <h1>42</h1>
        </div>
      </div>


      {/* Charts section */}
      
      <div className="charts">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </main>
  )
}

export default Home;