import React from 'react';
import './App.css';
import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import LiveFeed from './Components/LiveFeed';
import profile_image from './images/profile_image.jpg'


function App() {
  return (
    <div className="app">
      <Header avatar={profile_image} />

      <div className="app__body">
        <LeftSideBar avatar={profile_image} />
        <LiveFeed />
        <RightSideBar />
      </div>
      
    </div>
  );
}

export default App;
