import React, { useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../inputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Post from '../post/Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input type='text' placeholder='Start a post' />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}

      <Post
        name='Karl Smith'
        description='My description'
        message='woow this works, sooo fanny'
      />
    </div>
  );
}

export default Feed;
