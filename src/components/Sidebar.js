import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SidebarIcon from './SidebarIcon'

export default class Sidebar extends Component {
  state = {
    isOpen: true
  }

  renderSidebar = () => {
    if (!this.state.isOpen) {
      return null
    }

    return <nav className="nav-sidebar">
            <ol>
              <Link to="/" className="sidebar-link">
                <li>Home</li>
              </Link>
              <Link to="/gallery" className="sidebar-link">
                <li>Gallery</li>
              </Link>
              <Link to="/contact" className="sidebar-link">
                <li>Contact</li>
              </Link>
              <Link to="/about" className="sidebar-link">
                <li>About</li>
              </Link>
              </ol>
            </nav>
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
  
  render() {
    return <div className="sidebar-container">
      {this.renderSidebar()}
      <div className="sidebar-icon">
        <SidebarIcon 
          isOpen={this.state.isOpen}
          handleClick={this.toggleSidebar}
        />
      </div>
    </div>
  }
}