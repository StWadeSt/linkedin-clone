import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import InputOptions from './InputOptions';
import LikeIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'
import SendIcon from '@material-ui/icons/Send'

function Post({ name, profession, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="profile_image"/>
                <div className="description">
                    <h3>{name}</h3>
                    <h4>{profession}</h4>
                </div>
            </div>
            <div className="post__content">
                <p>{message}</p>
                <img src={photoUrl} alt=""/>
            </div>

            <div className="post__buttons">
                <InputOptions className="post__button" Icon={LikeIcon} title="Like" color="grey"/>
                <InputOptions className="post__button" Icon={CommentIcon} title="Comment" color="grey"/>
                <InputOptions className="post__button" Icon={ShareIcon} title="Share" color="grey"/>
                <InputOptions className="post__button" Icon={SendIcon} title="Send" color="grey"/>
            </div>
        </div>
    )
}

export default Post
