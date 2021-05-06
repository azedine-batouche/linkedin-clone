import React from 'react';
import './SideBar.css';
import { Avatar } from '@material-ui/core';
function SideBar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          alt='user_image'
        />
        <Avatar />

        <h2>Karl Smith</h2>
        <h4>karl.smith@outlook.com</h4>


      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,550</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('Reactjs')}
        {recentItem('Angular')}
        {recentItem('softwareenginering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default SideBar;
