import React from 'react'
import "./Display.css"

const Display = ({userData}) => {
  return (
    <div className='display_user_container'>
        {userData.message !== "Not Found" && userData.length !== 0 ? <div className='user_data_container'>
            <div className="image_container">
                <img src={userData.avatar_url} alt="" />
            </div>
            <div className="data_container">
                <h1>{userData.login}</h1>
                <h1>{userData.name}</h1>

                <h3>{userData.public_repos}</h3>
                <h3>{userData.public_gists}</h3>
                <h3>{userData.created_at}</h3>
                <p>{userData.bio}</p>
            </div>
        </div> : userData.message === "Not Found" ? <h1 className='not_found'>Data Not Found !!!</h1> : <h1 className='initial_heading'>SEARCH FOR GITHUB REPO</h1>}
    </div>
  )
}

export default Display