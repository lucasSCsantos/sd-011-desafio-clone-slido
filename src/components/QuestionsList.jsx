import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import '../style/QuestionsList.css';

class QuestionsList extends React.Component {
  changeBorder({ target }) {
    const { nodeName, firstChild } = target;
    if (nodeName === 'SPAN' || firstChild.nodeName === 'SPAN') {
      if (target.innerHTML.includes('Recent')) {
        document.querySelector('.list-bottom-lines').style.transform = 'translateX(0px)';
      } else {
        document.querySelector('.list-bottom-lines').style.transform = 'translateX(70px)';
      }
    }
  }

  render() {
    const { questions, upVote, sortOrd, sortPop } = this.props;
    const size = 130;
    const height = (questions.length * size);
    const sortButtons = (
      <div
        className="sort"
        onClick={ this.changeBorder }
        aria-hidden="true"
      >
        <span className="list-bottom-lines" />
        <button
          type="button"
          onClick={ sortOrd }
        >
          <span>Recent</span>
        </button>
        <button
          type="button"
          onClick={ sortPop }
        >
          <span>Popular</span>
        </button>
      </div>);
    return (
      <div className="completeList">
        { questions.length > 0 && sortButtons }
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
