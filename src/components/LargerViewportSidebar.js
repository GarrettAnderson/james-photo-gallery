import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class LargerViewportSidebar extends Component {
  render() {
    return (
          <nav className="larger-sidebar-nav-sidebar">
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
    );
  }
}

export default LargerViewportSidebar;