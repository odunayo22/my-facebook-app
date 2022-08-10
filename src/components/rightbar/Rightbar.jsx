
import React from 'react'
import './rightbar.scss';
import Gift from '../../assets/gift.jpg';
import Group from '../../assets/groups.jpg';

import { Users } from '../../dummy';
import Online from '../online/Online'; 
import Me from '../../assets/odun-edit.png';
import Home from '../../pages/home/Home';


function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
<>
      <div className="birthdayContainer">
          <img className='birthdayImg' src={Me} alt ="rightBar " />
          <span className="birthdayText"><b>Adesire Angel</b> and <b>5 other friends</b> have a birthday today</span>
        </div>
        <img src={Group} alt="MyAds" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
         {Users.map(u=>(
          <Online key={u.id} user={u} />
         ))}
        </ul>
</>
    )
  };

  const ProfileRightbar = () =>{
    return(
      <div className='all-side'>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">Osogbo</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Nigeria</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship :</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={Me} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Abigail Itoro</span>
        </div>

        <div className="rightbarFollowing">
          <img src={Gift} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Abigail Itoro</span>
        </div>

        <div className="rightbarFollowing">
          <img src={Me} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Abigail Itoro</span>
        </div>

        <div className="rightbarFollowing">
          <img src={Me} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Abigail Itoro</span>
        </div>

        <div className="rightbarFollowing">
          <img src={Me} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Abigail Itoro</span>
        </div>
      </div>
      </div>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <Home />}
      </div>
    </div>
  )
}

export default Rightbar