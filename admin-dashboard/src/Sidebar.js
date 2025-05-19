import React from 'react'
import { BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs';
const Sidebar = () => {
  return (
    <aside>
      <div className='sidebar-title'>
      <div className='sidebar-brand'>
        <BsCart3 className="header_icon" />SHOP
      </div>
      <span className="icon close_icon">X</span>    
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-iten'>
          <a href=''>
            <BsGrid1X2Fill className='icon' />Dashboard
          </a>
        </li>
        <li className='sidebar-list-iten'>
          <a href=''>
            <BsFillArchiveFill className='icon' />Products
          </a>
        </li>
        <li className='sidebar-list-iten'>
          <a href=''>
            <BsFillGrid3X3GapFill className='icon' />Categories
          </a>
        </li>
        <li className='sidebar-list-iten'>
          <a href=''>
            <BsPeopleFill className='icon' />Customers
          </a>
        </li>
        <li className='sidebar-list-iten'>
          <a href=''>
            <BsListCheck className='icon' />Inventory
          </a>
        </li>
        <li className='sidebar-list-iten'>
          <a href=''>
            <BsMenuButtonWideFill className='icon' />Reports
          </a>
        </li>
        <li className='sidebar-list-iten'>
          <a href=''>
            <BsFillGearFill className='icon' />Settings
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;