import React from 'react'

const FaqItem = (props) => {
  // debugger
  return (
    <div>
      <div className='container'>
        <div className='faq-item'>
          <i className="fa fa-plus-square" aria-hidden="true" onClick={props.onClickToggle}></i>
          <span className='question'>{props.data.question}</span>
          <p className={props.hidden}>{props.data.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqItem;
