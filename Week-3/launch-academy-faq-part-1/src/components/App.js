import React from 'react';
import FaqItem from './FaqItem'

class App extends React.Component {
  constructor(props) {
    // debugger
    super(props)
    this.state = {
      hide: 'hide'
    }
    this.toggleHide = this.toggleHide.bind(this)
  }

  toggleHide() {
    if (this.state.hide == 'hide') {
      this.setState( {hide: ''} )
    } else {
      this.setState( {hide: 'hide'} )
    }
  }

  render() {

    let onClickToggle = () => {
      this.toggleHide()
    }

    return(
      <FaqItem
        data={this.props.data[0]}
        onClickToggle={onClickToggle}
        hidden={this.state.hide}
      />
    )
  }
}

export default App;
