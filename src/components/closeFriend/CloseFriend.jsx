import './closeFriend.scss';

const CloseFriend = ({user}) => {
  return (
    <li className='sidebarFriend'>
         <img className='sidebarFriendImg' src={user.profilePicture} alt="my-Friend" />   
         <span className='sidebarFriendName'>{user.username}</span>
     </li>

  )
}

export default CloseFriend;
