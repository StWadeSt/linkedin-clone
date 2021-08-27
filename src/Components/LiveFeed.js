import React, { useState, useEffect } from 'react';
import './LiveFeed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import VideoIcon from '@material-ui/icons/YouTube';
import NewsIcon from '@material-ui/icons/CalendarViewDay';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Post from './Post';
import image from '../images/profile_image.jpg';
import { database } from './firebase';

function LiveFeed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        database.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
          setPosts(snapshot.docs.map(doc => (
            {
              id: doc.id,
              data: doc.data(),
            }
          )))
        ))
      }, [])

    const sendPost = (event) =>{
        event.preventDefault();

    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon  className="editPost__button"/>
                    <form>
                        <input type="text" placeholder="Start a post"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#7085f9"/>
                    <InputOptions Icon={VideoIcon} title="Vidoe" color="#e52d27"/>
                    <InputOptions Icon={CalendarToday} title="Event" color="#4ee44e"/>
                    <InputOptions Icon={NewsIcon} title="Write article" color="grey"/>

                </div>
            </div>

            {posts.map((post) => (
                <Post 
                
                name="Stuart Stuurman" 
                profession="Dip Software Development Graduate" 
                message="Good day at work" 
                photoUrl={image}
            />
            ))}
            
        </div>
    )
}

export default LiveFeed
