import React, { useState } from 'react'
import "./Navbar.css"
import { users } from '../../Functions/function';


const Navbar = ({setUserdata,userData}) => {
    const [userName,setUserName] = useState("");


  return (
    <div className='navbar_container'>
        <input value={userName} onChange={(e) => {
            setUserName(e.target.value)
        }} type="text" />
        <button onClick={() => {
            users(userName,setUserdata)
            console.log(userData);
        }}>Search</button>
    </div>
  )
}

export default Navbar