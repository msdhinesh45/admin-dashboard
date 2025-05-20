import React from 'react'
import { BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs';

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
          <h3>PRODUCTS</h3>
          <BsFillArchiveFill className='card_icon'></BsFillArchiveFill>
        </div>
        <h1>300</h1>
        </div>
      </div>
    </main>
  )
}

export default Home;