import React, {Component} from 'react'
import TextField from '../components/TextField'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: ""
    }
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
    this.handleNewFAQ = this.handleNewFAQ.bind(this)
  }

  handleTextFieldChange(event) {
    let stateName = event.target.name
    this.setState({ [stateName]: event.target.value })
  }

  handleNewFAQ(event) {
    event.preventDefault()
    let newFAQ = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.addNewFAQ(newFAQ)
    this.clearForm()
  }

  clearForm() {
    this.setState({ question: '', answer: '' })
  }

  render() {


    return(
      <div>

      <h3> Submit New FAQ </h3>

        <form onSubmit={this.handleNewFAQ}>
          <TextField
            label='Question:'
            name='question'
            content={this.state.question}
            handleChange={this.handleTextFieldChange}
          />

          <TextField
            label='Answer:'
            name='answer'
            content={this.state.answer}
            handleChange={this.handleTextFieldChange}
          />

          <input className='button' type='submit' value='Submit!'/>
        </form>

      </div>
    )
  }
}

export default FormContainer;
