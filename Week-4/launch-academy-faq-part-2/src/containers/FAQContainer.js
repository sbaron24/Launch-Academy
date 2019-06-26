import React from 'react';
import Question from '../components/Question';
import FormContainer from './FormContainer'

class FAQContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: []
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
    this.addNewFAQ = this.addNewFAQ.bind(this)
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  componentDidMount() {
    fetch("/api/v1/questions")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let error = new Error('something went wrong!')
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ questions: body })
    })
  }

  addNewFAQ(newFAQ) {
    fetch("/api/v1/questions", {
      method: 'POST',
      body: JSON.stringify(newFAQ)
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let error = new Error('something went wrong!')
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      let newQuestions = this.state.questions.concat(body)
      this.setState({ questions: newQuestions })
    })
    .catch(error => {
      console.log('something went wrong!')
    })
  }

  render() {
    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We Are Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>

        <div className='form-container'>
          <FormContainer addNewFAQ={this.addNewFAQ}/>
        </div>

      </div>
    )
  }
}

export default FAQContainer;
