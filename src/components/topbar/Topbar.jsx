import './topbar.scss';
import SearchIcon from '@mui/icons-material/Search';

import pix from '../../assets/odu-edit.png';
 import { IoMdPerson } from 'react-icons/io';
 import { BsFillChatRightTextFill } from 'react-icons/bs';
 import {  MdNotifications } from 'react-icons/md';

 

function Topbar(){
    return(
        <div className='topbarContainer'>
          <div className="topbarLeft">  
            <span className="logo">MyFacebook            </span>
           </div>
          <div className="topbarCenter"> 
          <div className="searchbar">
                <SearchIcon  className='searchIcon'/>
                <input  placeholder="search for a friend, post or video" className="searchInput" />
            </div>
            </div>
          <div className="topbarRight"> 
            <div className='topbarLinks'>
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className="topbarIconItem">
                    <IoMdPerson/>
                    <span className="topbarIconBadge">1</span>
                </div>

                <div className="topbarIconItem">
                    <BsFillChatRightTextFill />
                    <span className="topbarIconBadge">3</span>
                </div>

                <div className="topbarIconItem">
                    < MdNotifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src= {pix} alt="" className="topbarImg" />
         </div>

            
        </div>
        
    )
}

export default Topbar;