import React from 'react';

import './App.css'
import Post from './components/Post'

// prop = {name: value, comment: value, numLikes: value}

const App = () => {
  return (
    <div className="App">
           <h1>Food track favoruites</h1>
      {/* <h3>Write a post about what you are excited to learn about!</h3> */}
      <Post name="Birria-Landia" location="Mexican" img={'./images/img01.jpg'}/>
      <Post name="Mysttik Masala" location="Indian"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      <Post name="The Halal Guys" location="Middle Eastern"/>
      

    </div>
  )
}
export default App;
