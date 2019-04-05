
import React, { Component } from 'react'
import Review from './Review'

class ReviewList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: this.props.reviews
    }
  }

  getList (reviews) {
      console.log('calling get list');
      let review_list = reviews.map((review) => <Review review={review} />)
      console.log(review_list)
      return review_list
  }

  render () {
    const { reviews } = this.state
    console.log(reviews)
    return (
      <div className="container-fluid">
        {this.getList(reviews)}
      </div>
    )
  }
}

export default ReviewList
