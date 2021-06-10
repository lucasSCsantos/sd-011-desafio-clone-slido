import React from 'react';
import NameArea from '../codeParts/NameArea';
import TextArea from '../codeParts/TextArea';
import '../style/QuestionForm.css';

class QuestionForm extends React.Component {
  render() {
    return (
      <div className="questionForm">
        <h1>Ask the speaker</h1>
        <form>
          <div className="form">
            <TextArea />
            <NameArea />
          </div>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
