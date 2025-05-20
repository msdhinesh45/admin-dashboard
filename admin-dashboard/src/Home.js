import React from 'react'
import { BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsFillBellFill } from 'react-icons/bs';

const Home = () => {
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
    </main>
  )
}

export default Home;