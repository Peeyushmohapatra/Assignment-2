import React, { useState } from 'react'
import "./Navbar.css"
import { users } from '../../Functions/function';


const Navbar = ({setUserdata,userData}) => {
    const [userName,setUserName] = useState("");


  return (
    <div className='navbar_container'>
      <div className="heading_container">
          <h1>SEARCH GITHUB USER</h1>
      </div>
        <div className="input_container">
        <input className='input' placeholder='Search Here 🔍' value={userName} onChange={(e) => {
            setUserName(e.target.value)
        }} type="text" />
        <button className='search_button' onClick={() => {
            users(userName,setUserdata)
            setUserName("")
            console.log(userData);
        }}>Search</button>
        </div>
    </div>
  )
}

export default Navbar