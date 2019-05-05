import React, { Component } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Gallery />
      </section>
    )
  }
}

export default App
