import './index.css'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container" testid="loader">
    <div className="profile-container">
      <UserInfo />
    </div>
    <div className="blogs-container">
      <BlogList />
    </div>
  </div>
)

export default Home
