import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import '../style/QuestionsList.css';

class QuestionsList extends React.Component {
  render() {
    const { questions, upVote, sortPop, sortOrd } = this.props;
    const size = 130;
    const height = (questions.length * size);
    return (
      <div className="completeList">
        <div className="sort">
          <button type="button" onClick={ sortPop }>Popular</button>
          <button type="button" onClick={ sortOrd }>Recent</button>
        </div>
        <div className="questionsList" style={ { height: `${height}px` } }>
          {questions.map((question, index) => (
            <Question key={ index } question={ question } upVote={ upVote } />
          ))}
        </div>
      </div>
    );
  }
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(Object),
  upVote: PropTypes.func,
  sortPop: PropTypes.func,
  sortOrd: PropTypes.func,
};

QuestionsList.defaultProps = {
  questions: '',
  upVote: '',
  sortPop: '',
  sortOrd: '',
};

export default QuestionsList;
