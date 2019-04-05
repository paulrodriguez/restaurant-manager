
import React, { Component } from 'react'


class Review extends Component {
  constructor (props) {
    super(props)
    this.state = {
      review: this.props.review
    }
  }

  render () {
    const { review } = this.state
    console.log(review)
    return (
      <div className="row">
        <div className="col">
          {review.name}
        </div>
        <div className="col-auto">
          {review.date}
        </div>
      </div>
    )
  }
}

export default Review
