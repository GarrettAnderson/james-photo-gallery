import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SidebarIcon from './SidebarIcon'
import SidebarContent from './SidebarContent'

export default class Sidebar extends Component {
  state = {
    isOpen: false
  }

  renderSidebar = () => {
    if (!this.state.isOpen) {
      return null
    }
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
  
  render() {
    return <div className="sidebar-container">
      {this.renderSidebar()}
      <SidebarContent isOpen={this.state.isOpen}/>
      <div className="sidebar-icon">
        <SidebarIcon 
          isOpen={this.state.isOpen}
          handleClick={this.toggleSidebar}
        />
      </div>
    </div>
  }
}