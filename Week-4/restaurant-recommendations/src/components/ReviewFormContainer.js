import React, { Component } from 'react'
import TextField from './TextField'

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant_id: this.props.restaurant_id,
      name: '',
      rating: '',
      review: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleReviewChange = this.handleReviewChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({ name: event.target.value })
  }

  handleRatingChange(event){
    this.setState({ rating: event.target.value })
  }

  handleReviewChange(event){
    this.setState({ review: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("hi")
    let newReview = {
      restaurant_id: this.state.restaurant_id,
      name: this.state.name,
      rating: parseInt(this.state.rating),
      content: this.state.review
    }

    this.props.trackNewReview(newReview)
  }

  render() {
    return (
      <div>
        <h4> New Review Form </h4>
        <form onSubmit={this.handleSubmit}>
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
            name='content'
            handleTextFieldChange={this.handleReviewChange}
            content={this.state.content}
          />
          <input className="button" type="submit" value="Submit" />
        </form>

      </div>
    )

  }

}

export default ReviewFormContainer
