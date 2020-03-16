import React from 'react'

const SidebarIcon = ({handleClick, isOpen}) => {
  return <span onClick={handleClick}>
    {isOpen ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
  </span>
}

export default SidebarIcon