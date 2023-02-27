import React from 'react';

import './App.css'
import Post from './components/Post'

// prop = {name: value, comment: value, numLikes: value}

const App = () => {
  return (
    <div className="App">
      <h1>Animal favoursites</h1>
      {/* <h3>Write a post about what you are excited to learn about!</h3> */}
      <div className="PostList">
        <Post name="Birria-Landia" location="Mexican" img="./images/img01.jpg" link="https://placekitten.com/"/>
        <Post name="Mysttik Masala" location="Indian" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
        <Post name="The Halal Guys" location="Middle Eastern" link="https://placekitten.com/"/>
      </div>

    </div>
  )
}
export default App;
