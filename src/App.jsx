import './App.css'
import Post from './components/Post'

// prop = {name: value, comment: value, numLikes: value}

const App = () => {
  return (
    <div className="App">
           <h1>Food track favoruites</h1>
      {/* <h3>Write a post about what you are excited to learn about!</h3> */}
      <Post name="Marques Brownlee" comment="I LOVE CS" numLikes="100"/>
      <Post name="William McPhail" comment=":crickets:" numLikes="100000"/>
    </div>
  )
}
export default App;
