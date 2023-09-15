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
                <h1><span className='span_tag'>Username:</span> <span className='user_data'>{userData.login}</span></h1>
                <h1><span className='span_tag'>Name:</span> <span className='user_data'>{userData.name}</span></h1>

                <div className="inner_data_container">
                <h3 className='box'><span className='span_tag'>No. of public repos:</span>  <span className='user_data'>{userData.public_repos}</span></h3>
                <h3 className='box'><span className='span_tag'>No. of public gists:</span> <span className='user_data'>{userData.public_gists}</span></h3>
                </div>
                <h3 className='box'><span className='span_tag'>Profile created:</span> <span className='user_data'>{(userData.created_at).slice(0,10)}</span></h3>
                <p>{userData.bio}</p>
            </div>
        </div> : userData.message === "Not Found" ? <h1 className='not_found'>Data Not Found !!!</h1> : <h1 className='initial_heading'>SEARCH FOR GITHUB REPO</h1>}
    </div>
  )
}

export default Display