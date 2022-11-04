import React from 'react'
import lendsqr from '../../dist/img/lendsqr.png'
import {BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import profIcon from '../../dist/img/image 4.png'

const Index: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__inner">
          <div className="navbar__items">
            <Link to="/dashboard">
              <img src={lendsqr} alt="" />
            </Link>
            <div className="navbar__search">
              <input type="search" className="navbar__searchinput" placeholder='search anything here'/>
              <button className='navbar__searchbtn'><BiSearch /></button>
            </div>
          </div>
          <div className="navbar__items">
            <Link className='navbar__docs__link' to='#'>docs</Link>

            <BsBell className='navbar__bell__icon' />

            <div className="dropdown">
              <button className="btn dropdown-toggle navbar__dropdown__toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profIcon} className="navbar__dropdown__image" alt="" />
                <span className="dropdown__text">Raphael</span>
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                <li><Link className="dropdown-item" to="/">Sign Out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index