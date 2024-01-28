// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="homecontainer">
      <Header />
      <h1 className="aboutroute">Home Route</h1>
      <LogoutButton />
    </div>
  )
}
export default Home
