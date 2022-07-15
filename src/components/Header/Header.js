import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='main'>
        <div className="logo">
            <img src="https://i.pinimg.com/originals/dc/ce/fb/dccefb789699a764dcfcf26b4394d264.png" alt="" />
        </div>
        <div className="heading">
            <h1>Weather Details Application</h1>
            <p>Get the wether details of your town in a nick of time.....</p>
        </div>
    </div>
  )
}

export default Header