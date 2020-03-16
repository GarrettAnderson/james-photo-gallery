import React, {Component} from 'react'
import {Transition} from 'react-transition-group'

const duration = 1000

const sidebarStyle = {
  transition: `width ${duration}ms`
}

const sidebarTransitionStyles = {
  entering: { width: 0 },
  entered: { width: '200px' },
  exiting: { width: '200px' },
  exited: { width: 0 }
}

const linkStyle = {
  transition: `opacity ${duration}ms`
}

const linkTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
}

export default class SidebarContent extends Component {
  renderLinks = () => {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div style={{
          ...linkStyle,
          ...linkTransitionStyles[state]
        }}>
          <nav className="nav-sidebar">
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
        </div>
      )}

    </Transition>
  }

  render() {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div className="sidebar" style={{
          ...sidebarStyle,
          ...sidebarTransitionStyles[state]
        }}>
          {this.renderLinks()}
        </div>
      )}
    </Transition>
  }
}