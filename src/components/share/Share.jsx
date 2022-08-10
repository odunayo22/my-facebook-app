import React from 'react';
import './share.scss';
import { MdPermMedia,MdOutlineLabel,MdLocationPin,MdOutlineEmojiEmotions } from 'react-icons/md';
import MyFriend from '../../assets/odu-edit.png';

export default function Share(){
    return(
        <div className='share'>
            <div className='shareWrapper'>
                <div className="shareTop">
                   
                 <img className="shareProfileImg" src={MyFriend}  alt="MyShare" />

                    <input placeholder="Whats in your mind Odun" className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                        <MdPermMedia className='shareIcon media'/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>

                        <div className="shareOption">
                        <MdOutlineLabel  className='shareIcon label'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>

                        <div className="shareOption">
                        <MdLocationPin  className='shareIcon location'/>
                            <span className='shareOptionText'>Location</span>
                        </div>

                        <div className="shareOption">
                        <MdOutlineEmojiEmotions  className='shareIcon outline'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}