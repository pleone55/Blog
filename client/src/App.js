import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Post Create</h1>
      <PostCreate/>
      <hr/>
      <h1>Posts</h1>
      <PostList/>
    </div>
  );
}

export default App;
