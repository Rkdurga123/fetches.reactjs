// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogITem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="list-items">
      <div className="avatar-img">
        <img src={imageUrl} className="img" alt={`item${id}`} />
      </div>
      <div className="text-container">
        <p className="name">{topic}</p>
        <h1 className="title">{title}</h1>
        <div className="img-text-container">
          <img src={avatarUrl} className="image" alt={`avatar${id}`} />
          <p className="author">{author}</p>
        </div>
      </div>
    </Link>
  )
}
export default BlogITem
