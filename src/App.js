import React, {Component} from 'react'
import Pricing from './pages/pricing'
import How from './pages/how-it-works'
import Features from './pages/features'
import Home from './pages/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    const pageProps = this.props
    console.log(pageProps)
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/how" component={How} exact></Route>
            <Route path="/features" component={Features} exact></Route>
            <Route path="/pricing" component={Pricing} exact></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App