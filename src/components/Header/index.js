// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-item-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="logoimage1"
      alt="website logo"
    />
    <ul className="nav-items">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <button type="submit" className="btn">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
