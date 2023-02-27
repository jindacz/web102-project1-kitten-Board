import './Post.css'

// prop = {name: value, comment: value, numLikes: value}
const Post = (props) => {
  return (
    <div className="Post">
     <img src="http://placekitten.com/200/300" alt={props.name} />
     <h3 className="name">{props.name}</h3>
      <p>{props.location}</p>
      <button className='button'>{props.link && <a href={props.link}>View {props.linkText}</a>}</button>
      
    </div>
  )
}

export default Post;