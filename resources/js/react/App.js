import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RestaurantView from './RestaurantView'

class App extends Component {
  render () {
    return (
    <RestaurantView restaurant={this.props.restaurant} />
    )
  }
}

ReactDOM.render(<App restaurant={restaurant} />, document.getElementById('app'))
