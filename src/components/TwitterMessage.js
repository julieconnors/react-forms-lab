import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      charCount: props.maxChars

    };
  }

  handleMessageChange = (event) => {
    this.updateCharCount()

    this.setState({
      message: event.target.value 
    })
  }

  updateCharCount = () => {
    this.setState(previousState => {
      return {
        charCount: previousState.charCount - 1
      }
    }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessageChange} type="text" name="message" id="message" value={this.state.message}/>
        <p>Chars left: {this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
