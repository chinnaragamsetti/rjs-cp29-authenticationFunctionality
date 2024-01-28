// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="headercontainer">
    <li>
      <Link to="/" className="home">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="about">
        About
      </Link>
    </li>
  </ul>
)

export default Header
