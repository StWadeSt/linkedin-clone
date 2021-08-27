import { Avatar } from '@material-ui/core'
import React from 'react'
import './LeftSideBar.css'
import image from "../images/background_image.jpg"
import GroupIcon from '@material-ui/icons/Group'


function LeftSideBar({avatar}) {

    const recentItem = (item) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{item}</p>
        </div>
    )

    const groups = (item) =>(
        <div className="sidebar__group">
            <GroupIcon />
            <p>{item}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <img className="background" src={image} alt="" />
            <div className="sidebar__top">
                <Avatar className="sidebar__avatar" src={avatar}/>
                <h2>Stuart Stuurman</h2>
                <h4>stuartstuurman@gmail.com</h4>
            </div>

            <div className="sidebar__stats">

                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">2.3</p>
                </div>
                    
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2.3</p>
                </div>

            </div>

            <div className="sidebar__button">
                <div className="categories">
                    <p className="recents__title">Recent</p>
                    {recentItem('react.js')}
                    {recentItem('softwareengineering')}
                    {recentItem('sql')}
                    {recentItem('java')}
                    {recentItem('programming')}
                </div>
                
                <div className="categories">
                    <p className="sidebar__titles">Groups</p>
                    {groups('Java Developers')}
                    {groups('Software Developers')}
                    {groups('Android Developers')}
                </div>
                
                <div className="categories">
                    <p className="sidebar_titles">Followed Hashtags</p>
                    {recentItem('androidapps')}
                    {recentItem('webdevs')}
                </div>
                

            </div>
        </div>
    )
}

export default LeftSideBar
