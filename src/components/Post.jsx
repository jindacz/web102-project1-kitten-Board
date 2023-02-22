import './Post.css'

// prop = {name: value, comment: value, numLikes: value}
const Post = (props) => {
  return (
    <div className="Post">
     <p className="name">{props.name}</p>
      <p>{props.comment}</p>
      <p>❤️ {props.numLikes}</p>
    </div>
  )
}

export default Post;