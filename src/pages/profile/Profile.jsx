import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.scss';
import MyFriend from '../../assets/edit-2.png';
import { Users } from '../../dummy';
import pix from '../../assets/odu-edit.png';

const Profile = () => {
  return (
    <div>
    <Topbar />
    <div className='profile'>
        <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={MyFriend} alt="img1" className="profileCoverImg" />
                <img src={pix} alt="img2" className="profileUserImg" />
              </div>
              <div className="profileInfo">
                <h4 className='profileInfoName'>Lawal Anny</h4>
                <span className='profileInfoDesc'>Software Engineer</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile/>
            </div>
          </div>
         
    </div>


</div>
  )
}

export default Profile;