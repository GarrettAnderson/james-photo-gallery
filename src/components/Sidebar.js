import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SidebarIcon from './SidebarIcon'

export default class Sidebar extends Component {
  
  renderSidebar = () => {
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
  
  render() {
    return <div className="sidebar-container">
      {this.renderSidebar()}
      {/* <section className="nav-section">
            <button className="home-nav-hamburger" onClick={() => this.setState({ navShown: !this.state.navShown })}>
              {this.state.navShown ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
            </button>
            <nav className={`home-nav-dropdown ${this.state.navShown ? 'is-shown' : ''} `}>
              <ol>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/gallery">
                  <li>Gallery</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
              </ol>
            </nav>
          </section> */}
    </div>
  }
}