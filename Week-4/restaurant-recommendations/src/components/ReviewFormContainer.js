import React, { Component } from 'react'
import TextField from './TextField'

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      rating: '',
      review: '',
      restaurant_id: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleReviewChange = this.handleReviewChange.bind(this)

  }

  handleNameChange(event){
    this.setState({ name: event.target.value, restaurant_id: event.target.value })
  }

  handleRatingChange(event){
    this.setState({ rating: event.target.value })
  }

  handleReviewChange(event){
    this.setState({ review: event.target.value })
  }


  render() {

    return (
      <div>
        <h4> New Review Form </h4>
        <TextField
          label='Name:'
          name='name'
          handleTextFieldChange={this.handleNameChange}
          content={this.state.name}
        />

        <TextField
          label='Rating:'
          name='rating'
          handleTextFieldChange={this.handleRatingChange}
          content={this.state.rating}
        />

        <TextField
          label='Review:'
          name='reviewText'
          handleTextFieldChange={this.handleReviewChange}
          content={this.state.review}
        />
      </div>
    )

  }

}

export default ReviewFormContainer
