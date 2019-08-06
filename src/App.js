import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/photos" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    )
  }
}

export default App
