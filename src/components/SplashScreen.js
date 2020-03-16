import React, { Component } from 'react'
import NamesakeSplash from '../images/NamesakeSplash.png'


class SplashScreen extends Component {
  render() {
    return (
      <section className="splash-screen">
        <img src={NamesakeSplash} />
      </section>
    )
  }
}

export default SplashScreen