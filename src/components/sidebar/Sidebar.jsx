import React from 'react'
import './sidebar.scss';
import { MdRssFeed, MdVideoLibrary, MdOutlineGroups } from 'react-icons/md';
import { BsFillChatLeftTextFill, BsBookmarkFill, BsQuestionSquare, BsBagCheck, BsCalendar4Event } from 'react-icons/bs';

import { FaGraduationCap } from 'react-icons/fa';
import { Users } from '../../dummy';
import CloseFriend from '../closeFriend/CloseFriend';
//import MyFriend from '../../assets/odu-edit.png';
//import pix from '../../assets/odu-edit.png';


function Sidebar(){
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <MdRssFeed className='sidebarIcon'/>
          <span className='sidebarListItemText'>Feed</span>
          </li>

          <li className="sidebarListItem">
          <BsFillChatLeftTextFill className='sidebarIcon'/>
          <span className='sidebarListItemText'>Chat</span>
          </li>

          <li className="sidebarListItem">
          <MdVideoLibrary className='sidebarIcon'/>
          <span className='sidebarListItemText'>Videos</span>
          </li>

          <li className="sidebarListItem">
          <MdOutlineGroups className='sidebarIcon'/>
          <span className='sidebarListItemText'>Groups</span>
          </li>

          <li className="sidebarListItem">
          <BsBookmarkFill className='sidebarIcon'/>
          <span className='sidebarListItemText'>Bookmarks</span>
          </li>

          <li className="sidebarListItem">
          <BsQuestionSquare className='sidebarIcon'/>
          <span className='sidebarListItemText'>Questions</span>
          </li>

          <li className="sidebarListItem">
          <BsBagCheck className='sidebarIcon'/>
          <span className='sidebarListItemText'>Jobs</span>
          </li>

          <li className="sidebarListItem">
          <BsCalendar4Event className='sidebarIcon'/>
          <span className='sidebarListItemText'>Events</span>
          </li>

          <li className="sidebarListItem">
          <FaGraduationCap className='sidebarIcon'/>
          <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
        {Users.map(u=>(
          <CloseFriend key={u.id} user={u} />
         ))}
         
               
        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar