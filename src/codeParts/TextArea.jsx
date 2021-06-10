import React from 'react';
import '../style/TextArea.css';

class TextArea extends React.Component {
  render() {
    return (
      <div className="textArea">
        <label htmlFor="question">
          <textarea
            name="question"
            id="question"
            cols="30"
            rows="5"
            placeholder="Type your question"
          />
        </label>
      </div>
    );
  }
}

export default TextArea;
