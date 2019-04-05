
import axios from 'axios'
import React, { Component } from 'react'
import Rating from './Rating'
import ReviewList from './ReviewList'
//import ReactDOM from 'react-dom'
//import { Link } from 'react-router-dom'

  class RestaurantView extends Component {
    constructor (props) {
      super(props)
      this.state = {
        restaurant: this.props.restaurant
      }
    }

    componentDidMount () {
    }

    hasAddress2(address2) {
        if(address2!=null && address2!='') {
          return (<p>address 2</p>);
        } else {
          return null;
        }
    }

    render () {
      const { restaurant } = this.state
      //console.log(restaurant)
      const reviews = [{name: 'Paul',date: '2019-02-01'},{name: 'Jest',date: '2018-03-14'}]
      return (
        <div className="container-fluid">
          <div className="row">
            <img src="https://via.placeholder.com/965x150" alt="Main Image" />
          </div>
          <div>
            <h1>{restaurant.name}</h1>
          </div>
          <div>
            <p>{restaurant.address1}</p>
            {this.hasAddress2(restaurant.address2)}
            <p>{restaurant.city}, {restaurant.state_code} {restaurant.postal_code}</p>
          </div>
          <div>
            <Rating />
          </div>

          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="menu-tab" data-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="true">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="false">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">Menu Here</div>
            <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">About Here</div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab"><ReviewList reviews={reviews} /></div>
          </div>
        </div>
      )
    }
  }

  export default RestaurantView
