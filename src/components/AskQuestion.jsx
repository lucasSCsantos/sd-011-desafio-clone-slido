import React from 'react';
import PropTypes from 'prop-types';
import QuestionForm from './QuestionForm';
import QuestionsList from './QuestionsList';

class AskQuestion extends React.Component {
  render() {
    const {
      func, name, question,
      onSend, questions, upVote,
      sortPop, sortOrd,
    } = this.props;
    return (
      <div>
        <QuestionForm
          func={ func }
          name={ name }
          question={ question }
          onSend={ onSend }
        />
        <QuestionsList
          questions={ questions }
          upVote={ upVote }
          sortPop={ sortPop }
          sortOrd={ sortOrd }
        />
      </div>
    );
  }
}

AskQuestion.propTypes = {
  name: PropTypes.string,
  question: PropTypes.string,
  func: PropTypes.func,
  onSend: PropTypes.func,
  questions: PropTypes.arrayOf(Object),
  upVote: PropTypes.func,
  sortPop: PropTypes.func,
  sortOrd: PropTypes.func,
};

AskQuestion.defaultProps = {
  name: '',
  question: '',
  func: '',
  onSend: '',
  questions: '',
  upVote: '',
  sortPop: '',
  sortOrd: '',
};

export default AskQuestion;
