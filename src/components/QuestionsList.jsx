import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import '../style/QuestionsList.css';

class QuestionsList extends React.Component {
  render() {
    const { questions } = this.props;
    const bagu = (questions.length);
    console.log(bagu);
    return (
      <div className="questionsList" style={ { height: `${bagu}px` } }>
        {questions.map((question, index) => (
          <Question key={ index } question={ question } />
        ))}
      </div>
    );
  }
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(Object),
};

QuestionsList.defaultProps = {
  questions: '',
};

export default QuestionsList;
