import './post.scss';
//import MyFriend from '../../assets/edit-2.png';
import { MdOutlineMoreVert } from 'react-icons/md';
import Heart from '../../assets/heart.png';
import Like from '../../assets/like.png';
import { useState } from 'react';

import { Users} from '../../dummy';
//import { ContactSupportOutlined } from '@mui/icons-material';



function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setisLiked] = useState(false)

    const likeHandler= () =>{
        setLike(isLiked ? like-1 : like+1) 
        setisLiked(!isLiked) 
    }
    return(
        <div className='post'>
            <div className="postWrapper">
                <div className='postTop'>
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt="MyPost" className='postProfileImg'/>
                        <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.Date}</span>
                    </div>
                    <div className="postTopRight">
                        <MdOutlineMoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'> {post?.desc}</span>
                    <img src={post.photo} alt="" className='postImg'/>
                </div>
                <div className='postBottom'>
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={Heart} alt="" onClick={likeHandler}/>
                        <img className='likeIcon' src={Like} alt=""  onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'>{post.comment} comments</span>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Post;