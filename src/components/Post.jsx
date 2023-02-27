import './Post.css'

// prop = {name: value, comment: value, numLikes: value}
const Post = (props) => {
  return (
    <div className="Post">
     <img src={props.image} alt={props.name} />
     <h3 className="name">{props.name}</h3>
      <p>{props.location}</p>
      <button>View Menu</button>
    </div>
  )
}

export default Post;