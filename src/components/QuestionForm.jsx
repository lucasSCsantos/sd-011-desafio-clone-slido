import React from 'react';
import PropTypes from 'prop-types';
import NameArea from '../codeParts/NameArea';
import TextArea from '../codeParts/TextArea';
import '../style/QuestionForm.css';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   question: '',
    //   name: '',
    // };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  changeStyles() {
    console.log(document.querySelector('.questionForm'));
    console.log(document.querySelector('.form'));
    console.log(document.querySelector('.textarea'));
  }

  render() {
    const { func, name, question, onSend } = this.props;
    return (
      <div className="questionForm">
        <h1>Ask the speaker</h1>
        <form>
          <div className="form">
            <TextArea func={ func } value={ question } click={ this.changeStyles } />
            <NameArea func={ func } value={ name } onSend={ onSend } />
          </div>
        </form>
      </div>
    );
  }
}

QuestionForm.propTypes = {
  name: PropTypes.string,
  question: PropTypes.string,
  func: PropTypes.func,
  onSend: PropTypes.func,
};

QuestionForm.defaultProps = {
  name: '',
  question: '',
  func: '',
  onSend: '',
};

export default QuestionForm;
