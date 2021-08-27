import React from 'react';
import './App.css';
import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import LiveFeed from './Components/LiveFeed';


function App() {
  return (
    <div className="app">
      <Header />
      

      <body>
        <LeftSideBar />
        <LiveFeed />
        <RightSideBar />
      </body>
    </div>
  );
}

export default App;
