import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './components/Contact'
// import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Router history={Home}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          {/* <Route exact path="/poses" component={} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
