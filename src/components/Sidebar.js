import React, {Component} from 'react'

export default class Sidebar extends Component {
  
  renderSidebar = () => {
    return <nav className="nav-sidebar">
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
  }
  
  render() {
    return <div className="sidebar-container">
      I'm the Sidebar
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